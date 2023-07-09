/*EVENTS 
Hover , click , scroll these all are some events 
ways of adding events
Inline events and external way of adding events
*/

const btn = document.getElementById('button');
// btn.onclick= function fun (){
//     console.log('clicked me')
// }
// ------------or------------------

function fun2(){
    console.log('inside fun2');
}
// btn.onclick=fun2 ;
// onclick has diasadvantage we can not execute multiple functions hence we use addEventListener
function scream (){
    console.log('SCREAM!!');
} 
function shout(){
    console.log('Shout!!');
}

btn.addEventListener('click',function(){alert('clicked mee ughh!!')});
btn.addEventListener('click',shout);

const buttons = document.querySelectorAll('section button');

for(let button of buttons){
    button.addEventListener('mouseenter', ()=>{
        console.log('clicked');
    });
}

for(let button of buttons){
    button.addEventListener('mouseenter', (e)=>{
        e.target.style.border='5px solid black';
        e.target.style.backgroundColor='pink';

    }
    );
    button.addEventListener('mouseleave', (e)=>{
        e.target.style.border='';
        e.target.style.backgroundColor='';

    }
    );
}

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter',()=>{
    h1.classList.toggle('heading');
})