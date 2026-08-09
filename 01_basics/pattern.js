/*print pattern 
*
**
***
****
*****
*/

let n= 5;
for(let i=1; i<=n; i++){
    let str= "*";
    console.log(str.repeat(i));    
}

/* ***************to print   *********
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
*/

let n = 5;
for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '* '.repeat(i));
}

/* **********To Print 
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/

let n= 5;
for(let i=1; i<=n; i++){
    console.log("*".repeat(n));
}

/*************** To Print 
* * * * *
* * * *
* * *
* *
*
*/

let n= 5;
for(let i= n; i>=1; i--){
    console.log("*".repeat(i));
    
}

/*************** To Print 
        *
      * *
    * * *
  * * * *
* * * * *
*/
let n= 5;
for (let i = 1; i <= n; i++) {
    console.log("  ".repeat(n - i) + "* ".repeat(i));
}

/***********To pattern********** 
* * * * *
  * * * *
    * * *
      * *
        *
*/
let n=5;
for (let i = n; i >= 1; i--) {
    console.log("  ".repeat(n - i) + "* ".repeat(i));
}

/* ************* To Print Inverted Pyramid ************
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *

*/
let n=5;
for (let i = n; i >= 1; i--) {
    console.log(
        "  ".repeat(n - i) +
        "* ".repeat(2 * i - 1)
    );
}

/* ***********To print 
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
let n= 5;
for (let i = 1; i <= n; i++) {
    let str = " ";

    for (let j = 1; j <= i; j++) {
        str += j + " ";
    }

    console.log(str);
}

/* ********** To print 
A
A B
A B C
A B C D
A B C D E
*/
let n=5;
for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 0; j < i; j++) {
        str += String.fromCharCode(65 + j) + " ";
    }

    console.log(str);
}