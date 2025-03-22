import '../public/css/styles.css';

const copyYear = document.querySelector('#copyYear');

setTimeout(ReactDOM.render(), 0);

(function() {
    if(copyYear) {
        const date = new Date();

        const year = date.getFullYear();

        const textNode = document.createTextNode(year);
        
        copyYear.appendChild(textNode);
    }
    return;
}) ();