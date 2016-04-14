(function() {
    var countryElements = document.getElementById('countries').childNodes,
        countryCount = countryElements.length,
        wrapper = document.getElementById('wrapper'),
        search = document.getElementById('search'),
        country,
        timeout = false,
        i = 0;

    document.addEventListener("keyup", function() {

        if (country) {
            clearTimeout(timeout);
            country.classList.remove('show');
            removeFlag();
        }

        if (search.value.length > 0) country = document.querySelector("[data-name=" + search.value + "]") || false;

        if (country) {
            country.classList.add('show');
            addFlag(country, false);

            timeout = setTimeout(function(){
                country.classList.remove('show');
                removeFlag();
            }, 3000);
        }

    });

    while (i < countryCount) {

        countryElements[i].onmouseover = function(event) {
            addFlag(this, event);
        };

        countryElements[i].onmousemove = function(event) {
            var flag = document.getElementsByClassName('flag-icon')[0] || false;

            if (flag) {
                flag.style.top = event.clientY - 50 + 'px';
                flag.style.left = event.clientX + 10    + 'px';
            }

        };

        countryElements[i].onmouseout = function() {
            removeFlag();
        };

        i++;
    }

    function addFlag(context, event) {
        var flag = document.createElement("span");
        flag.className = "flag flag-icon flag-icon-" + context.getAttribute('data-id').toLowerCase();

        if (event) {
            flag.style.top = event.clientY - 50 + 'px';
            flag.style.left = event.clientX + 10    + 'px';
        }
        else {
            flag.style.top = context.style.top + 'px';
            flag.style.left = context.style.left + 'px';
        }

        wrapper.appendChild(flag);
    }

    function removeFlag() {
        wrapper.removeChild(document.getElementsByClassName('flag-icon')[0]);
    }

})();
