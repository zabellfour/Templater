function makeEl(tag, innerText, attrs) {
    el = document.createElement(tag);
    el.innerText = innerText;
    if (attrs) {
        for (let i in attrs) {
            el.setAttribute(i, attrs[i]);
        }
    }
    return el;
}

let Templater = {
    run: function() {
        let pageEl = Array.from(document.getElementsByTagName('bootstrap_button'));
        pageEl.forEach(element => {
            element.replaceWith(makeEl('button', "Some Text", { 'class': "btn btn-default", 'type': 'submit' }));
        });
    }
}
