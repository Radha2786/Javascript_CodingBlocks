const addbtn = document.querySelector('#btn');

// const val= document.querySelector('input[type="text"]')
const input= document.getElementById('inp');
const ul=document.querySelector('ul');

function addval(){
    const li=document.createElement('li');
    li.innerText=input.value;
    ul.append(li);
    input.value='';
    li.addEventListener('click',()=>{
        li.remove();
    })
}
addbtn.addEventListener('click',addval);
