const mongoCollections = require('../config/mongoCollections');
const pharmacy = mongoCollections.pharmacy;
const { ObjectId } = require('mongodb');

async function createPharmacy(Name, street,city,state,zipCode, Available_Medicine){
    const pharmacyCollection = await pharmacy();
    let newPharmacy = { 
        Name: Name,
        Address : {'Street' : street, 'City' : city, 'State' : state, 'Zip' : zipCode},
        Available_Medicine: Available_Medicine,
        Reviews: []
      }
    const insertInfo = await pharmacyCollection.insertOne(newPharmacy);
    if (!insertInfo.acknowledged || !insertInfo.insertedId)
      throw 'Could not add Pharmacy';
  
    newPharmacy._id=newPharmacy._id.toString();
    return newPharmacy;
}

async function getAll() {
    const pharmacyCollection = await pharmacy();
    const pharmacies = await pharmacyCollection.find({}).toArray();
    return pharmacies;
}

async function get(id) {
  if (id.trim().length === 0) throw 'Id cannot be an empty string or just spaces';
  if (!id) throw 'Please provide id';
  id=id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  //if (typeof zid !== 'string') throw 'Id must be a string';
  const pharmacyCollection = await pharmacy();
  const pharmacyNew = await pharmacyCollection.findOne({  _id: ObjectId(id)});
  if (pharmacyNew === null) throw 'No pharmacy with that zid';
  return pharmacyNew;  
}

async function getZip(zid) {
    if (zid.trim().length === 0) throw 'zip code cannot be an empty string or just spaces';
    if (!zid) throw 'Please provide zip code';
    zid=zid.trim();
    //if (!ObjectId.isValid(zid)) throw 'invalid object ID';
    if (typeof zid !== 'string') throw 'zip code must be a string';
    const pharmacyCollection = await pharmacy();
    const pharmacyNew = await pharmacyCollection.find({"Address.Zip":zid}).toArray();
    if (pharmacyNew === null) throw 'No pharmacy found in that zip code';
    return pharmacyNew;  
  }

  async function getMeds(meds) {
    if (meds.trim().length === 0) throw 'Medicine name cannot be an empty string or just spaces';
    if (!meds) throw 'Please provide Medicine name';
    meds=meds.trim();
    //if (!ObjectId.isValid(zid)) throw 'invalid object ID';
    if (typeof meds !== 'string') throw 'Medicine name must be a string';
    const pharmacyCollection = await pharmacy();
    const pharmacyNew = await pharmacyCollection.find({"Available_Medicine": {$regex: meds, $options: 'i'}}).toArray();
    //const pharmacyNew = await pharmacyCollection.find({"available_medicine": /^meds$/i}).toArray();
    if (pharmacyNew === null) throw 'Medcine is currently unavailble';
    return pharmacyNew;  
  }

module.exports={
    createPharmacy,
    getAll,
    get,
    getZip,
    getMeds
  }