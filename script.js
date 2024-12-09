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
    let obj = {};
    row.forEach(function (value, index) {
        obj[headers[index]] = value;
    });
    return obj;
})

// Remove the last element from the sorted array.
// Insert the following object at index 1:
newObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
endObj = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

let partFourArray = dataObjects.splice(-1);
dataObjects.splice(1, 0, newObj);
dataObjects.push(endObj);

let allAges = 0;
for (let i = 0; i < dataObjects.length; i++) {
    allAges += Number(dataObjects[i].age);
}

let averageAge = allAges / dataObjects.length;

// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!
// Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.
let finalHeaders = Object.keys(dataObjects[0]).join(",");
let finalRows = []

for (let i = 0; i < dataObjects.length; i++) {
    let row = Object.values(dataObjects[i]).join(",");
    finalRows.push(row);
}

// let final = rows.toString();
//  console.log(final)
const newcsv = [finalHeaders].concat(rows).join("\n")

console.log(csv);
console.log(newcsv);