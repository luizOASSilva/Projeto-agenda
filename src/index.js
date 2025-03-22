import '../public/css/styles.css';

import Inputmask from 'inputmask';

const copyYear = document.querySelector('#copyYear');

(function() {
    if(copyYear) {
        const date = new Date();

        const year = date.getFullYear();

        const textNode = document.createTextNode(year);
        
        copyYear.appendChild(textNode);
    }
    return;
}) ();