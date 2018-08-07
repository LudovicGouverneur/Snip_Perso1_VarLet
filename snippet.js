let letGlobalElem = 1;   // not Hoisted
//let letGlobalElem = 2; // Can't be declared twice
letGlobalElem = 3        // can be reassigned

var varGlobalElem = 10;  // Hoisted
var varGlobalElem = 20;  // can be declared twice
varGlobalElem = 30;      // can be reassigned

//const constGlobalElem;      // (A value must be ASSIGNED) OR (the const must be DEFINED) OR (the const must be DECLARED while ASSIGNING a value) 
const constGlobalElem = 100;  // Hoisted
const constGlobalElem = 200;    // can be declared twice
//constGlobalElem = 300;        // can't be reassigned
