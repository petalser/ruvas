import { langs } from './lang.js';

let langList = ['us', 'ua', 'ru']

document.addEventListener('click', (event) => {
    let elem = event.target;
    if (langList.includes(elem.id)) {
        let lang = elem.id;
        let body = document.querySelector('body');
        let doc = document.getElementById('doc');
        body.removeChild(doc);
        body.insertAdjacentHTML('afterbegin', langs[lang]);
    }
})