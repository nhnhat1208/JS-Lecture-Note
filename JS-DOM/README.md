## **HTML DOM**

When a web page is loaded, the browser creates a **Document Object Model** of the page.

The HTML DOM model is constructed as a tree of Objects:

| ![HTML DOM Tree of Object](https://www.w3schools.com/js/pic_htmltree.gif) |
| :-----------------------------------------------------------------------: |
|                         _HTML DOM Tree of Object_                         |

It's include **3 elements in DOM:**

-   Elements
-   Attribute
-   Text

<br />

---

### **_Get element methods_**

Elements can **get by id, class, tag.**

```js
let headNode = document.getElementById("heading");
// return null if HTML DOM has 2 or more element that has same id.

let headClassNodes = document.getElementsByClassName("head");
let headTagNodes = document.getElementsByTag("h1");
// headClassNodes and headTagNodes is HTML Collection.
// It's array of elements.
```

Elements get **by CSS selector.**

```js
let headNode = document.querySelector("div .heading");
// Return first element
let headNodeS = document.querySelectorAll("div .heading");
// Return node list. List of elements
// (similar but have some diff HTML Collection)
```

Elements get **by HTML collections.**

```js
console.log(document.forms["form-1"]);
```

<br />

---

### **DOM Attribute**

#### **GET/SET Attributes Of Element**

<br />

```js
let headElement = document.querySelector('a');
// SET ATTRIBUTE
// Method 1 (Valid attribute)
headElement.href = 'abc.com.vn'; // Setter
// Method 2 (Valid or custom attribute)
headElement.setAttribute('my-href', 'abc.com.vn');

// GET ATTRIBUTE
// Method 1 (Valid attribute)
console.log(headElement.'href'); // Getter
// Method 2 (Valid or custom attribute)
console.log(headElement.getAttribute('my-href'));
```

<br />

#### **textContent & innerText :** Use to edit text node.

**_Getter:_**

-   **textContent :** content of element which u see **when it render.** Excludes style css, display: none.
-   **innerText :** **_whole content of element_** without a tag. Which u see in html file.

**_Setter:_**

-   **textContent :** convert tag, **newline into text.**
-   **innerText :** convert tag into text. **Newline into br tag.**

<br />

#### **innerHTML & outerHTML**

-   **innerHTML :** get / set all html code. Include tag name style and more in current element. **_Excludes current element_**.

-   **innerHTML :** get/set all html code. **_Include tag name style and current element._**

<br />

---
### **DOM CSS**
***Note :*** It's GET / SET CSS **Inline** in element.

```js
let boxElement = document.querySelector('.box');

boxElement.style.backgroundColor = 'red';
Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});

console.log(boxElement.style.width); 
// Get CSS inline
```

---
### **ClassList property**
Common used:
- add
- contains : check exists
- remove 
- toggle

```js
boxElement.classList.add('red');
```

---
### **DOM Events**

```js
h1Element.onclick = function(event) {
    console.log(e.target.textContent);
};
// event: MouseEvent whose attribute is target. 
// Target is an element that is clicked.
```

***Note :***

- **e.preventDefault() :** stop default event in html.  
- **e.stopPropagation() :** stop bubbling.  
    ***E.g :*** when i click  on the nested elements. Some events appear nested.

<br >

#### **Event Listener**
Use when there are many events or you want to remove the event after a long time.
```js
btn.addEventListener('click', function(){
    console.log('task-1');
});

btn.addEventListener('click', function(){
    console.log('task-2');
});
// Functions operate in sequence.

setTimeOut(function(){
    btn.removeEventListener('click');
}, 3000);
// Remove event action after 3s.
```