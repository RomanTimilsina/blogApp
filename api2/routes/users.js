const router = require("express").Router()
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')

//UPDATE
router.put('/:id', async (req, res) => {
    try {
        if (req.body.userId === req.params.id) {
        if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPass  
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            {new: true}
        )
        console.log(updatedUser)
        const { password, ...others } = updatedUser._doc
        res.status(200).json(others)
        }
    } catch (err) {
        res.status(500).json(err)
    }
} )

//DELETE
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
    try {
        await Post.deleteMany({userId: req.body.userId})
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    } catch(err) {
        res.status(500).json(err)
    }
    } else {
        res.status(500).json("You can delete only your own account.")
    }
})

//GET
router.get('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const {password, ...others} = user._doc
            res.status(200).json(others)
        } catch(err) {
            res.status(500).json("You can delete only your own account.")
        }
    }
    })

module.exports = router