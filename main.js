const mainDice = document.getElementById('dice-box');
const btnOne = document.getElementById('btn1');
const btnTwo = document.getElementById('btn2');
const btnThree = document.getElementById('btn3');
const btnFour = document.getElementById('btn4');
const btnFive = document.getElementById('btn5');
const btnSix = document.getElementById('btn6');



btnOne.addEventListener('click', ()=>
    mainDice.style.transform = 'rotateY(0deg)'
);

btnTwo.addEventListener('click', ()=>
    mainDice.style.transform = 'rotateY(-90deg)'
);

btnThree.addEventListener('click', ()=>
    mainDice.style.transform = 'rotateY(90deg)'
);

btnFour.addEventListener('click', ()=>
    mainDice.style.transform = 'rotateX(90deg)'
);

btnFive.addEventListener('click', ()=>
    mainDice.style.transform = 'rotateX(-90deg)'
);

btnSix.addEventListener('click', ()=>
    mainDice.style.transform = 'rotateX(-180deg)'
);