import { langs } from './lang.js';

document.addEventListener('click', (event) => {
    let elem = event.target;
    let active = document.querySelector('.flag-active');
    if (elem.classList[0] == "flag") {
        active.classList.add('flag');
        active.classList.remove('flag-active');
        elem.classList.add('flag-active');
        elem.classList.remove('flag');
        
        let lang = elem.id;
        let body = document.querySelector('body');
        let doc = document.getElementById('doc');

        body.removeChild(doc);

        body.insertAdjacentHTML('afterbegin', langs[lang])
    }
    
})