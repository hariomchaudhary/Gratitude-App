let db;
let dbOpenRequest = indexedDB.open('PDF', 1);
dbOpenRequest.onupgradeneeded = function (e) {
    db = e.target.result;
    db.createObjectStore('Sheet', { keyPath: 'sid' }); // table will only be create when db is create first time
};
dbOpenRequest.onsuccess = function (e) {
    db = e.target.result;
    fetchMedia();
};
dbOpenRequest.onerror = function (e) {
    alert('Inside on error !!');
};

function fetchMedia() {
    let txnObject = db.transaction('Sheet', 'readonly');
    let mediaTable = txnObject.objectStore('Sheet');
    let cursorObject = mediaTable.openCursor(); // to iterate on all the rows / tuples
    cursorObject.onsuccess = function (e) {
        let cursor = cursorObject.result;
        if (cursor) {
            let sheetObj = cursor.value;
            appendSheet(sheetObj);
            cursor.continue();
        }
    };
}

function appendSheet(sheetObj) {
    let sheetDiv = document.createElement('div');
    sheetDiv.classList.add('page');
    sheetDiv.innerHTML = '<img class= "sheet-img" src="" alt="">';
    sheetDiv.querySelector('img').src = sheetObj.url;
    document.querySelector('.pdf').append(sheetDiv);
}


document.querySelector('.back').addEventListener('click', function(){
    window.location.assign('index.html');
})

//pdf download

document.getElementById('pdfBtn'),addEventListener('click', function(){
    const notes  = this.document.querySelector('.pdf')
    console.log(notes);
    html2pdf().from(notes).save();
})