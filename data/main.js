let { ObjectId } = require("mongodb");
let mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const bcrypt = require('bcryptjs');
const saltRounds = 5;
async function createUsers(firstName,lastName,dob,street,city,state,zipCode,phoneNumber,email,username,password) {

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
module.exports={
    createUsers
}