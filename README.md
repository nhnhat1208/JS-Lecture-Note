## **Javascript Basic** 
--- 
### **Rule of declaration:**
- ***Always declare variables with const***. If you think the **value** of the variable **can change**, you can use **let**.  

<br>

--- 

### **JS Hoisting:** Variable can be used before it has been declared. 

- Default JS ***moving all declaration to the top*** of current scope, but not initialized.  

    🠊 JavaScript only hoists declarations, ***not initializations.***  

- Used *before declaring:*
    - **let, const** : raise error is *ReferenceError*  
    - **var** : the value is *undefined*  

<br>  

---

#### ***Note :*** A const object cannot re-assigned but its attribute can be changed. 

<br>

```js
const car = {color:'Red'};
car.color = 'Green';
console.log(car.color); // (Result: Green)
```  

<br>

---

### **Data type :** number, string, boolean, object, array, undefined, null, ...

<br>

#### **Number:**
- JavaScript will ***try to convert strings to numbers*** in all ***numeric operations*** except plus (+). 

    ```js
    let a = '100'/'10';
    // a = 10
    let b = '100'/'n';
    // b = NaN - Not a Number
    console.log(isNaN(B));
    // Result: True
    ```
- **NaN can concatenate** the strings. NaN is a number :

    ```js
    let num = NaN + 4; // value: NaN
    let txt = NaN + '4'; // value: 'NaN4'
    ```

- **Infinity (or -Infinity)** is the value return if you calculate a number **outside the largest possible number**.  

    ***Note :*** *Division by 0* also generates Infinity. Infinity is a number :

    ```js
    let x =  2 / 0; //  Infinity
    let y = -2 / 0; // -Infinity
    ```
<br>

#### **Number method :**
- **toString() :** returns a number as a string.

- **toExponential() :** returns a **string**, with a **number rounded** and ***written using exponential notation***.  
    ***Note:*** The parameter is optional. If you don't specify it, JavaScript will not round the number.  

    ```js
    let x = 9.656;
    x.toExponential(1); // '9.7e+0'
    x.toExponential(6); // '9.656000e+0'
    x.toExponential();  // '9.656e+0'
    ```  

- **toFixed() :** returns a string, with the number written with a ***specified number of decimals***: 

    ```js
    let x = 9.656;
    x.toFixed(0); // 10
    x.toFixed(2); // 9.66
    x.toFixed(4); // 9.6560
    ```
- **toPrecision() :** returns a string, with a number written with a ***specified length***:

    ```js
    let x = 9.656;
    x.toPrecision();  // 9.656
    x.toPrecision(2); // 9.7
    x.toPrecision(6); // 9.65600
    ```

- **Converting Variables to Numbers :**
    - **Number() :** ***Returns a number***, converted from *its argument*.
    - **parseFloat() :** Parses its argument and ***returns a floating point*** number
    - **parseInt() :** Parses its argument and ***returns an integer  ***
    <br>

    ***Note :*** 
    - These methods are ***global JavaScript methods.***
    - **Number()** can also ***convert a date*** to a number. Returns the **number of milliseconds since 1.1.1970.**
    - **parseInt(), parseFloat()** return only the ***first number***. Space are allowed  

        ```js
        Number(new Date("1970-01-02")); 
        // 86400000 (number of mil second since 1.1.1970)
        
        parseFloat("10.24");    // 10.24
        parseFloat("10 20 30"); // 10
        parseFloat("10 years"); // 10
        parseFloat("years 10"); // NaN
        ```

<br>

- **Number properties :**  

    - **MAX_VALUE :** Returns the ***largest number possible*** in JavaScript
    - **MIN_VALUE :** Returns the ***smallest number possible*** in JavaScript
    - **POSITIVE_INFINITY :** Represents ***infinity*** (returned on overflow)
    - **NEGATIVE_INFINITY :** Represents ***negative infinity*** (returned on overflow)
    - **NaN :** Represents a ***"Not-a-Number"*** value  

        ```js
        let x = Number.MAX_VALUE; // 1.7976931348623157e+308
        ```
<br>

#### **String method :**
- Extract *string*:
    - *slice(start, end)* : begin from 0  [ zero-based ]  

        ***Note:*** if param is negative, 
        it begin from the **end** and going **backwards**  
        
    - *substring(start, end)* : negative input is treated as 0

    - *substr(start, length)* 

