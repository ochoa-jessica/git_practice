/*Write a function subLength() that takes 2 parameters, a string and a single
character. The function should search the string for the two occurances 
of the character and return the length between them including the 2 
characters. If there are less than 2 or more than 2 occurances of the 
character the function should return 0*/ 
/* subLength('Saturday', 'a') should return 6 */
const subLength = (word, letter) => {
    const y = word.split(letter);
    console.log(y);
    console.log(y.length);
    console.log(y[1].length);
    return y.length === 3 ? y[1].length + 2 : 0
}

//console.log(subLength('Summer', 'm'));
//console.log(subLength('Saturday', 'a'));
//console.log(subLength('Digitize', 'i'));
//console.log(subLength('Cheesecake', 'k'));


/* Write a function factorial() that takes a number as an argument and returns the factorial of the number*/ 
/* factorial(6) => 720 because 6 * 5 * 4 * 3 * 2 * 1 = 720 */
const factorial = (num) => {
    if(num === 0 || num === 1) {
        return 1;
    }

    for(i = num-1; i>=1; i--){
        num = num * i;
    }

    return num;
}

//console.log(factorial(6));

/* Write a function groceries() that takes an array of object 
literals of grocery items. The function should return a string 
with each item separated by a comma except the last two items 
should be separated by the word 'and'. Make sure spaces (' ') 
are inserted where they are appropriate.*/
const groceries = (arr) => {
    const groceryItems = arr.map(x => x.item);
    if (groceryItems.length < 2) return groceryItems[0];
    const lastItem = groceryItems.pop();
    return `${groceryItems.join(', ')} and ${lastItem}`;
} 

//console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]));
//console.log(groceries([{item: 'Bread'}, {item: 'Butter'}]));
//console.log(groceries([{item: 'Ice Cream'}]));