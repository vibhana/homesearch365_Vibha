const express = require('express');

const router = express.Router();

const HouseInventoryByZip = require('../models/HouseInventoryByZip');
const User = require('../models/User');

// Routes

// Getting all
router.get('/HouseInventoryByZip', (req, res) => {
    var qname = req.query.addressCity || "";
    if(!qname.length) {
      res.status(404).json({"msg": 'Invalid City in query string'});
      res.end();
      return;
    }
    HouseInventoryByZip.find({addressCity:qname})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.get('/', async (req, res) => {
    try {
      res.header('Cache-Control', 'no-cache, no-store, must-revalidate','Access-Control-Allow-Origin')
      const users = await User.find()
      res.json(users)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })
  

router.get('/User', (req, res) => {

    User.find({Name:'Vibha'})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.post('/save', (req, res) => {

    const user = new User({Name:'abc', Address:'xyz'});

    user.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;