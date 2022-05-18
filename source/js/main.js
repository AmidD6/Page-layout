(
    function() {
        
        
        var openFormButton = document.querySelector('.arrow-down');
        var form = document.querySelector('.form');
        var nav = document.querySelector('.nav');

        if (openFormButton) {
            openFormButton.addEventListener('click', function(e){
                e.preventDefault();
                block.form.open();
            });
        }

        if (form) {
            form.addEventListener('click', function(e){
                e.preventDefault();
                if (block.form.isValid()) {
                    console.log('All good');
                } else {
                    console.log('Is not valid');
                }
                
            })
        }

        if(nav) {
            nav.addEventListener('click', function(e) {
                var target = e.target;
                // console.log(target)
                if (target.tagName.toLowerCase() !== 'a') {
                    return;
                }

                e.preventDefault();
                block.navigation.toggleToActiveLink(target);
            })
        }
        
        
    }()
);