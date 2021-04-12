
const kaitlenteDOM = document.querySelector('.kaitlente'); 
const buttonsDOM = document.querySelector('.buttons'); 
const holes = [1,2,3,4];     
let hole = '';     
for (let i =0; i< holes.length;i++) {   
    hole += `<div class="hole" data-ignite='${holes[i]}'></div>`; 
}
kaitlenteDOM.insertAdjacentHTML('afterbegin', hole); 



const buttons = ['Off','Off','Off','Off'];
let button = '';

for (let i = 0; i < buttons.length; i++) {
    button += `<div class="button" data-btnToggle='${buttons[i]}'>${buttons[i]}</div>`;
}
buttonsDOM.insertAdjacentHTML('beforeend', button); 



const skyles = kaitlenteDOM.querySelectorAll('.hole'); 
const knopkes = buttonsDOM.querySelectorAll('.button');

for (let i = 0; i < skyles.length; i++) {
    const btn = knopkes[i];
    const skyle = skyles[i];
    btn.addEventListener('click', function () {
        skyle.classList.toggle('ignite');
        btn.classList.toggle('btnToggle');
        if (btn.innerHTML === 'Off') {btn.innerHTML= 'On'}
        else {btn.innerHTML= 'Off'}
    })
    
}

