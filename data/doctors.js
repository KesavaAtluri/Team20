const mongoCollections = require('../config/mongoCollections');
var doctors = mongoCollections.doctors;
const { ObjectId } = require('mongodb');

module.exports = {

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