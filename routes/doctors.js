const express = require('express');
const router = express.Router();
const data = require("../data");
const doctorData = data.doctors;
const reviewData = require('../data/reviews');
const usersData = data.users;

const xss = require('xss');

router.get('/', async (req, res)=>{
    try{
        res.status(200).render('search', {title: "Dashboard"});
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    }
});

router.get('/userProfile/:id', async (req, res)=>{
    try{
        try {
            const user = await usersData.get(xss(req.params.id));
            console.log(user)
            res.status(200).render('myPage', { title: 'User Details', userInfo: user });     
        } catch (e) { 
            res.status(404).render('error', { class: "error-not-found", message: "No User was found" });
        }
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    }
});
router.get('/phar', async (req, res)=>{
    try{
        res.status(200).render('pharmacy/home', {title: "Dashboard"});
    }
    catch(e){
        console.log(e);
        res.status(500).send();
    }
});

router.post('/searchDoctors', async (req, res) => {
    //const spec = req.body.searchTerm;
        try {  
            const doctorsData  = await doctorData.getDoctorBySpec(xss(req.body.searchTerm));
            if (doctorsData.length == 0) {
                res.render('error', { class: 'not-found', message: "We're sorry, but no results were found" });
                return;                         
            }        
            res.render('doctorlist', { title: "Doctors Found", results: doctorsData })
        } catch (e) {
            res.status(400).json({ error: e });
        }
    
});

router.get('/doctor/:id', async (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(404).render({ class: "error", message: "Invalid ID" });
        return;
    }
    try {
        const doctorsData = await doctorData.getDoctorById(xss(id));
        res.render('showDoctor', { title: 'Doctors Info', Doctor: doctorsData });     
    } catch (e) { 
        res.status(404).render('error', { class: "error-not-found", message: "No Doctor was found for given zip code" });
    }
});
router.post('/r',async(req,res)=>{
    if(!req.session.user){
        res.status(400).redirect('/login');
        return;
    }
    let doctorIdRoutes = xss(req.body.doctorId);
    let review_textRoutes = xss(req.body.review_text);
    let ratingRoutes = xss(req.body.rating);
    if(!doctorIdRoutes){
        res.status(404).render('review',{error:'No Doctor ID was provided'});
        return;
    }
    if(!review_textRoutes){
        res.status(404).render('review',{error:'No Review Text was provided'});
        return;
    }
    if(!ratingRoutes){
        res.status(404).render('review',{error:'No Rating was provided'});
        return;
    }
    if(review_textRoutes.trim(' ').length===0){
        res.status(404).render('review',{error:'Review Text cannot contain only whitespaces'});
        return;
    }
    if(ratingRoutes < 6 || ratingRoutes > 1){
        res.status(404).render('review',{error:'Rating should be in range from 1 to 5'});
        return;
    }
    try{
    const postingReview = await reviewData.createReview(doctorIdRoutes,review_textRoutes,ratingRoutes);
    if(postingReview){
        res.render('doctors/search',{error:'Review Text cannot contain only whitespaces'});
        return;
        // res.redirect('/reviews/post/' + doctorIdRoutes);
    }
    }catch(e){
        res.status(400).render('review',{error:e});
    }
});

router.post('/bookApp/:id',async(req,res)=>{
    const id = req.params.id;
    if (!id) {
        res.status(404).render({ class: "error", message: "Invalid ID" });
        return;
    }
    try {
        const doctorInfo = await doctorData.getDoctorById(xss(id));
        res.render('submitApp', { doc: doctorInfo });     
    } catch (e) { 
        res.status(400).json({ error: e });
    }
   
});
module.exports = router;
