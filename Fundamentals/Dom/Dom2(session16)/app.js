/* ClassList
 to add or remove class on an html Element
it has some methods
add
remove
Toggle
*/

// const h1= document.querySelector('h1');
// h1.classList.add('heading','Newheading');
// // to remove class
// h1.classList.remove('heading')

// const ul=document.querySelectorAll('ul')[2];
// ul.classList.add('class1');
// ul.classList.toggle('hide');

// (To get the parent Element)
// ul.parentElement
// (To get the child element)
// ul.children
// (To get the sibling)
// const image = document.querySelector('img')
// image.previousElementSibling
// image.nextElementSibling

// ------------------------------------
// Creating element and adding it to the dom tree

// const strong = document.createElement('strong');
// strong.innerText='THIS IS A NEW STRONG TAG'
// const para = document.querySelector('p');
// para.appendChild(strong);
// appendChild will only take tag names whereas append can tak tag names as well as text
// para.append(".  This is a new text added using append method")

// const em = document.createElement('em');
// em.innerText='. This is a new em tag !!!';
// para.append(em);
// similarly we have prepend to add at  starting

// ---------------------------------
// to add an elemnt before and starting of other Element 
// we have Before and After
// const h2=document.createElement('h2');
// h2.innerText="This is H2";
// h1.before(h2);
// h1.after(h2);

// // const image=document.createElement('img');
// image.src="https://images.unsplash.com/photo-1688380303708-26c534ab059b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
// h1.before(image);

// const newlist = document.createElement('li');
// newlist.innerText='Zebra';
// const ul=document.querySelector('ul');
// ul.append(newlist)

// -----------------------to get the value-----------
const input = document.querySelector('input[type="text"]');
input.value='Sharma';

// -----------------------------------to remove element-------------(removeChild)

const li = document.querySelector('ul li:first-child');
const ul = document.querySelector('ul');
ul.removeChild(li); 

// -----------------------(remove)-----------
// here you don't need to select parent element just select child element and remove it.
const last_li=document.querySelector('ul li:last-child');
last_li.remove();