(function() {
    window.aplicarEstilos = function(cssQuery, styles) {
        let elements = document.querySelectorAll(cssQuery);

        elements.forEach(function(e,i,elements) {
            e.style = styles;
        });
    }  
  })();