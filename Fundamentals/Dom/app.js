//  DOM = Document object model

// to access html inside javascript or inside call stack we use dom 

// basically how we can interact with html through the javascript for example  we have created a button ab uska color change hona chahiye
// click hone par that means we have to interact that's where we use DOM


// document.getElementById() ;
// document.getElementsByClassName();
// document.getElementsByName();
// document.querySelector();  // select the first instance of the matched element
// document.querySelectorAll();  // it selects the all instance of the matched element

// --------> 1. Select the Element

const h1 = document.getElementsByTagName('h1')[0];
h1.style.backgroundColor='yellow';
h1.style.color='Green';
h1.style.border='5px solid black'
h1.style.textShadow='blue';

// --------------------to select the anchor of ul 
// const anchor = document.querySelector('ul li a[href="https://google.com"]');
// console.log(anchor);

// to select the first child or to select the first list 

// const li = document.querySelector('li:first-child')

// --------------------------------------------------------------
// some other properties 
// 1 innerText
// 2 textContent
// difference between inneerText and textContent
 // innerText is aware of styling for example humne kuch text ko display none kar diya to innerText us text ko nahi dikhayega whereas
 // TextContent displays all the text irrespective of styling

//  --------------diffrence between innerHTML and innerText----------------

// h1.innerText='<em>This is a new Heading</em>'
// here em tags are being treated as text
// whereas in innerHTML

h1.innerHTML='<em>This is a new Heading</em>'
// here it is being treated as html

// ----------getAttribute & setAttribute--------------

// const image = document.querySelector('img');
// image.setAttribute('src','https://images.unsplash.com/photo-1687838935896-6f50da895e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60')



function ChangeImage() {
  document.querySelector('img').setAttribute('src','https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
}


function ChangeImage2() {
    document.querySelector('img').setAttribute('src','https://images.unsplash.com/photo-1682695795798-1b31ea040caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
  }

// setInterval(ChangeImage, 1000);
setInterval(ChangeImage2, 3000);





























