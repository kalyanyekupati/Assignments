console.log(1 + "2" + "2");

/* Output: 122 Here Iteger and  string Concatination done. */

console.log(1 + +"2" + "2");

/* Output: 32 ++ incrementing to +1 so we get  32 */

console.log(1 + -"1" + "2");

/* Output: 02  here decrementing*/

console.log(+"1" + "1" + "2");

/* 112 Here string Concatinating done */

console.log( "A" - "B" + "2");

/*Output:NaN2 strings can't be subtracted so it gives NaN and next string 2 returns.*/ 

console.log( "A" - "B" + 2);

/* Output:NaN  strings can't be subtracted and NaN+2 gives NaN */
