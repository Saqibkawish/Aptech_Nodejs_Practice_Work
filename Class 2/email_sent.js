let node_mailer = require('nodemailer');
require("dotenv").config()

let Email_Info = node_mailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASS
    }
})

let Email_Body = {
    to : [ "shaikhsahabzindabad@gmail.com","muhammadahmedraza16@gmail.com","zain.1235890a@gmail.com.","hunainhassan247@gmail.com","ma7506363@gmail.com",],
    from : process.env.EMAIL,
    subject : "RAMZAN LEAVE",
    html : "<h1>  Sb form fill krdo last 10 days ki choti ky lye  </h1> "

}

Email_Info.sendMail(Email_Body , function(error , info){
    if(error){
        console.log("Some thing Went Wrong")
        console.log(error)
    }else{
        console.log(`Email has been Sent to ${Email_Body.TO} with subject ${Email_Body.subject}`)
        console.log(info)
    }
})