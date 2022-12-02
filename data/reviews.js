const mongoCollections = require('../config/mongoCollections');
const mongocall = require("mongodb");
const {ObjectId} = require('mongodb');
const reviews = mongoCollections.reviews;
const doctors = mongoCollections.doctors;
const pharmacy = mongoCollections.pharmacy;

//Function to review and rating

const overall_rating = async function overall_rating(doctor) {
    const doctorData = await doctors();
    const updatedInfo2 = await doctorData.updateOne({
        _id: ObjectId(doctor._id)}, [{ $set: {Overall_Rating: { $round: [ { $avg: "$Reviews.Rating" }, 1 ] }} }]);

    const doctorL = await doctorData.findOne({_id: ObjectId(doctor._id)});
    return doctorL.Rating;
}
//Function to review and rating for pharmacy
const overall_rating_p = async function overall_rating(chemist) {
    const pharmacyData = await pharmacy();
    const updatedInfo2 = await pharmacyData.updateOne({
        _id: ObjectId(chemist._id)}, [{ $set: {Overall_Rating: { $round: [ { $avg: "$Reviews.Rating" }, 1 ] }} }]);

    const pL = await pharmacyData.findOne({_id: ObjectId(chemist._id)});
    return pL.Rating;
}
//function to create review

async function createReview(doctorId, review_text, rating) {

    if(!doctorId) { throw 'Provided Id is not valid' }
    if(doctorId.length==0) { throw 'Provided Doctor ID cannot be empty' }
    if(typeof doctorId!='string') { throw 'Provided Doctor ID must be a string' }
    
    if(!review_text) { throw 'No Review text was provided' }
    if(review_text.trim(' ').length===0) { throw 'Provided Review Text cannot contain only whitespaces' }
    if(typeof review_text !='string') { throw 'Provided Review Text must be a string' }
    rating=parseInt(rating)
    if(!rating) { throw 'No Rating was provided' }
    if(rating < 1 || rating > 5 ){ throw 'Provided Rating should be in range from 1 to 5' }
    //if(typeof rating!='number') { throw 'Provided Rating must be a number' }
    
    let d_id = ObjectId(doctorId);
    const new_review = {
        _id : ObjectId(), 
        Review_text : review_text,
        Rating: rating
    };
    const getDoctor = await doctors();
    const insertReview = await getDoctor.updateOne({_id : d_id },{ $addToSet: { Reviews: new_review } } );
    if(insertReview.modifiedCount === 0) { 
        throw 'Could not add Review'
    }
    let doctor = await getDoctor.findOne({_id: d_id});
    const avg_rating = await this.overall_rating(doctor);

    if(doctor.Rating !== avg_rating) {
        let create_s = await getDoctor.updateOne({ _id: d_id }, { $set: { Rating: avg_rating.toFixed(1) } });
        if(create_s.modifiedCount === 0) throw 'Could not update rating';
    }
    let doc = await getDoctor.findOne({ _id: d_id });
    
    return doc;
}

//function to create review for pharmacy 
async function createReview_p(pharmacyId, Review_text, Rating){

    const pharmacyInfo = await pharmacy();
    const reviewInfo = {
    _id:ObjectId(),
    Review_text: Review_text,
    Rating: Rating
    };
    
    const insertInfo = await pharmacyInfo.updateOne({_id:ObjectId(pharmacyId)},{$push:{Reviews:reviewInfo}});
    if (!insertInfo.modifiedCount)throw 'Could not add review';

    pharmacyWithReviews = await pharmacyInfo.findOne({ _id: ObjectId(pharmacyId) });
    const avg_rating = await this.overall_rating_p(pharmacyWithReviews);

    if(pharmacyWithReviews.Rating !== avg_rating) {
        let create_s = await pharmacyInfo.updateOne({ _id: ObjectId(pharmacyId) }, { $set: { Rating: avg_rating.toFixed(1) } });
        if(create_s.modifiedCount === 0) throw 'Could not update rating';
    }
    let p = await pharmacyInfo.findOne({ _id: ObjectId(pharmacyId) });
    if(!p) throw 'pharmacy not found';
    p._id = p._id.toString();
    return p;
}
module.exports={ 
    createReview,
    overall_rating,
    createReview_p,
    overall_rating_p
}