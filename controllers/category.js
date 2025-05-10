// import ....
//const express = require('express')
//const router = express.Router()


exports.create = async (req, res) => {
    try {
        res.send("Hello in Category Create ")
    } catch (err) {
        //err
        console.log(err)
        res.status(500).json({ message: "Server Error in 500 โปรดตรวจสอบ" })
    }
},
exports.list = async (req, res) => {
    try {
        res.send("Hello in category list")
    } catch (err) {
        //err
        console.log(err)
        res.status(500).json({ message: "Server Error in 500 โปรดตรวจสอบ" })
    }
},
exports.remove = async (req, res) => {
    try {
        console.log(req.params.id)
        res.send("Hello in Category remove")
    } catch (err) {
        //err
        console.log(err)
        res.status(500).json({ message: "Server Error in 500 โปรดตรวจสอบ" })
    }
}

