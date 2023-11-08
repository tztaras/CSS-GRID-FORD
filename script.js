// alert('GREETINGS PUGIVERSE!');
let imageout = document.querySelector('.imgbox');

let nameout = document.querySelector('.name-info');

let llcname = document.querySelector('.company-info');

for (kluch in logo) {
    let img = document.createElement('img');          //создается изображение (element)
    img.setAttribute('data-key', kluch);                // добавляется дата атрибут
    img.classList.add('logo-decor');
    img.src = './pictures/' + kluch + '.png';           // прописываем путь (в сурсе указывается папка)
    imageout.append(img);                             //вставляем внутрь блока
}


imageout.addEventListener('click', showinfo);
function showinfo(event) {
    // console.log(event.target);
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
    console.log(arguments)
}
showSum3(3, 7);
 

function showSumAll() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
    let aAll = document.querySelector('.box3');
    aAll.innerHTML = sum;
}
showSumAll(1,3,6,7)




