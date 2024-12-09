const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

let strToArray = csv.split("\n");
let cachedArray = [];
for (let i = 0; i < strToArray.length; i++) {
    let row = strToArray[i].split(",");
    cachedArray.push(row);
}


// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let headers = cachedArray[0].toString().toLowerCase().split(",");
let dataObjects = cachedArray.slice(1).map(function (row) {
    let obj={};
   row.forEach(function(value, index) {
        obj[headers[index]] = value;
    });
    return obj;
})

