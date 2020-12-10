function login_act() {
    let username = document.forms['login']['username'].value;
    let password = document.forms['login']['password'].value;
    let body = document.getElementById('body');
    let modal = document.querySelector('.modal');
    let invalid = document.querySelector('.span');
    // let button = document.querySelector('button[data-toggle="login"]');

    if (username == "pweb_C" && password == "123123") {
        modal.classList.add('show');
        invalid.classList.remove('show');
        body.style.background = 'green';
        modal.addEventListener('click', function() {
            this.classList.remove('show');
            this.querySelector('.modal-content').addEventListener('click', function(e) {
                e.stopPropagation();
            })
        })
    }

    else {
        invalid.classList.add('show');
        body.style.background = 'white';
    }
}


// button.addEventListener('click', function() {
//     modal.classList.add('show');
// })

// modal.addEventListener('click', function() {
//     this.classList.remove('show');
//     this.querySelector('.modal-content').addEventListener('click', function(e) {
//         e.stopPropagation();
//     })
// }) 
// function changeBodyColor() {
//     body.style.background = 'green';
// }