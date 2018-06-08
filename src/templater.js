Templater = {
    tags: {},
    run: function() {
        //  let tagArr = Object.keys(inputObj);
        console.log(this.tags)
        for (i in this.tags) {
            let pageElements = Array.from(document.getElementsByTagName(i));
            pageElements.forEach(element => {
                element.outerHTML = this.tags[i]
            });
        }
    },
    addTag: function(oldElement, template) {
        this.tags[oldElement] = template;
    }
}