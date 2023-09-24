//HOW JS WORKS BEHIND THE SCENE

/* JS is a single threaded language.

        ----EXECUTION CONTEXT----

    whenever a file in JS is made automatically {} -- Global execution context is made. This global execution context is stored in the variable called this.

    TYPES OF EXECUTION CONTEXT :- 
    1) Global EC
    2) Functional EC
    3) Eval EC

    PHASES OF EC:-
    1) Memory creation phase
    2) Execution Phase

    LET US TAKE AN EXAMPLE AND UNDERSTAND
*/

let val1 = 20;
let val2 = 30;

function addNum(num1,num2){
    return num1+num2;
}

let result1 = addNum(val1, val2);

/* SO THE ABOVE CODE THE JS WILL WORK LIKE THIS :-
        1) GLOBAL EXECUTION CONTEXT IS MADE
        -----which is stored in "this" variable
        2) MEMORY ALLOCATION IS DONE
        -----All the variables are taken in the memory and are initialised with undefined and function definitions are stored in the memory
        3) EXECUTION PHASE
        ----- All variables are defined with their respective values
        ----- All functions make their own respective new execution context in which new variable environment and execution thread is stored. This new execution context is made everytime the function is called.
        ----- Now in the new execution context all the steps are repeated like memory phase and execution phase. 
*/

//                  CALL STACK
/*                  
                    |       |
                    |  F2() |
                    |  F1() |
                    |   EC  |
            first in last out.
            last in first out.
 */