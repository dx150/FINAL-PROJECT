const express = require('express');
const connectDB = require('./Config/connectDB');
const adminRouter = require('./routes/adminRouter');
const authRecruteurRouter = require('./routes/authRecruterRouter');
const authUserRouter = require('./routes/authUserRouter');
const candidatRouter = require('./routes/candidatRouter');
const guestRouter = require('./routes/guestRouter');
const recruteurRouter = require('./routes/recruterRouter');
const app = express()
port = process.env.PORT || 5000; 


//db connection
connectDB();

//middleware
app.use(express.json())
app.use('/api/authUser',authUserRouter) 
app.use('/api/authRec',authRecruteurRouter)
app.use('/api/accountUser',candidatRouter)
app.use('/api/allJobs',candidatRouter)
app.use('/api/accountRec',recruteurRouter)
app.use('/api/admin',adminRouter)
app.use('/api/guest',guestRouter) 



app.listen(port,console.log(`server is up and running on http://localhost:${port}`))