const helloBtn = document.getElementById('hello-btn');
const nameInput =document.getElementById('name');


const name = nameInput.value
helloBtn.onclick=function (){
    alert(`Hello ${name}`)
}