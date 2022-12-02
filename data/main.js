let { ObjectId } = require("mongodb");
let mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const bcrypt = require('bcryptjs');
const saltRounds = 5;

//Function for registration of user

async function createUsers(firstName,lastName,dob,street,city,state,zipCode,phoneNumber,email,username,password) {

    if(!firstName ) { throw 'First Name must be provided' }
    if(!lastName) { throw 'Last Name must be provided' }
    if(!username) { throw 'Username must be provided' }
    if(!phoneNumber){ throw 'Phone number must be provided' }
    if(!password) { throw 'Password must be provided' }
    if(!dob) { throw 'Date_of_Birth must be provided(MM/DD/YYYY)' }
    if(!street) { throw 'Street must be provided' }
    if(!city){ throw 'City must be provided' }
    if(!state) { throw 'State must be provided' }
    if(!zipCode) { throw 'Zip Code must be provided' }
    if(!phoneNumber){ throw 'Phone Number must be provided' }
    if(!email) { throw 'Email must be provided' }

    if(typeof firstName != 'string') { throw 'First Name must be a string' }
    if(typeof lastName != 'string') { throw 'Last Name must be a string' }
    if(typeof username != 'string') { throw 'Username must be a string' }
    if(typeof phoneNumber != 'string'){ throw 'Phone Number must be a string' }
    if(typeof password != 'string'){ throw 'Password must be a string' }
    if(typeof dob != 'string') { throw 'Date of Birth must be a string' }
    if(typeof street != 'string') { throw 'Street must be a string' }
    if(typeof city != 'string') { throw 'City must be a string' }
    if(typeof state != 'string') { throw 'State must be a string' }
    if(typeof zipCode != 'string') { throw 'Zip Code must be a string' }
    if(typeof email != 'string') { throw 'Email must be a string' }
    
    if(firstName.length===0) { throw 'First Name cannot be empty' }
    if(lastName.length===0) { throw 'Last Name cannot be empty' }
    if(username.length===0) { throw 'Username cannot be empty' }
    if(phoneNumber.length===0) { throw 'Phone Number cannot be empty' }
    if(password.length===0) { throw 'Password cannot be empty' }
    if(dob.length===0) { throw 'Date of Birth cannot be empty' }
    if(street.length===0) { throw 'Street cannot be empty' }
    if(city.length===0) { throw 'City cannot be empty' }
    if(state.length===0) { throw 'State cannot be empty' }
    if(zipCode.length===0) { throw 'Zip code cannot be empty' }
    if(email.length===0) { throw 'Email cannot be empty' }

    if(firstName.indexOf(' ')>=0) { throw 'First Name cannot contain empty spaces' }
    if(lastName.indexOf(' ')>=0) { throw 'Last Name cannot contain empty spaces' }
    if(username.indexOf(' ')>=0) { throw 'Username cannot contain empty spaces' }
    if(phoneNumber.indexOf(' ')>=0) { throw 'Phone Number cannot contain empty spaces' }
    if(password.indexOf(' ')>=0) { throw 'Password cannot contain empty spaces' }
    if(dob.indexOf(' ')>=0) { throw 'Date of birth cannot contain empty spaces' }
    // if(street.indexOf(' ')>=0) { throw 'Street cannot contain empty spaces' }
    // if(city.indexOf(' ')>=0) { throw 'City cannot contain empty spaces' }
    // if(state.indexOf(' ')>=0) { throw 'State cannot contain empty spaces' }
    if(zipCode.indexOf(' ')>=0) { throw 'Zip Code cannot contain empty spaces' }
    if(email.indexOf(' ')>=0) { throw 'Email cannot contain empty spaces' }

    if(username.length < 4) { throw 'Username should be atleast 4 characters long' }

    let phnRegEx = /^[0-9]*$/; // Regular Expression to check numbers only
    if(!phoneNumber.match(phnRegEx)) { throw 'Phone Number can only contain numbers' }
    if(!zipCode.match(phnRegEx)) { throw 'Zip Code can only contain numbers' }

    if(zipCode.length > 5) { throw 'Zip Code cannot have more than 5 numbers' }
    if(zipCode.length < 5 ) { throw 'Zip Code cannot have less than 5 numbers' }

    if(password.length<6) { throw 'Password should be atleast 6 characters long' }
    
    let regexp_num = /\d/; // Regular Expression to check not numbers only

    if(firstName.match(regexp_num)) { throw 'First Name cannot contain numbers' }
    if(lastName.match(regexp_num)) { throw 'Last Name cannot contain numbers' }
    if(city.match(regexp_num)) { throw 'Last Name cannot contain numbers' }
    //if(street.match(regex3)) { throw 'Street cannot contain numbers' }
    if(state.match(regexp_num)) { throw 'State cannot contain numbers' }

    let RegEx = /[^0-9a-z]/gi // Regular Expression to check special characters

    if(username.match(RegEx)) { throw 'Username cannot contain special characters' }
    if(firstName.match(RegEx)){ throw 'First Name cannot contain special characters' }
    if(lastName.match(RegEx)) { throw 'Last Name cannot contain special characters' }
    //if(street.match(RegEx)) { throw 'Street cannot contain special characters' }
    //if(city.match(RegEx)){ throw 'City cannot contain special characters' }
    if(state.match(RegEx)){ throw 'State cannot contain special characters' }

    if(phoneNumber.length>10) { throw 'Phone Number cannot have more than 10 numbers' }
    if(phoneNumber.length<10) { throw 'Phone Number cannot have less than 10 numbers' }
    
    // Regular Expression for email

    let regeEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    email.toLowerCase();
    if(!email.match(regeEmail)) { throw 'Invalid Email' }

    // Regular Expression for date of birth

    let regExp_dob = /(0[1-9]|1[0-2])\/(((0|1)[0-9]|2[0-9]|3[0-1])\/((19|20)\d\d))$/;
    var dateString = dob;
    if(!dateString.match(regExp_dob)){
        throw 'Invalid date of birth'
    }
    else {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);

        if(parseInt(parts[0]) > 12 || parseInt(parts[0]) < 1) {
             throw " Invalid month"
        } 
        if(parseInt(parts[1]) == 31 && parseInt(parts[0]) == 2 || parseInt(parts[1]) == 31 && parseInt(parts[0]) == 4 || parseInt(parts[1]) == 31 && parseInt(parts[0]) == 6 || parseInt(parts[1]) == 31 && parseInt(parts[0]) == 9 || parseInt(parts[1]) == 31 && parseInt(parts[0]) == 11) {
             throw " Invalid date of birth"
        }  
        var dtCurrent = new Date();
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 0) {
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                throw 'Invalid Date of birth'
            }
        }
    }
    let regExp_onum = /^\d+$/;
    if(username.match(regExp_onum)){
        throw 'Username cannot contain only Numbers'
    }
    username=username.toLowerCase();
    const hash = await bcrypt.hash(password,saltRounds);
    const userCollections = await users();
    let newUser = {
        First_Name : firstName,
        Last_Name : lastName,
        Date_of_Birth : dob,
        Address : {'Street' : street, 'City' : city, 'State' : state, 'Zip' : zipCode},
        Phone_Number : phoneNumber,
        Email: email,
        username: username,
        password : hash,
        Patient_History: [],
        Appointments_details : ""
    };
    
    let existingUser = false;
    existingUser = await userCollections.findOne({username:username});
    if(existingUser){
        throw 'A user with this username already exists, please use a different Username'
    }
    const insertUser = await userCollections.insertOne(newUser);
    if(insertUser.insertedCount === 0){
        throw 'Could not add the user'
    }
    return {inserted : true};
}

