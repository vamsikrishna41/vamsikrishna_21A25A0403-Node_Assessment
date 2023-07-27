
var nodemailer=require('nodemailer');
//declare another variable-create transport
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'vamsikrishnabathula41@gmail.com',
        pass:'Gmail@123'
    }
});
    var mailOptions={
        from:'vamsikrishnabathula41@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'21A25A0403',
        text:'21A25A0403'
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
        }
        else{
            console.log('email sents'+info.response);
        }
    });
