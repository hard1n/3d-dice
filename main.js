const mainDice = document.getElementById('dice-box');
// Buttons
const btnOne = document.getElementById('btn1');
const btnTwo = document.getElementById('btn2');
const btnThree = document.getElementById('btn3');
const btnFour = document.getElementById('btn4');
const btnFive = document.getElementById('btn5');
const btnSix = document.getElementById('btn6');
// Nav hover
const hvOne = document.getElementById('hover1');
const hvTwo = document.getElementById('hover2');
const hvThree = document.getElementById('hover3');
const hvFour = document.getElementById('hover4');
const hvFive = document.getElementById('hover5');
const hvSix = document.getElementById('hover6');

//** Buttons actions **//
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

//** Hover actions **//
hvOne.addEventListener('mouseenter', ()=>
    mainDice.style.transform = 'rotateY(0deg)'
);

hvTwo.addEventListener('mouseenter', ()=>
    mainDice.style.transform = 'rotateY(-90deg)'
);

hvThree.addEventListener('mouseenter', ()=>
    mainDice.style.transform = 'rotateY(90deg)'
);

hvFour.addEventListener('mouseenter', ()=>
    mainDice.style.transform = 'rotateX(90deg)'
);

hvFive.addEventListener('mouseenter', ()=>
    mainDice.style.transform = 'rotateX(-90deg)'
);

hvSix.addEventListener('mouseenter', ()=>
    mainDice.style.transform = 'rotateX(-180deg)'
);