// alert('GREETINGS PUGIVERSE!');
let imageout = document.querySelector('.imgbox');

let nameout = document.querySelector('.name-info');

let llcname = document.querySelector('.company-info');

for (key in logo) {
    let img = document.createElement('img');      //создается изображение (element)
    img.setAttribute('data-key', key);         // добавляется дата атрибут
    img.classList.add('logo-decor');
    img.src = './pictures/' + key + '.png';          // прописываем путь (в сурсе указывается папка)
    imageout.append(img);                           //вставляем внутрь блока
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
    nameout.textContent = logo[key]['name'];
    llcname.textContent = logo[key]['company'];

}







