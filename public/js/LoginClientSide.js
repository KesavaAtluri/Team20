(function () {
    const loginForm = document.getElementById("loginForm");
    let username_input = document.getElementById("username")
    let password_input = document.getElementById("password")
    let error_div = document.getElementById('err_c');
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            valid = true   
            if(!username_input.value){
                event.preventDefault();
                valid = false
                username_input.value = ''
                error_div.hidden = false;
                error_div.innerHTML = 'Username must be provided'
                return
            }
            else {
                valid = true
                error_div.hidden = true
            }
            if(!password_input.value){
                event.preventDefault();
                valid = false
                password_input.value = ''
                error_div.hidden = false
                error_div.innerHTML = 'Password must be provided'
                return
            }else {
                valid = true
                error_div.hidden = true
            }
            if(username_input.value.length < 4) {
                event.preventDefault();
                valid=false
                username_input.value=''
                error_div.hidden=false
                error_div.innerHTML = 'Length of the username should be atleast 4'
                return
            }else {
                valid=true
                error_div.hidden=true
            }
            if(password_input.value.length < 6) {
                event.preventDefault();
                valid=false
                password_input.value=''
                error_div.hidden=false
                error_div.innerHTML = 'Length of the password should be atleast 6'
                return
            }else {
                valid=true
                error_div.hidden=true
            }
            if(username_input.value.indexOf(' ')>=0){
                event.preventDefault();
                valid=false;
                username_input.value=''
                error_div.hidden=false
                error_div.innerHTML='Username must not have empty spaces'
                return
            }else {
                valid=true
                error_div.hidden=true
            }
            if(password_input.value.indexOf(' ')>=0){
                event.preventDefault();
                valid=false
                password_input.value=''
                error_div.hidden=false
                error_div.innerHTML='Password cannot have empty spaces'
                return
            }else {
                valid=true
                error_div.hidden=true
            }
            let regExp_spec = /[^0-9a-z]/gi;
            if(username_input.value.match(regExp_spec)){
                event.preventDefault();
                valid=false
                username_input.value=''
                error_div.hidden=false
                error_div.innerHTML='Username cannot contain special characters'
                return
            }else {
                valid=true
                error_div.hidden=true
            }
            let regExp_non = /^\d+$/;
            if(username_input.value.match(regExp_non)){
                event.preventDefault();
                valid=false
                username_input.value=''
                error_div.hidden=false
                error_div.innerHTML='Username cannot only contain numbers'
                return
            }else {
                valid=true
                error_div.hidden=true
            }
        });
    }
})();