<br>

- Extract *char*:
    - charAt(position)
    - [position]
    
        ```js
        let text = 'Nice to meet u';
        console.log(text.charAt(0)); // Result: N
        console.log(text[0]); // Result: N
        ```

- Replace:
    - *replace(findPart, replacedPart)* : not change the string, it return new string.   

        ***Note:*** It replaces only the *first match*  

        - For **replace all**, use a flag : **/g**  
        - We can use replace **case insensitive** with a flag : **/i**  

        <br>

        ```js
        let text = 'apple Banana Pineapple';

        console.log(text.replace('apple', 'Palm'));
        // Result: Palm Banana Pineapple
        console.log(text.replace(/APPlE/i, 'Palm')); 
        // Result: Palm Banana Pineapple
        console.log(text.replace(/apple/g, 'Palm')); 
        // Result: Palm Banana PinePalm
        ```
    
<br>

- **Split:** convert string to array with delimiter
    - split(delimiter)

        ```js 
        console.log('Hello World'.split(' ')); 
        // Result: ['Hello', 'World']
        ```

<br>

- **Upper / Lower** CASE:
    - toUpperCase()
    - toLowerCase()  

<br>  

- **Concat:**
    - concat(...param): concat multiple strings  

        ```js
        console.log('Hello'.concat(' ', 'World', '!')); 
        // Result: Hello World!
        ```
<br>  

#### **String search method :**  
- **indexOf()** : returns the index of the **first** occurrence of a specified text.  

- **lastIndexOf()** : returns the index of the **last** occurrence of a specified text.

    - Both methods return *-1 if the text is not found*.
    - Both methods ***accept a second parameter as the starting position*** for the search:  

***Note :*** The *lastIndexOf()* methods searches **backwards**, meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.  

<br>

```js
let str = 'there is a string for testing string .!';

let firstFound = str.indexOf('string', 8);
// 'there is a string for testing string .!'
//          8->11 (found) 

let lastFound = str.lastIndexOf('string', 8);
// The search starts at position 8, and searches backwards
// not found<-8
```
<br>

- **search() :** searches a string for a specified value and returns the position of the match.   
***Note :*** It ***cannot take a second start position argument***, but it can take ***powerful search values (regular expressions)***.

<br>

- **match(regexp) :** searches a string for a *match* against a ***regular expression***, and returns the matches, as an ***Array*** object.  
***Note :***  
    - **Returns :** An Array, containing the matches, one item for each match, or null if no match is found
    - If a regular expression does ***not include the g modifier*** (to perform a global search), the match() method will ***return only the first match*** in the string.  
    <br>

    ```js
    let text = "The rain in SPAIN stays mainly in the plain";
    text.match(/ain/gi);
    // Result: ['ain', 'AIN', 'ain', 'ain']
    ```

<br>

- **includes(searchValue, start) :** returns true if a ***string contains a specified value***.
<br>

- **startsWith(searchValue, start) :** returns true if a string ***begins with a specified value***.

- **endsWith(searchValue, length) :** return true  if the length first characters of a string ***ends with searchValue***.


<br>

### **String template**  

