(function() {
    var countryElements = document.getElementById('countries').childNodes,
        countryCount = countryElements.length,
        wrapper = document.getElementById('wrapper'),
        i = 0;


    while (i < countryCount) {

        countryElements[i].onmouseover = function(event) {
            var flag = document.createElement("span");
            flag.className = "flag flag-icon flag-icon-" + this.getAttribute('data-id').toLowerCase();

            flag.style.top = event.clientY - 50 + 'px';
            flag.style.left = event.clientX + 10    + 'px';

            wrapper.appendChild(flag);
        };

        countryElements[i].onmousemove = function(event) {
            var flag = document.getElementsByClassName('flag-icon')[0] || false;

            if (flag) {
                flag.style.top = event.clientY - 50 + 'px';
                flag.style.left = event.clientX + 10    + 'px';
            }
        };

        countryElements[i].onmouseout = function() {
            wrapper.removeChild(document.getElementsByClassName('flag-icon')[0]);
        };

        i++;
    }
})();
