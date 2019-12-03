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

// client makes POST request to add a post to the database
router.post('/', (req, res) => {
    const newPost = req.body;

    if (!newPost.title || !newPost.contents) {
        res
            .status(400)
            .json({ errorMessage: 'Please provide title and contents for the post.' })
    } else {
        Posts
            .insert(newPost)
            .then (post => {
                res.status(201)
                .json(post);
        })
        .catch(err => {
            console.log('error on POST /posts', err)
            res.status(500)
            .json({ error: 'There was an error while saving the post to the database.' })
        })
    }
})

// ****SUB ROUTES****
// client makes GET request to retrieve all comments on a specific post
router.get('/:id/comments', (req, res) => {
    const postID = req.params.id;

    Posts.findPostComments(postID)
    .then(comments => {
        if (postID.length === 0 ) {
            res.status(404).json({ message: 'The post with the specified ID does not exist.' })
        } 
        if (comments.length === 0) {
            res.status(400).json({ errorMessage: 'No comments here.' });
        } else {
            res.status(200).json(comments);
        }  
    })
    .catch(err => {
        console.log('Comments could not be retrieved', err);
        res.status(500).json({ error: 'The comments information could not be retrieved.' })
    })
})

//export default 
module.exports = router;