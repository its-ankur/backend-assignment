const fs = require('fs');
const path = require('path');

fs.mkdir("E:\\backend assignment\\Chitkara", function (error) {
    if (error) {
        console.log(error);
    }
    console.log("Directory created successfully!");
});

fs.mkdir("E:\\backend assignment\\Chitkara\\Course", function (error) {
    if (error) {
        console.log(error);
    }
    console.log("Directory created successfully!");
});

fs.mkdir("E:\\backend assignment\\Chitkara\\Student", function (error) {
    if(error){
        console.log(error);
    }
    console.log("Directory created successfully!");
});

fs.mkdir("E:\\backend assignment\\Chitkara\\Faculty", function (error) {
    if(error){
        console.log(error);
    }
    console.log("Directory created successfully!");
});

fs.writeFile("E:\\backend assignment\\Chitkara\\Course\\Counselor.txt","Ankur", function (error) {
    if (error) {
        console.log(error);
    }
    console.log("File created successfully!");
});

fs.writeFile("E:\\backend assignment\\Chitkara\\Student\\StudentList.txt","Akhil", function (error) {
    if (error) {
        console.log(error);
    }
    console.log("File created successfully!");
});

fs.writeFile("E:\\backend assignment\\Chitkara\\Faculty\\FacultyList.txt","Ankush", function (error,) {
    if (error) {
        console.log(error);
    }
    console.log("File created successfully!");
});