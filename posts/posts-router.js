const express = require('express');

const Posts = require('./db');

const router = express.Router();

router.use(express.json());

// client makes GET request to retrieve an array of posts contained in the database.
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

// client makes GET request to retrieve post object by specified ID
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
// ****SUB ROUTES****
// client makes GET request to retrieve all comments on a specific post
router.get('/:id/comments', (req, res) => {
    const postID = req.params.id;

    Posts.findPostComments(postID)
    .then(comments => {
        if (!postID) {
            res.status(404).json({ message: 'The post with the specified ID does not exist.' })
        } else {
            res.status(200).json(comments)
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'The comments information could not be retrieved.' })
    })
})

//export default 
module.exports = router;