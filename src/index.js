import '../public/css/styles.css';

import Inputmask from 'inputmask';

const copyYear = document.querySelector('#copyYear');

const inputPhone = document.querySelector('#telefone');

(function() {
    if(copyYear) {
        const date = new Date();

        const year = date.getFullYear();

        const textNode = document.createTextNode(year);
        
        copyYear.appendChild(textNode);
    }
    return;
}) ();

(function() {
    if(inputPhone) {
        const im = new Inputmask('(99) 99999-9999')
        im.mask(inputPhone);
    }
}) ();
