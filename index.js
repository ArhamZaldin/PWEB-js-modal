let username = document.forms['myForm']['username'].value;
let password = document.forms['myForm']['password'].value;
let body = document.getElementById('body');
let button = document.querySelector('button[data-toggle="login"]');
let modal = document.querySelector('.modal');

function login() {
    if (username == "pweb_C" && password == "123123") {
        function changeBodyColor() {
            body.style.background = 'green';
        }
        
        button.addEventListener('click', function() {
            modal.classList.add('show');
        })
        
        modal.addEventListener('click', function() {
            this.classList.remove('show');
            this.querySelector('.modal-content').addEventListener('click', function(e) {
                e.stopPropagation();
            })
        }) 
    }
}


