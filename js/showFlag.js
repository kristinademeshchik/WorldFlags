(function() {
    var countryElements = document.getElementById('countries').childNodes,
        countryCount = countryElements.length,
        i = 0;


    while (i < countryCount) {

        countryElements[i].onmouseover = function() {
            console.log('You clicked on ' + this.getAttribute('data-name'));
        };

        i++;
    }
})();
