//const mSchool = {student, teacher, parent};

/*document.write ("Good Day All");

// Variable
var wAge = 25;
var Sometext = " years old";

alert (wAge + Sometext); */


// Function 1

/*function doSomething () {

alert ("Try to do something different");

}

doSomething (); */    // calling function


// Function 2

 /* function addSomething (num, str) {

    var add = num + str;
    alert (add);
    
    }
    
    addSomething (500, " with all the other numbers"); */


// Arithmetic and Assignment Operator 

//var number1 = 16;
//var number2 = 8;

//var number1 = number1 + number2;
//number1++;    // incremental operator
//number1--;    // decremental operator

//number1 += number2;  //(compound operator [number1 + number2 = ])
//number1 -= number2;  //(compound operator [number1 - number2 = ])
//number1 *= number2;  //(compound operator [number1 * number2 = ])
//number1 /= number2;  //(compound operator [number1 / number2 = ])

                 // Operator precedence 
// The Muitiplication and Division operator takes precedence over Addition and Subsctraction operators

//var number1 = 4 + 3 * 5;

//var number1 = (4 + 3) * 5;

//document.write (number1);


// ARRAYS

//var roadMaterials = ["sand", "gravel", "tar", "stonedust", "cement"];

//roadMaterials[2] = "granular";

// var roadItem = roadMaterials[3];
// document.write (roadItem);

//document.write (roadMaterials);

/* var roadMaterials = [];
roadMaterials [0] = "sand";
roadMaterials [1] = "gravel";
roadMaterials [2] = "tar";
roadMaterials [3] = "stonedust";
roadMaterials [4] = "cement";
*/


// OBJECTS

/* const orc = {           // Object name is orc
     
    hair : "black",     // property - name : value pair
    age : 25,
    height : 15,
    weight : 100,
    stomachfull : true,
    eat : function () {
        document.write ("yummy yum");
    }
}; */

//orc.hair = "brown";   // to change a value of an object

//orc.height = 50;      // to change a value of an object

//orc.gender = "male";    // to add new properties to an object

//delete orc.height;        // to delete a properties from an Object


//orc.eat ();         // to call a method (function) in an object

//document.write ("The object height value is: ", orc.height);     // to call a property in an object [dot.notation)

//document.write ("The object age value is: ", orc["age"]);     // to call a property in an object [bracket notation)

//document.write (orc);

//console.log ("The Orc object:",  orc);     // to display the object contents in console

//console.log ("The weight value is :",  orc.weight);


// CONDITIONALS IN JAVASCRIPT (If Statements)

/* var food = "wood";

if (food == "Rice") {

    alert ("We ate some grain food and it is specifically rice");
}

else if (food == "tree") {
    alert ("The food is not rice but tree");
}

else if (food == "wood") {
    alert ("The food is not rice or tree");
}

else {
    alert ("None of the option is food");
}
*/

// LOOP STATEMENT IN JAVASCRIPT (while loops)

/* var i = 1             // Counter

while (i < 6) {        //condition

    document.write (" A statement has run ");

    i++;               //incremental
} */

//Note: There are three (3) statements in while loop 
//(1) Counter (2) Condition (3) Incremental


// LOOP STATEMENT IN JAVASCRIPT (for loops)

/* for (var i = 1; i < 4; i++) {        

    document.write (" A statement has run ");
          
} */


// FUNCTION AND IF STATEMENT

function state (person, distance) {
    
    if (distance <= 12) {
        document.write (person + " working at the time. ");
    }

}
 state ("Danny", 11);

 

// function battling (player, distance) {
    
//     if (distance <= 350) {
//         document.write (player + " hit the ball. ");
//     }

// }
//  battling ("Danny", 349);