const router = require("express").Router()
const User = require('../models/User')
const Post = require('../models/Post')

//CREATE POST
router.post('/', async (req, res) => {
    try {
        const newPost = new Post(req.body)

        const post = await newPost.save()
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
} )

//UPDATE POST
router.put('/:id', async (req, res) => {
    try {
    const post = await Post.findById(req.params.id)
    if (req.body.userId === post.userId ) {
        try {
            const savedPost = await Post.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            { new: true }
        )
        res.status(200).json(savedPost)
        } catch (err) {
            res.status(500).json("Cant update")
        }
        
    } else {
        res.status(500).json("You can update only your own post")
    }
    } catch(err) {
        res.status(500).json(err)
    }
})

//DELETE POST
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (req.body.userId === post.userId) {
            await Post.deleteOne({ _id: req.params.id })
            res.status(200).json("Deleted.")
        } else {
            res.status(500).json("You can update only your own post")
        }
    } catch(err) {
            res.status(500).json(err)
    }
    })

//GET POST
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        res.status(200).json(post)
    } catch(err) {
        res.status(500).json("You can update only your own post")
    }
})

//GET ALL POST
router.get('/', async (req, res) => {
    const username = req.query.username
    const cat = req.query.cat
    try {
        let posts;

        if (username) {
        posts = await Post.find({username})
        } else if (cat){
        posts = await Post.find({categories: {$in:[cat]}})

        } else {
        posts = await Post.find()
        }

        res.status(200).json(posts)
    } catch(err) {
        res.status(500).json("You can update only your own post")
    }
})

module.exports = router