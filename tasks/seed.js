const doctors = require("../data/doctors");
const users = require("../data/main");
const user = require("../data/users");
const pharmacies = require("../data/pharmacies");
const reviews = require("../data/reviews");
const connection = require("../config/mongoConnection");
const mongoCollections = require('../config/mongoCollections');
const doctor = mongoCollections.doctors;
let { ObjectId } = require("mongodb");
const pharmaData = mongoCollections.pharmacy;
const { connectToDb } = require("../config/mongoConnection");

const main = async () => {
  let doctor1 = undefined;
  let doctor2 = undefined;
  let doctor3 = undefined;
  let doctor4 = undefined;
  let doctor5 = undefined;
  let doctor6 = undefined;
  let doctor7 = undefined;
  let doctor8 = undefined;
  let doctor9 = undefined;
  let doctor10 = undefined;
  let user1 = undefined;
  let user2 = undefined;
  let user3 = undefined;
  let user4 = undefined;
  let user5 = undefined;
  let user6 = undefined;
  let user7 = undefined;
  let user8 = undefined;
  let user9 = undefined;
  let user10 = undefined;
  let pharma1 = undefined;
  let pharma2 = undefined;
  let pharma3 = undefined;
  let pharma4 = undefined;
  let pharma5 = undefined;
  let pharma6 = undefined;
  let pharma7 = undefined;
  let pharma8 = undefined;
  let pharma9 = undefined;
  let pharma10 = undefined;

  try {
      doctor1 = await doctors.createDoctor("Krithika", "Gandlaur" , "232 Hancock Ave" , "Jersey City" , "NJ", "07307","3456789087", "Orthopedics","True");
      console.log("doctor 1 details inserted succesfully");
    } catch (error) {
      console.log(error);
  }

  try {
      doctor2 = await doctors.createDoctor("Nikhil","Bhoneja", "202 Webster Ave","Jersey City","NJ","07307" ,"5518769782","Oncology","YES");
      console.log("doctor 2 details inserted succesfully");
    } catch (error) {
      console.log(error);
  }

  try {
      doctor3 = await doctors.createDoctor("Shanky","Tyagi", "203 Sherman Ave","Jersey City","NJ","07307" ,"5518769723","Gynaecology","NO");
      console.log("doctor 3 details inserted succesfully");
    } catch (error) {
      console.log(error);
  }

  try {
      doctor4 = await doctors.createDoctor("Kartik","Ahluwalia","204 Webster Ave","Jersey City","NJ","07307","2018769782","Diabetes Consult","YES");
      console.log("doctor 4 details inserted succesfully");
    } catch (error) {
      console.log(error);
  }

  try {
      doctor5 = await doctors.createDoctor("Neha","Phuloria","76 Washington Ave","Hoboken","NJ","07370","4209211420","Weight Management","NO");
      console.log("doctor 5 details inserted succesfully");
    } catch (error) {
      console.log(error);
  }

  try {
    doctor6 = await doctors.createDoctor("Rishabh","Gupta","70 Franklin St","Jersey City","NJ","04630","1231231234","Stress and Mental Health","YES");
    console.log("doctor 6 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }

  try {
    doctor7 = await doctors.createDoctor("Patrick","Hill","23 Micheal St","Jacksonville","NY","58212","4332857129","Dermatology","YES");
    console.log("doctor 7 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }

  try {
    doctor8 = await doctors.createDoctor("Ashley","Johnson","9 Roles St","Union City","NJ","07159","4522568723","Neurology","YES");
    console.log("doctor 8 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }

  try {
    doctor9 = await doctors.createDoctor("Liam","OBrien","76 Washington Ave","Hoboken","NJ","07370","4673547234","Stress and Mental Health","NO");
    console.log("doctor 9 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }

  try {
    doctor10 = await doctors.createDoctor("Travis","Willingham","62 Washington Ave","Hoboken","NJ","07370","5130982340","Gastroenterology","NO")
    console.log("doctor 10 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user1 = await users.createUsers("Sam","Riegal","02/04/1984","94  Willow Ave", "Union City", "NJ", "07649","2314567890", "sriegal@stevens.edu","RamSeigal","BigTeeth");
    console.log("User 1  inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user2 = await users.createUsers("Marisha","Ray","10/15/1999","230 Kool St", "Newark", "NJ", "06124","2314567890", "marsha@stevens.edu","Marsha","RayGun");
    console.log("User 2  inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user3 = await users.createUsers("Kartik","Ahluwalia","09/03/1999","45 Comic Ave", "Hoboken", "NJ", "07390","2314567890", "k9@stevens.edu","KartikA","LetMeIn");
    console.log("User 3  inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user4 = await users.createUsers("Neha","Phuloria","10/16/1998","24 Buckingham St", "Union City", "NJ", "06893","2314567890", "nph@stevens.edu","NehaP","PASS345");
    console.log("User 4 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user5 = await users.createUsers("Shanky","Tyagi","01/12/1997","245 Sherman St", "Jersey City", "NJ", "07313", "2314567890","gjjb@stevens.edu","ShankyT","PASS345");
    console.log("User 5 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user6 = await users.createUsers("Nikhil","Bhonneja","06/07/1998","9 Brennan Way", "Union City", "NJ", "07193","2314567890", "nph@stevens.edu","NehaP","PASS4566");
    console.log("User 6 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user7 = await users.createUsers("Taliesin","Jaffe","06/06/1996","Street Avenue Place", "El Ray Dorado", "XY", "66666","2314567890", "god@illuminati.com","gghod","FindsAWay");
    console.log("User 7 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user8 = await users.createUsers("Laura","Bailey","11/08/1992","87 Imogen Ave", "North Bergen", "NJ", "06193","2314567890", "lbailey@stevens.edu","PurpleJester","ronin3");
    console.log("User 8 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user9 = await users.createUsers("Travis","Willingham","05/08/1991","87 Imogen Ave", "North Bergen", "NJ", "06193","2314567890", "willingham@stevens.edu","Willingblam","ron34in");
    console.log("User 9 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user10 = await users.createUsers("Matthew","Mercer","11/08/1992","42", "Wallaby Way", "NY", "06388","2314567890", "mattmercer@stevens.edu","MattMercer","Marisha");
    console.log("User 10 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try {
      pharma1 = await pharmacies.createPharmacy("ABC Medicos" , "567 50th St" , "North Bergen" , "NJ", "07307",[    "Advil",    "Acetaminophen",    "Cyclobenzaprine"  ]);
      console.log("Pharma 1 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  try {
      pharma2 = await pharmacies.createPharmacy("PQR Medicos" , "62 Comic Way" , "Jersey City" , "NJ", "04630", [    "Advil",    "Ibuprofen"  ]);
      console.log("Pharma 2 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  try {
      pharma3 = await pharmacies.createPharmacy("EFG Medicos" , "67 Riverview Street" , "Hoboken" , "NJ", "07390", [    "Adderall",    "Disprin",    "Cyclobenzaprine"  ]);
      console.log("Pharma 3 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  try {
      pharma4 = await pharmacies.createPharmacy("JKL Medicos" , "43 Central Ave" , "Jersey City" , "NJ", "07307", [    "Advil",    "Cyclobenzaprine",    "Disprin"  ]);
      console.log("Pharma 4 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  try {
      pharma5 = await pharmacies.createPharmacy("MNO Medicos" , "12 Washington Ave" , "Hoboken" , "NJ", "07307", [    "Ibuprofen",    "Cyclobenzaprine"  ]);
      console.log("Pharma 5 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  try {
      pharma6 = await pharmacies.createPharmacy("TUV Medicos" , "45 Lawson St" , "Union City" , "NJ", "07193", [    "Advil",    "Viagra"  ]);
      console.log("Pharma 6 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  try {
      pharma7 = await pharmacies.createPharmacy("XYZ Medicos" , "11 Gerrard Way" , "Union City" , "NJ", "07307", [    "Disprin",    "Advil",    "Viagra",     "Ibuprofen",    "Cyclobenzaprine",    "Adderall" ]);
      console.log("Pharma 7 inserted succesfully");
    } catch (error) {
      console.log(error);
  } 
  
  try {
      pharma8 = await pharmacies.createPharmacy("AEI Medicos" , "13 Micheal St" , "Jacksonville" , "NY", "07307", [    "Advil",    "Xanax"  ]);
      console.log("Pharma 8 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  try {
      pharma9 = await pharmacies.createPharmacy("FGH Medicos" , "40 6th St" , "North Bergen" , "NJ", "06193", [    "Adderall",    "Viagra",     "Acetaminophen"  ]);
      console.log("Pharma 9 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  try {
      pharma10 = await pharmacies.createPharmacy("DEF Medicos" , "10A" , "Wallaby Way" , "NY", "06388", [    "Advil",    "Disprin",    "Xanax"  ]);
      console.log("Pharma 10 inserted succesfully");
    } catch (error) {
      console.log(error);
  }
  
  let pharmacyCollection = await pharmaData();
  let stuffs = await pharmacyCollection.find({}).toArray();

  try{
    await reviews.createReview_p(stuffs[0]._id.toString(),"Fast",4);
    console.log(stuffs[0].Reviews);
  }catch(error){

    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[1]._id.toString(),"It's ok ",3);
  }catch(error){
    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[2]._id.toString(),"I get Adderall and Disprin from here all the time. They even keep a pack aside for me.",4);
  }catch(error){
    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[3]._id.toString(),"Lot of variety",5);
  }catch(error){
    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[4]._id.toString(),"Delivery Guy was very nice",4);
  }catch(error){
    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[5]._id.toString(),"Very sloww",2);
  }catch(error){
    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[6]._id.toString(),"They have everythin",5);
  }catch(error){
    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[7]._id.toString(),"Good delivery speed",3);
  }catch(error){
    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[8]._id.toString(),"ok delivery",2);
  }catch(error){
    console.log(error);
  }
  
  try{
    await reviews.createReview_p(stuffs[9]._id.toString(),"Delayed ordered by 3 days then cancelled",1);
  }catch(error){
    console.log(error);
  }
  
  
  let doctorCollection = await doctor();
  let posts = await doctorCollection.find({}).toArray();
  
  try{  
    await reviews.createReview(posts[0]._id.toString(),"Rude guy",1);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[2]._id.toString(),"Seemed very inconclusive",2);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[1]._id.toString(),"Super helpful and happy to explain all my doubts!",4);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[6]._id.toString(),"Best in the industry",5);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[6]._id.toString(),"I'm in love",5);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[6]._id.toString(),"Fixed both my split ends and broken heart",5);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[6]._id.toString(),"-1 because he seems too perfect to be human",4);
  }catch(error){
    console.log(error);
  }
 
  try{  
    await reviews.createReview(posts[3]._id.toString(),"Made us wait 25 mins on an ONLINE APPOINTMENT",1);
  }catch(error){
    console.log(error);
  }

  try{  
    await reviews.createReview(posts[5]._id.toString(),"Good diagnosis but kept talking to the point where it got annoying",3);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[4]._id.toString(),"OK doctor",3);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[7]._id.toString(),"Helpful",4);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[8]._id.toString(),"Passionate",5);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[9]._id.toString(),"Talks very loudly",4);
  }catch(error){
    console.log(error);
  }
console.log("-------------------------------------------------------------------------------------------");

console.log("Test Case 1 : Getting All Users : ")

  console.log("Getting Doctor Whose Speciality is Orthopedics: ")
  try{  
    let data = await user.getAll();
    console.log(data);
  }catch(error){
    console.log(error);
  }
  console.log("Test Case 2 : Getting All Doctors : ")
 try{  
    let data = await doctors.getAllDoctor();
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("Test Case 3 : Getting All Pharmacies : ")
  try{  
    let data = await pharmacies.getAll();
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("-------------------------------------------------------------------------------------------");

  console.log("Test Case 4 : Getting Doctor By Speciality : ")

  console.log("Getting Doctor Whose Speciality is Orthopedics: ")
  try{  
    let data = await doctors.getDoctorBySpec("Orthopedics");
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("Getting Doctor Whose Speciality is Oncology: ")
  try{  
    let data = await doctors.getDoctorBySpec("Oncology");
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("-------------------------------------------------------------------------------------------");
  
  console.log("Test Case 5 : Getting Doctor By Name : ")
  
  console.log("Getting Doctor Whose Name is Neha: ")
  try{  
    let data = await doctors.getDoctorBySpec("Neha");
    console.log(data);
  }catch(error){
    console.log(error);
  }
  console.log("Getting Doctor Whose Name is Kartik: ")
  try{  
    let data = await doctors.getDoctorBySpec("Kartik");
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("-------------------------------------------------------------------------------------------");

  console.log("Test Case 6 : Getting Doctor By Name: ")
  
  console.log("Getting Doctor Whose Name is Neha: ")
  try{  
    let data = await doctors.getDoctorBySpec("Neha");
    console.log(data);
  }catch(error){
    console.log(error);
  }
  console.log("Getting Doctor Whose Name is Kartik: ")
  try{  
    let data = await doctors.getDoctorBySpec("Kartik");
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("-------------------------------------------------------------------------------------------");

  console.log("Test Case 7 : Getting Pharamacies By zipcode: ")
  
  console.log("Getting Pharmacies at zip code : 07307 ")
  try{  
    let data = await pharmacies.getZip("07307");
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("Getting Pharmacies at zip code : 04630 ")

  try{  
    let data = await pharmacies.getZip("04630");
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("-------------------------------------------------------------------------------------------");

  console.log("Test Case 8 : Getting Pharamacies By Medicines: ")
  
  console.log("Getting Pharmacies having medicine : Ibuprofen ")
  try{  
    let data = await pharmacies.getMeds("Ibuprofen");
    console.log(data);
  }catch(error){
    console.log(error);
  }

  console.log("Getting Pharmacies having medicine : Disprin ")

  try{  
    let data = await pharmacies.getMeds("Disprin");
    console.log(data);
  }catch(error){
    console.log(error);
  }

  // console.log("Test Case 6 : Getting Rating Of Chemist: ")
  
  // console.log("Getting Chemist rating of  : DEF Medicos ")
  // try{  
  //   let data = await reviews.overall_rating("DEF Medicos");
  //   console.log(data);
  // }catch(error){
  //   console.log(error);
  // }

  // console.log("Getting Chemist rating of  : JKL Medicos ")

  // try{  
  //   let data = await reviews.overall_rating("JKL Medicos");
  //   console.log(data);
  // }catch(error){
  //   console.log(error);
  // }

 
};
main()
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    connection.closeConnection();
  });