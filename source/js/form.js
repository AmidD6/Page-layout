(
    function() {
        var me = {};
        var form = document.querySelector(".form-container");
        var closeFormButton = null;
        
        function onClose(e) {
            e.preventDefault();
            me.close();
            closeFormButton.removeEventListener('click', onClose);
        }

        me.open = function() {
            form.classList.remove('is-hidden');
            
            closeFormButton = document.querySelector('.form__close-button');
            if (closeFormButton) {
                closeFormButton.addEventListener('click', onClose)
            }
        }
        
        me.close = function() {
            form.classList.add('is-hidden')
        };

        me.isValid = function(){
            if (!me.isAllCompleted(document.querySelectorAll('[data-valid="required"]'))) {
                console.log('Fill in the field');
                return false;
            } else if (!block.validation.isEmail(document.querySelector('[data-email]').value)) {
                console.log('Invalid mail');
                return false;
            } else if (!block.validation.isEmail(document.querySelector('[data-number]').value)) {
                console.log('Invalid number');
                return false;
            }
        };

        me.isAllCompleted = function(data){
            var result = true;

            for (var i = 0; i < data.length; i++) {
                if (!block.validation.isNotEmpty(data[i].value)) {
                    result = false;
                    break;
                }
            }
            return result;
        }



        block.form = me;
    }()    
);