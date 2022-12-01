(function () {

    const myForm = document.getElementById("formForEditUser");
    let addressInput = document.getElementById("address");
   // let phnInput = document.getElementById("phonenumber");
    let streetInput = document.getElementById("street");
    let cityInput = document.getElementById("city");
    let stateInput = document.getElementById("state");
    let zipInput = document.getElementById("zipcode");
    let emailInput = document.getElementById("email");
   // let phnInput = document.getElementById("phonenumber");
    let errorDiv = document.getElementById('errorcheck');
    if (myForm) {
    myForm.addEventListener("submit", (event) => {
        valid = true
        if(streetInput.value){
            if(streetInput.value.length >= 500){
                event.preventDefault();
                valid = false
                streetInput.value = ''
                errorDiv.hidden = false;
                errorDiv.innerHTML = 'Address is too long'
                return
            }
        }
        if(cityInput.value){
            if(cityInput.value != "string"){
                event.preventDefault();
                valid = false
                cityInput.value = ''
                errorDiv.hidden = false;
                errorDiv.innerHTML = 'City is not string'
                return
            }
        }
        if(stateInput.value){
            if(stateInput.value.length != "string"){
                event.preventDefault();
                valid = false
                stateInput.value = ''
                errorDiv.hidden = false;
                errorDiv.innerHTML = 'State is not String'
                return
            }
        }
        if(zipInput.value){
            if(zipInput.value.length != 6){
                event.preventDefault();
                valid = false
                zipInput.value = ''
                errorDiv.hidden = false;
                errorDiv.innerHTML = 'Zip code invalid'
                return
            }
        }
        if(emailInput.value){
            if(emailInput.value.length != "string"){
                event.preventDefault();
                valid = false
                emailInput.value = ''
                errorDiv.hidden = false;
                errorDiv.innerHTML = 'Email is not string'
                return
            }
        }
        if(phnInput.value){
            if(phnInput.value.length != 10){
                event.preventDefault();
                valid = false
                phnInput.value = ''
                errorDiv.hidden = false;
                errorDiv.innerHTML = 'Phone number is not valid'
                return
            }
        }
        if(phnInput.value){
            valid = true
            errorDiv.hidden = true
        }
        else{
            event.preventDefault();
            valid = false
            addressInput.value = ''
            phnInput.value = ''
            phnInput.value=''
            errorDiv.hidden = false;
            errorDiv.innerHTML = 'No Updates were provided'
            return
        }
    });
    }
})();

        let profileButton = document.getElementById('profileButton')
        let profile = document.getElementById('profile')
        let editButton = document.getElementById('edit')
        let editProfile = document.getElementById('editPage')   
        let cancelButton = document.getElementById('cancel')

        profileButton.addEventListener('click',(event)=>{
            profile.hidden = false;
            profileButton.hidden = true;
            editProfile.hidden = true;
        })
        editButton.addEventListener('click',(event)=>{
            profile.hidden = true;
            profileButton.hidden = true;
            editProfile.hidden = false;
            
        })          
        cancelButton.addEventListener('click',(event)=>{
            profile.hidden = false;
            profileButton.hidden = true;
            editProfile.hidden = true;
        })