// Authenticating a user

async function checkUser(username,password){
    if(!username){
    throw 'Username must be provided'
    }
    if(!password){
        throw 'Password must be provided'
    }
    if(typeof username != 'string'){
        throw 'Username must a string'
    }
    if(username.length === 0){
        throw 'Username cannot be empty'
    }
    if(username.indexOf(' ')>=0){
        throw 'Username cannot contain spaces'
    }
    if(typeof password != 'string'){
        throw 'Password must be a string'
    }
    if(username.length<4){
        throw 'Length of the username should be at least 4'
    }
    let regExp_n = /^\d+$/;
    if(username.match(regExp_n)){
        throw 'Username cannot contain only numbers'
    }
    let regExp_sp = /[^0-9a-z]/gi
    if(username.match(regExp_sp)){
        throw 'Username cannot contain special characters'
    }
    if(password.length < 6){
        throw 'Password must be atleast 6 characters long'
    }
    
    const userData = await users();
    const userDetails = await userData.findOne({username:username});
    if(userDetails==null){
        throw 'No user with this username exists'
    }
    if(userDetails.username===username){
        let pass = await bcrypt.compare(password,userDetails.password);
        if(pass) {
            return {authenticated: true};
        }else {
            throw 'Either the username or password is invalid'
        }
    } 
}
module.exports={
    createUsers,
    checkUser
}
