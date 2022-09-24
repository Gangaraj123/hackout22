const expres = require('express');
const User = require('../Models/User');
const brcypt = require('bcrypt') // for encryption
const router = expres.Router();
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET;


router.post('/login', (req, res) => {

    const { mobile, password } = req.body;

    // find user with entered email
    let user = await User.findOne({ mobile:mobile});
    if (!user) {
        res.json({ success: false, message: "Invalid login" })
    }
    else {
        // compare both the passwords
        const passCompaare = await brcypt.compare(password, user.password);
        if (!passCompaare) {
            res.json({ success: false, message: "Invalid login" })
        }
        else {
            const data = {
                user: {
                    id: user.id,
                 }
            }
            // send an authorisation token
            const authtoken = jwt.sign(data, secret);
            res.json({ success: true, authtoken: authtoken })
        }
    }
})


router.post('/signup', (req, res) => {
    
    // finding user
    let user=await User.findOne({mobile:req.body.mobile})
    if (user) {
        res.json({ success: false, message: "Mobile number already exists" })
    }
    else {
        const salt = await brcypt.genSalt(10);
        const secPass = await brcypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            mobile: req.body.mobile
        });
        const data = {
            user: {
                id: user.id
            }
        }
        //sending authtoken
        const authtoken = jwt.sign(data, secret);
        res.json({ success: true, authtoken: authtoken })
    }
})

module.exports = router;

