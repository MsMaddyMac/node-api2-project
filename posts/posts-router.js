const express = require('express');

const Posts = require('./db');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ 
            message: 'Error retrieving posts!' 
        });
    });
});

//export default 
module.exports = router;