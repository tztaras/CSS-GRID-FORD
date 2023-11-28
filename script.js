// alert('GREETINGS PUGIVERSE!');
let imageout = document.querySelector('.imgbox');

let nameout = document.querySelector('.name-info');

let llcname = document.querySelector('.company-info');

let otherinfo = document.querySelector('.other-info');

for (wer in logo) {
    let img = document.createElement('img');          //создается изображение (element)
    img.setAttribute('data-key', wer);                // добавляется дата атрибут
    img.classList.add('logo-decor');
    img.src = './pictures/' + wer + '.png';           // прописываем путь (в сурсе указывается папка)
    imageout.append(img);                             //вставляем внутрь блока
}
console.log(wer);

imageout.addEventListener('click', showinfo);
function showinfo(event) {
    console.log(event.target);
    console.dir(event.target);
    let key = event.target.dataset['key'];
    console.log(key);

    
    if (key === undefined) {
        return true;
    }
    //по клику в коробках сначала снимается класс актив.  
    document.querySelectorAll('.imgbox img').forEach(item => item.classList.remove('active'));
    // после этого по тому же клику добавляется класс актив
    event.target.classList.add('active');
    nameout.textContent = logo[key]['name'];
    llcname.textContent = logo[key]['company'];
    otherinfo.innerHTML = logo[key]['links'];

}


function showSum(elem, x, y) {
    document.querySelector(elem).textContent = x + y;
}
showSum('.box6', 2, 3);


function showSum2(elem, x, y) {
    elem.textContent = x + y;
}

// showSum2(document.querySelector('.box4'), 11, 44);

let a1 = document.querySelector('.box4');
showSum2(a1, 11, 22);

//элементы по умолчанию ставим в конце
function showSum3(x, y, lmt = '.box5') {
    document.querySelector(lmt).textContent = arguments[1] + y;
    console.log(arguments);
}
showSum3(3, 7);
 






function showSumAll() {
    console.log(arguments);
    // let wer = 0;
    // for (let i = 0; i < arguments.length; i++){
    //     wer += arguments[i];


    //     // ================================================
    //     //The symbol that accumulates the sum of all arguments is the += operator. In your showSumAll function, the line wer += arguments[i] uses the += operator to add the value of arguments[i] to the wer variable and store the result back in the wer variable. This line effectively accumulates the sum of all the arguments by repeatedly adding each argument to the running total stored in wer.
    // }


    let wer = Array.from(arguments).reduce((raz, dva) => raz += dva);


    console.log(wer);
    let aAll = document.querySelector('.box3');
    aAll.innerHTML = wer;
}
showSumAll(3, 4, 1, 2);



// ` ...argus `— ВСЕ аргументы попадут в функцию.
function showSumo(...argus) {
    console.log(argus);
    let wer = argus.reduce((raz, dva) => raz += dva);
    console.log(wer);



    // let aAll = document.querySelector('.box3');
    // aAll.innerHTML = wer;
    document.querySelector('.box3').innerHTML = wer;
}
showSumo(3, 4, 2, 2, 10);




// ==============================
function getSome(res) {
    document.querySelector('.header-box').innerHTML = `<b><i> ${res} </i></b>`;
}
function g2(num, mirrorNum) {
    mirrorNum(num);
}
g2(999,getSome);
// =============================

// document.querySelector('.b-1').onclick = () => {
    
//     function t1(i,o) {
//         // i = 1;
//         // o = 14;
//         document.querySelector('.box6').innerHTML = Math.floor(Math.random() * (o - i + 1) + i);
//         // document.querySelector(p).innerHTML = i + o;
//     }
    
//     // t1(2, 9, '.box6');
    
//     t1(1,5)
   
// }



document.querySelector('.b-1').onclick = () => {

    function t1(i,o,p='.box6') {
        i = 0;
        o = 100;
        document.querySelector(p).innerHTML = Math.floor(Math.random() * (o - i + 1) + i);
       
    }
    
    // t1(2, 9, '.box6');
    
    t1()
   
}
    

// навигация
document.addEventListener('keydown', event => {
    console.log(event.key);

    console.dir(event.target);

    if (event.target.tagName !== 'BODY') return;


    let item = document.querySelector(`[data-scroll="s-${event.key}"]`);

    if (item) scrollTo(item);
    
    
});
//item попадает в elem
function scrollTo(elem) {
    elem.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

// выбор всех коробок с классом и добавление нового класса через кнопку
document.querySelector('.nsfw').onclick = bgchange;
function bgchange() {
    let a = document.querySelectorAll('.griditem');
    a.forEach( (bg) => {
        bg.classList.toggle('bg-nsfw');
    });

    let lili = document.querySelectorAll('li');
   
    lili.forEach((catrmv) => {
        catrmv.classList.toggle('nocatli');
    })
   
    
        
  
}