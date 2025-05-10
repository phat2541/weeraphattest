const express = require('express')
const router = express.Router()


exports.register = async (req, res) => {
  try {
    //code
    const { email, password } = req.body

    // step 1 
    if(!email){
        return res.status(400).json({ message : " email is required !!!"})

    }
    if(!password){
      return res.status(400).json({ message: " Password is Required !!!"})
    }

      // step2  chack email  in DB already !!


    console.log(email, password)
    res.send('Hello Register in Controller')
    //code
  } catch (err) {
    // err
    console.log(err)
    res.status(500).json({ message: "Server Error in 500 โปรดตรวจสอบ" })
  }
}

exports.login = async (req, res) => {
  try {
    //code
    res.send('Hello Login in Controllers')
  } catch (err) {
    // err
    console.log(err)
    res.status(500).json({ message: "Server Error in 500 โปรดตรวจสอบ" })
  }
}

exports.currentUser = async (req, res) => {
  try {
    //code 
    res.send('Hello Current User')
  } catch (err) {
    //err
    console.log(err)
    res.status(500).json({ message: "Server Error in 500 โปรดตรวจสอบ" })
  }
}

