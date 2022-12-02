const mongoCollections = require('../config/mongoCollections');
var doctors = mongoCollections.doctors;
const { ObjectId } = require('mongodb');

module.exports = {

    async createDoctor(First_Name, Last_Name, Street, city ,state ,zip , Ph_No, Speciality, Online_Appointments){
        if (!First_Name || !Last_Name || !Ph_No || !Speciality ) {
          throw "All fields must be present";
        }
        
          let newdoctor = {
            First_Name : First_Name,
            Last_Name : Last_Name,
            Address : 
            {
            'Street' : Street,
            'City' : city,
            'State' : state,
            'Zip' : zip 
            },
            Ph_No : Ph_No,
            Speciality : Speciality,
            Reviews : [],
            Online_Appointments : Online_Appointments
          }
          const doctorCollection = await doctors()
          const insertInfo = await doctorCollection.insertOne(newdoctor);
          if (insertInfo.insertedCount === 0){
              throw "Internal Server Error"
          } else {
              const id = insertInfo.insertedId.toString()
              return {doctorInserted: true, carId: id}
          }
      },

      async getAllDoctor(){
        const doctorCollection = await doctors()
        const doctorList = await doctorCollection.find({}).toArray();
        return doctorList
    },


    async getDoctorBySpec(searchTerm){

        if(!searchTerm){
          throw 'No searchTerm was provided'
        }
        if(typeof searchTerm !='string'){
          throw 'searchTerm provided is not a string'
        }
        if(searchTerm.trim(' ').length ==0){
          throw 'Input cannot be just whitespaces'
        }
        // let regex1 = /[^0-9a-z]/gi;
        // if(searchTerm.match(regex1)){
        //   throw 'Input cannot be special characters'
        // }
        let regex2 = /\d/;
        if(searchTerm.match(regex2)){
          throw 'Search Term cannot contain Numbers'
        }

        const doctorCollection = await doctors();
        //let res = await doctorCollection.findAll({ Speciality: spec});
        const doctorspec = await doctorCollection.find({}).toArray();
        let result = []
        for (i = 0; i < doctorspec.length; i++){
          
          if (doctorspec[i]['Speciality'] === searchTerm){
            result.push(doctorspec[i])
          }
          if (doctorspec[i]['First_Name'] === searchTerm){
            result.push(doctorspec[i])
          }
          if (doctorspec[i]['Last_Name'] === searchTerm){
            result.push(doctorspec[i])
          }
        }
        result.sort(function(a,b){
          return a.overallRating > b.overallRating;
        });
        return result;
    },

    async getDoctorById(id){
        if (!id) {
          throw 'An ID is required to search for an Doctor';
        }
        if (!id || typeof id != 'string') {
          throw 'A id of type string must be provided for doctor!';
        }
        if (typeof id === 'string') {
          id = ObjectId(id);
        } else if (!(id instanceof ObjectId)) {
          throw 'Invalid type of id:needs to be string';
        }
        const doctorCollection = await doctors()
        let parsedId = ObjectId(id);
        const doctor = await doctorCollection.findOne({_id: parsedId})
        if (doctor === null) {throw "No doctor with that id"}
        return doctor
      }

};