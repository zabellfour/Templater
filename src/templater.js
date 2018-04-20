let Templater = {
    run: function() {
        for (i in this.newTags) {
            let pageEl = Array.from(document.getElementsByTagName(i));
            let newEl = document.createElement('div');
            newEl.innerHTML = this.newTags[i];
            pageEl.forEach(element => {
                element.replaceWith(newEl.firstChild)
            });
        }
    },
    addTag: function(oldElement, template) {
        this.newTags[oldElement] = template;
    },
    newTags: {

    }
}

// Templater.addTag('bootstrap_button', '<button class="btn btn-default" type = "submit"> Some Text </button>');
// Templater.addTag('bootstrap_link', '<a class="btn btn-default" href="#" role="button">Some Another Text</a>');
// Templater.run();
//console.log(Templater.newTags);