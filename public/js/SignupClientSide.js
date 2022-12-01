(function () {
    const signForm = document.getElementById("signUpForm");
    let username_input = document.getElementById("username");
    let password_input = document.getElementById("password");
    let firstName_input = document.getElementById("firstname");
    let lastName_input = document.getElementById("lastname");
    let dob_input = document.getElementById("dob");
    let street_input = document.getElementById("street");
    let city_input = document.getElementById("city");
    let state_input = document.getElementById("state");
    let zipcode_input = document.getElementById("zipcode");
    let email_input = document.getElementById("email");
    let phoneNumber_input = document.getElementById("phonenumber");

    let err = document.getElementById('err_c');
    if (signForm) {
        signForm.addEventListener("submit", (event) => {
        valid = true
        if(!username_input.value){
            event.preventDefault();
            valid = false
            username_input.value = ''
            err.hidden = false;
            err.innerHTML = 'Username not provided'
            return
        }
        else{
            valid = true
            err.hidden = true
        }
        if(!password_input.value){
            event.preventDefault();
            valid = false
            password_input.value = ''
            err.hidden = false
            err.innerHTML = 'Password not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!firstName_input.value){
            event.preventDefault();
            valid = false
            firstName_input.value = ''
            err.hidden = false
            err.innerHTML = 'First Name not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!lastName_input.value){
            event.preventDefault();
            valid = false
            lastName_input.value = ''
            err.hidden = false
            err.innerHTML = 'Last Name not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!dob_input.value){
            event.preventDefault();
            valid = false
            dob_input.value = ''
            err.hidden = false
            err.innerHTML = 'Date of Birth not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!street_input.value){
            event.preventDefault();
            valid = false
            street_input.value = ''
            err.hidden = false
            err.innerHTML = 'Street not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!city_input.value){
            event.preventDefault();
            valid = false
            city_input.value = ''
            err.hidden = false
            err.innerHTML = 'City not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!state_input.value){
            event.preventDefault();
            valid = false
            state_input.value = ''
            err.hidden = false
            err.innerHTML = 'State not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!zipcode_input.value){
            event.preventDefault();
            valid = false
            zipcode_input.value = ''
            err.hidden = false
            err.innerHTML = 'Zip Code not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!phoneNumber_input.value){
            event.preventDefault();
            valid = false
            phoneNumber_input.value = ''
            err.hidden = false
            err.innerHTML = 'Phone Number must be provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(!email_input.value){
            event.preventDefault();
            valid = false
            email_input.value = ''
            err.hidden = false
            err.innerHTML = 'Email not provided'
            return
        }else{
            valid = true
            err.hidden = true
        }
        if(username_input.value.length<4){
            event.preventDefault();
            valid=false
            username_input.value=''
            err.hidden=false
            err.innerHTML = 'Length of the username should be atleast 4'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(password_input.value.length<6){
            event.preventDefault();
            valid=false
            password_input.value=''
            err.hidden=false
            err.innerHTML = 'Length of the password should be atleast 6'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(username_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false;
            username_input.value=''
            err.hidden=false
            err.innerHTML='Username must not have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(password_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            password_input.value=''
            err.hidden=false
            err.innerHTML='Password cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(firstName_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            firstName_input.value=''
            err.hidden=false
            err.innerHTML='First Name cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(lastName_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            lastName_input.value=''
            err.hidden=false
            err.innerHTML='Last Name cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(dob_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            dob_input.value=''
            err.hidden=false
            err.innerHTML='Date of Birth cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(street_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            street_input.value=''
            err.hidden=false
            err.innerHTML='Street cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(city_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            city_input.value=''
            err.hidden=false
            err.innerHTML='City cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(state_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            state_input.value=''
            err.hidden=false
            err.innerHTML='State cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(zipcode_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            zipcode_input.value=''
            err.hidden=false
            err.innerHTML='Zip Code cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(phoneNumber_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            phoneNumber_input.value=''
            err.hidden=false
            err.innerHTML='Phone Number cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(email_input.value.indexOf(' ')>=0){
            event.preventDefault();
            valid=false
            email_input.value=''
            err.hidden=false
            err.innerHTML='Email cannot have empty spaces'
            return
        }else{
            valid=true
            err.hidden=true
        }
        let regExp_spc = /[^0-9a-z]/gi;
        if(username_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            username_input.value=''
            err.hidden=false
            err.innerHTML='Username cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(firstName_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            firstName_input.value=''
            err.hidden=false
            err.innerHTML='First Name cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(lastName_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            lastName_input.value=''
            err.hidden=false
            err.innerHTML='Last Name cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(street_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            street_input.value=''
            err.hidden=false
            err.innerHTML='Street cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(city_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            city_input.value=''
            err.hidden=false
            err.innerHTML='City cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(state_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            state_input.value=''
            err.hidden=false
            err.innerHTML='State cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(zipcode_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            zipcode_input.value=''
            err.hidden=false
            err.innerHTML='Zip Code cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(phoneNumber_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            phoneNumber_input.value=''
            err.hidden=false
            err.innerHTML='Phone Number cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(email_input.value.match(regExp_spc)){
            event.preventDefault();
            valid=false
            email_input.value=''
            err.hidden=false
            err.innerHTML='Email cannot contain special characters'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(phoneNumber_input.value.length != 10){
            event.preventDefault();
            valid=false
            phoneNumber_input.value=''
            err.hidden=false
            err.innerHTML='Phone Number can only have 10 digits'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(zipcode_input.value.length != 5){
            event.preventDefault();
            valid=false
            zipcode_input.value=''
            err.hidden=false
            err.innerHTML='Zip Code can only have 5 digits'
            return
        }else{
            valid=true
            err.hidden=true
        }
        let regExp_num = /^[0-9]*$/;
        if(!phoneNumber_input.value.match(regExp_num)){
            event.preventDefault();
            valid=false
            phoneNumber_input.value=''
            err.hidden=false
            err.innerHTML='Phone Number must only contain numbers'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(!zipcode_input.value.match(regExp_num)){
            event.preventDefault();
            valid=false
            zipcode_input.value=''
            err.hidden=false
            err.innerHTML='Zip Code must only contain numbers'
            return
        }else{
            valid=true
            err.hidden=true
        }
        let regExp_nn = /\d/;
        if(firstName_input.value.match(regExp_nn)){
            event.preventDefault();
            valid=false
            firstName_input.value=''
            err.hidden=false
            err.innerHTML='First Name cannot contain numbers'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(lastName_input.value.match(regExp_nn)){
            event.preventDefault();
            valid=false
            lastName_input.value=''
            err.hidden=false
            err.innerHTML='Last Name cannot contain numbers'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(city.value.match(regExp_nn)){
            event.preventDefault();
            valid=false
            city_input.value=''
            err.hidden=false
            err.innerHTML='City cannot contain numbers'
            return
        }else{
            valid=true
            err.hidden=true
        }
        if(state_input.value.match(regExp_nn)){
            event.preventDefault();
            valid=false
            state_input.value=''
            err.hidden=false
            err.innerHTML='State cannot contain numbers'
            return
        }else{
            valid=true
            err.hidden=true
        }
        let regExp_on = /^\d+$/;
        if(username_input.value.match(regExp_on)){
            event.preventDefault();
            valid=false
            username_input.value=''
            err.hidden=false
            err.innerHTML='Username cannot only contain numbers'
            return
        }else{
            valid=true
            err.hidden=true
        }
        let regExpEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let val = email_input.value;
        val.toLowerCase();
        if(val.match(regExpEmail)){
            event.preventDefault();
            valid=false
            email_input.value=''
            err.hidden=false
            err.innerHTML='Provide Valid Email'
            return
        }else{
            valid=true
            err.hidden=true
        }
        let regExp_dob = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
        var dateString = dob_input.value;
        if(dateString.match(regExp_dob)){
            var parts = dateString.split("/");
            var dtDOB = new Date(parts[0] + "/" + parts[1] + "/" + parts[2]);
            var dtCurrent = new Date();
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            event.preventDefault();
            valid=false
            dob_input.value=''
            err.hidden=false
            err.innerHTML='Enter Valid Date of Birth (MM/DD/YYYY)'
            return
        }else{
            valid=true
            err.hidden=true
        }
    });
    }
})();