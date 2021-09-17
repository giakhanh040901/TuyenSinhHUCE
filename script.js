
let act1 =document.querySelector('.act1');
let act2 =document.querySelector('.act2');
let act3 =document.querySelector('.act3');
let act4 =document.querySelector('.act4');

let btn1 = document.querySelector('#btn1');
let btn2= document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4= document.querySelector('#btn4');

btn1.addEventListener('click', () => {
    
    act1.style.display = 'block';
    act2.style.display = 'none';
    act3.style.display = 'none';
    act4.style.display = 'none';
   
})


btn2.addEventListener('click', () => {

    act2.style.display = 'block';
        act1.style.display = 'none';
        act3.style.display = 'none';
        act4.style.display = 'none';
})

btn3.addEventListener('click', () => {

    act3.style.display = 'block';
    act1.style.display = 'none';
    act2.style.display = 'none';
    act4.style.display = 'none';
})

btn4.addEventListener('click', () => {

    act4.style.display = 'block';
    act1.style.display = 'none';
    act2.style.display = 'none';
    act3.style.display = 'none';
})




