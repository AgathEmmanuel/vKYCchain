const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const User=require('./models/user')
const jwt=require('jsonwebtoken')


app.use(cors())

app.use(express.json())


var dbConfig={
  url: "mongodb://localhost:27017/consortiumDb",
  user: "consortiumUser",
  pwd: "consortiumPassword",
};

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    user: dbConfig.user,
    pass: dbConfig.pwd,
  })
  .then(() => {
        console.log(`Mongodb is up`)
        console.log("successfully connected to the database");
  })
  .catch((err) => {
    console.log("error connecting to the database");
    console.log(err.stack);
    console.log(err.name);
    console.log(err.message);
    process.exit();
  });

app.post('/api/signup',async(req, res)=> {
    //res.send('testing endpoint')
    console.log(req.body)
    console.log(req.body.fullName)
    console.log(req.body.bankEmail)
    console.log(req.body.newPassword)
    console.log(req.body.employeeId)
    try {
        const user= await User.create({
            fullName: req.body.fullName,
            bankEmail: req.body.bankEmail,
            newPassword: req.body.newPassword,
            employeeId: req.body.employeeId,
        })
        res.json({ status: 'ok'})
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Email already in use'})
    }
})

app.post('/api/login',async (req, res)=> {
    //res.send('testing endpoint')
    console.log(req.body)
    const user=await User.findOne({ 
            bankEmail: req.body.bankEmail,
            newPassword: req.body.newPassword,
        })
        if(user) {
            const token=jwt.sign({
                bankEmail: req.body.bankEmail,
            },'111111111222222223333333')
            return res.json({ status: 'ok', user: true, tkn: token})
        }else {
            return res.json({ status: 'error', user: false})
        }
})



app.listen(1330,()=>{
    console.log("testing listening")
})