- Template Literals use ***back-ticks*** (**`**) rather  to define a string.
- With template literals, you can use ***both single and double quotes*** inside a string.
- Template literals allows ***multiline strings***.  

    ```js
    let  text = 
    ` He's often 
    called 
    "Johnny`;
    ```

- Template literals ***allow variables and expressions*** in strings:  **${ ... }**

    ```js
    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
    ```

<br>

### **Array :**
 - It is a common practice to declare arrays ***with the const keyword***. A const array ***cannot re-assign itself***, but we can **re-assign element in array**.
 - A declaration **can span multiple lines**.

- The Difference Between Arrays and Objects
    - In JavaScript, ***arrays use numbered indexes***.  
    - In JavaScript, ***objects use named indexes***.  

<br>

- **Looping Array Elements**

    ```js
    const fruits = ["Banana", "Orange", "Apple"];

    // Using for loop:
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    // Using foreach() function: 
    // Argument passing is function type
    fruits.foreach(console.log)
    ```
<br>

- **Recognize an Array**

    ```js
    const fruits = ["Banana", "Orange", "Apple"];

    // Solution 1
    Array.isArray(fruits);

    // Solution 2
    fruits instanceof Array;
    ```
<br>

#### **Array method**  

- **join() :** joins all array elements into a string.

    ```js
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.join(" * "); // Banana * Orange * Apple
    ```

- **pop() :** removes **the last element** from an array and **return itself**.
- **push() :** adds a **new element at the end** and **returns the new array length**.

<br>

- **shift() :** removes the **first array element** and ***shifts all*** other elements to a **lower index**. It returns ***the value that was "shifted out".***

- **unshift() :** adds a new element **at the beginning** and **unshifts older elements**. It returns the **new array length**.

<br>

- **concat(...arr) :** creates a new array by ***concatenating existing arrays***.

<br>

- **splice() :** can be used to add new items to an array.

    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let removed = fruits.splice(2, 0, "Lemon", "Kiwi");
    /*
        The first parameter (2) defines the position
        where new elements should be added.

        The second parameter (0) defines 
        how many elements should be removed.

        The rest of the parameters ("Lemon" , "Kiwi") define
        the new elements to be added.
    */
    ```
      
    ***Note :***
    - splice() returns an **array with the deleted items**: 
    - **Using splice() to remove Elements :**

        ```js
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.splice(0, 1); // Remove 'Banana'
        ```
    
- **slice() :** the same effect as the function slice in string. 

<br>

- **reverse() :** reverses the elements in an array.
- **sort() :** sorts an array *alphabetically*.
    
    ***Note :***   
    - **By default**, the sort() function sorts values **as strings**.  
    - The sort() method will produce **incorrect result when sorting numbers**.  
    🠊 You can fix this by ***providing a compare function***.  
    
    <br>

    **The Compare Function :**  
    - The compare function **should return a negative, zero, or positive value**, depending on the arguments:

        - If the result is **negative a** is sorted before b.
        - If the result is **positive b** is sorted before a.
        - If the result is **0 no changes** are done.
    
    <br>

    ```js
    const points = [40, 245, 12, 65, 8];
    points.sort(function(a, b){return b - a});
    ```
    
    <br>

- **Find the highest/lowest number in an array :**
    - Using **Math.max.apply** / **Math.min.apply**.
    
        ```js
        const points = [40, 120, 100, 20];
        const highest = Math.max.apply(null, points); // 120
        const lowest = Math.max.apply(null, points); // 20
        ```
<br>

#### **Array iteration**  
- **forEach() :** calls a **function once** for each array element.
    ```js
    const numbers = [45, 4, 9, 16, 25];
    let txt = "";
    numbers.forEach(myFunction);

    // Call back function
    function myFunction(value, index, array) {
        txt += value + "<br>";
    }
    ```

- **map() :** creates a *new array* by performing a function on each array element.
    ```js
    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(myFunction);

    // Call back function
    function myFunction(value, index, array) {
        return value * 2;
    }
    ```

- **filter() :** creates *a new array* with array elements that **passes a test**.
    ```js
    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    ```

- **reduce() :** runs a function **on each array element** to produce (reduce it to) a single value.
    ```js
    const numbers = [45, 4, 9, 16, 25];
    let initialValue = 0;
    let sum = numbers.reduce(myFunction, initialValue);

    function myFunction(total, value, index, array) {
        return total + value;
    }
    ```
    ***Note :***
    - The **reduce()** method work *from left to right*.
    - The **reduceRight()** method work *from right to left*.

<br>

- **every() :** check if all array values pass a test.
- **some() :** check if some array values pass a test.  

    ```js
    const numbers = [45, 4, 9, 16, 25];
    let someOver18 = numbers.some(myFunction);

    function myFunction(value, index, array) {
        return value > 18;
    }
    ```

- **find() :** returns *the value of the first array element* that passes a test function.
- **findIndex() :** returns the *index of the first array element* that passes a test function.

<br>

---
### **Object**
#### ***Object Constructor :***
```js
function User(name, age){
    this.name = name;
    this.age = age;
}

let user = new User('Ng Van A', 18);
```
#### **Prototype :**  

```js
function User(name, age){
    this.name = name;
    this.age = age;
}

User.prototype.job = 'Dev';
User.address = '2HCM';

let user = new User('Ng Van A', 18);
console.log(user.job); // D
console.log(user.address); // undefined
```

<br>

---
### **Date Object**
There are ***4 ways to create*** Date object :
```js
new Date() // current date & time
new Date(year, month, day, hours, mins, secs, milsecs)
new Date(milsecs)
new Date(dateString)
```

***Note :***
- JS counts month **from 0 to 11**: (January = 0, December = 11)
- If **args higher than max**, it will ***add the overflow*** to the next value.

<br>

#### **Displaying Dates**

- **toString() :**  
***E.g :*** Fri Aug 19 2022 13:29:04 GMT+0700 (Indochina Time)

- **toISOString() :**  
***E.g :*** 2022-08-19**T**06:25:00.084**Z**

- **to UTCString() :**   
***E.g :*** Fri, 19 Aug 2022 06:24:54 GMT

- **toDateString() :**  
***E.g:*** Fri Aug 19 2022

<br>

#### **Date Formats**
- **ISO Date :** YYYY-MM-DD (can written ***without day or month & day***)
- **Short Date :** MM/DD/YYYY
- **Long Date :** MMM DD YYYY or DD MMM YYYY 
    - MMM can be written full like **January or abbreviated Jan** 

    <br>

    ```js
    let d = new Date('2022-03-29');
    ```

***Note :*** 
- ISO dates can be written with added time **( YYYY-MM-DDTHH:MM:SSZ )**.
- **Date and time** is *separated with a capital T*.
- **UTC time** is defined with a capital **letter Z**. If you want to *modify the time relative to UTC*, **remove the Z** and **add +HH:MM or -HH:MM instead** :

    ```js
    let d = new Date("2015-03-25T12:00:00-06:30");;
    ```

<br>

#### **Date Get/Set methods**
- **GET :** getFullYear(), getMonth(), getDate(), getHours(), ...
- **SET :** setFullYear(), setMonth(), setDate(), setHours(), ...


<br>

---
### **Math Object**
**Common used :**
- **Math.E :** **Euler's** number
- **Math.PI :** **PI** Constant

<br>

- **Math.round(x) :** Returns x **rounded** to its
- **Math.ceil(x) :** Returns x **rounded up** to its
- **Math.floor(x) :** Returns x **rounded down** to its
- **Math.trunc(x) :** Returns the **integer part** of x ***(new in ES6)***

<br>

- **Math.sqrt(x) :** returns the **square root** of x
- **Math.abs(x) :** returns the **absolute (positive)** value of x
- **Math.min() and Math.max() :** find the **lowest or highest value in a list of arguments**

<br>

- **Math.random() :** returns a ***random number between 0 (inclusive), and 1 (exclusive).***  
    ***Note :*** always returns **a number lower than 1**
#### **JavaScript Random Integers**
- ***Math.random() used with Math.floor()*** can be used to return **random integers**

```js
// Random integer from 0 to 100:
Math.floor(Math.random() * 101);
```

<br>

---

### **Conditional Ternary Operator**  
    
<br>

```js 
let review = (age < 18) ? 'Young' : 'Old';
```

<br>

---

### **Comparison Operators**
- **==** : equal value
- **===** : equal value ***and type***
- **!=** : not equal value
- **!==** : not equal value ***or type***

    <br>

```js
let x = 5;

console.log(x == '5');  
// Result: True  => same value after casting

console.log(x === '5'); 
// Result: False => Not equal type

console.log(x != '5');  
// Result: False => same value after casting

console.log(x !== '5'); 
// Result: True  => Diff type => True
```

<br>

---
### **Truthy and Falsy**
- In JS, it have **6 value that're considered Falsy**.

    - false
    - 0
    - '' or "" (empty string)
    - null
    - undefined
    - NaN

<br>

- **The remaining values** are considered **Truthy**. Including:

    - '0'
    - ' ' (string with spaces)
    - 'false'
    - [] - empty array ***(diff with python - Be careful)***
    - {} - empty object
    - function(){} - empty function

<br>

---
## **JS Callback**
A callback is a function passed as an argument to another function.  
**E.g :**
```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

<br>

---


