const express = require('express');
require('dotenv').config({ path: './.env' });
require('./Config/Db');
const app = express();
const bodyParser = require('body-parser');
const UserRoute = require('./Routes/UserRoute');
const TaskRoute = require('./Routes/TaskRoute');
const StatusRoute = require('./Routes/StatusRoute');
const priorityRouter = require('./Routes/PriorityRoute');
// const authenticateToken = require('./middleware/authentification');
const  {checkUser, Authentify, verify} = require('./middleware/authentification')
const cors = require('cors');


// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:true, credentials: true}));
app.use(express.static('Public')) 

app.get('/verify' , verify, async (req,res) => {
    return res.json('authorizied ')
})
// app.get('/auth', Authentify, (req,res)=>{
//     res.status(200).json(res.locals.user._id)
// })
app.get('/', (req, res) => {
    res.send('Hello World from Server')
})

app.use('/user', UserRoute);
app.use('/task', TaskRoute);
app.use('/status', StatusRoute);
app.use('/priority', priorityRouter);



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})