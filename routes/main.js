const express = require("express");
const router = express.Router();
const mongoCollections=require('../config/mongoCollections');
const usersData = require('../data/main');
const main = mongoCollections.main;
const doctorsData = require('../data/doctors')
const users = mongoCollections.users;
const  xss= require('xss'); // Cross Site Scripting



router.get('/',async(req,res)=>{
    if(!req.session.user){
        res.render('landingPage');
        return;
    }else{
        res.redirect('search');
        return;
    }
});

router.get('/signup', async(req,res)=>{
    if(!req.session.user){
        res.render('signup');
        return;
    }else{
        res.redirect('search');
        return;
    }
});

router.get('/login',async(req,res)=>{
    if(!req.session.user){
        res.render('login');
        return;
    }else{
        res.redirect('search');
        return;
    }
});
router.post('/signup',async(req,res)=>{
    try{
        let fname = xss(req.body.firstName);
        let lname = xss(req.body.lastName);
        let uname = xss(req.body.username);
        let pnumber = xss(req.body.phoneNumber);
        let pass = xss(req.body.password);
        let u_dob = xss(req.body.dob);
        let u_street = xss(req.body.street);
        let u_city = xss(req.body.city);
        let u_state = xss(req.body.state);
        let u_zipcode = xss(req.body.zipCode);
        let u_email = xss(req.body.email);
        uname=uname.toLowerCase();
        
        const u_signup = await usersData.createUsers(fname,lname,u_dob, u_street,u_city,u_state,u_zipcode,pnumber,u_email,uname,pass);
        if(u_signup){
            res.redirect('/login');
        }
        }catch(e){
            res.status(e.error||500).render('signup',{error:e||'Internal Server Error'});
            return;
    }
});

router.post('/login',async(req,res)=>{
    try{
        let u_name = xss(req.body.username);
        let p_sswrd = xss(req.body.password);
        u_name=u_name.toLowerCase();
        
        const getLoggedIn = await usersData.checkUser(u_name,p_sswrd);
        if(getLoggedIn){
            let userCollection = await users()
            req.session.user = {username : u_name};
            const user = await userCollection.findOne({ username: u_name });
            req.session.userId = user._id;
            //console.log(user);
            res.render('search', { userInfo : user });
            return;
        // if (getLoggedIn.authenticated == true) {
		// 	req.session.user = u_name;
		// 	res.render('search');
		} else {
			res.status(400).render('login', {
				errorhandled: 'Invalid username or password',
				hasError: true,
			});
		}
    }catch(e){
        res.status(400).render('login',{error : e });
        return;
    }
});

router.get('/logout',async(req,res)=>{
    req.session.destroy();
    res.redirect('/');
});

module.exports=router;