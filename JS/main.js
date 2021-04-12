/*----------PLANAS-------------------
1. sukurti skyles
2. sukurti knopkes
3. padaryti knopkes aktyvias click su eventlistener
a)toggle
4.padaryti kad skyles reaguotu i paspaudima
..
*/


//-------Pirma dalis----skyliu sukurimas----

const kaitlenteDOM = document.querySelector('.kaitlente'); //surandame kaitlente
const buttonsDOM = document.querySelector('.buttons'); //knopkiu tevo radimas

const holes = [1,2,3,4];      // kad sukurtu 4 skyles ir jos turetu unique data pavadinima
let hole = '';      //kitamasis skylei

for (let i =0; i< holes.length;i++) {   //loop skyliu kurimas
    hole += `<div class="hole" data-ignite='${holes[i]}'></div>`; //SKyles sukurimas ir data priskirimas
}
kaitlenteDOM.insertAdjacentHTML('afterbegin', hole); //istatomos skyles i html faila

//----------------ANTRA DALIS -------KNOPKIU SUKURIMAS--------------------

const buttons = ['Off','Off','Off','Off'];
let button = '';

for (let i = 0; i < buttons.length; i++) {
    button += `<div class="button" data-btnToggle='${buttons[i]}'>${buttons[i]}</div>`;
}
buttonsDOM.insertAdjacentHTML('beforeend', button); // knopkiu ikelimas i html

//---------TRECIA DALIS----AKTYVIOS KNOPKES------------------
// buttonsDOM knopkiu tevas
// button knopke btnToggle jo data
//kaitlente skyliu tevas
//hole skyle   ignite jo data

const skyles = kaitlenteDOM.querySelectorAll('.hole'); //surandame sukurtas skyles
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

