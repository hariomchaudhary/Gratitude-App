// initialize DB
let db;

let dbOpenRequest = indexedDB.open("PDF", 1);
dbOpenRequest.onupgradeneeded = function (e) {
  db = e.target.result;
  db.createObjectStore("Sheet", { keyPath: "sid" }); // table will only be create when db is create first time
};

dbOpenRequest.onsuccess = function (e) {
  db = e.target.result;
};

dbOpenRequest.onerror = function (e) {
  alert("Inside on error !!");
};
