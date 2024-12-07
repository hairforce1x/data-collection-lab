const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";

strToArray = csv.split("\n"); // converting the long string into an array w strings inside

let veryFinePeople = [];
for (i=0; i<strToArray.length; i++){
    let row = strToArray[i].split(",");
    veryFinePeople.push(row);
}
console.log(veryFinePeople);