Templater = {
    run: function() {
        let inputObj = {
            'bootstrap_button': '<button class="btn btn-default" type="submit">Some Text</button>'
        }
        let tagArr = Object.keys(inputObj);
        for (i in inputObj) {
            let pageElements = Array.from(document.getElementsByTagName(i));
            pageElements.forEach(element => {
                element.outerHTML = inputObj[i]
            });
        }
    }
}


//Templater.run(template)