function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

let Templater = {
    run: function(that) {
        for (i in this.newTags) {
            let pageEl = Array.from(that[0].getElementsByTagName(i));
            pageEl.forEach(element => {
                let classList = element.classList + '';
                let typeAttr = element.getAttribute('type');
                let content = element.innerHTML;
                let parentEl = element.parentElement;
                let newEl = this.newTags[i]
                    .replace('{{class}}', classList)
                    .replace('{{type}}', typeAttr)
                    .replace('{{html}}', content);
                parentEl.insertBefore(htmlToElement(newEl), element);
                element.remove();
            });
        }
    },
    addTag: function(oldElement, template) {
        this.newTags[oldElement] = template;
    },
    newTags: {

    }
}

function getAttr(el) {
    let elClass = el.classList;
    return elClass;
}

(function($) {
    $.fn.templater = function(tag) {
        for (let i in tag.tags) {
            let oldTag = i;
            let newTmp = tag.tags[i];
            Templater.addTag(oldTag, newTmp);
        }
        Templater.run(this);

    };

})(jQuery);
