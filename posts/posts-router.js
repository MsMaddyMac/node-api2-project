const express = require('express');

const Posts = require('./db');

const router = express.Router();

router.use(express.json());

// gets an array of posts contained in the database.
router.get('/', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ 
            message: 'The posts information could not be retrieved!' 
        });
    });
});

// gets post object by specified ID
router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
    .then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'The post with the specified ID does not exist.' })
        }
    })
    .catch(err => {
        console.log('ID not valid', err);
        res.status(500).json({ error: 'The post information could not be retrieved.' });
    });
})

//export default 
module.exports = router;