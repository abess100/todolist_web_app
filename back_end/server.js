const express = require('express');
require('dotenv').config({ path: './.env' });
require('./Config/Db');
const app = express();
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser');

const  {checkUser, Authentify, verify} = require('./middleware/authentification')
const UserRoute = require('./Routes/UserRoute');
const TaskRoute = require('./Routes/TaskRoute');
const StatusRoute = require('./Routes/StatusRoute');
const priorityRouter = require('./Routes/PriorityRoute');
const cors = require('cors');


// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:true, credentials: true}));
app.use(express.static('Public')) 
app.use(cookieparser())

// auth verification
app.get('*', checkUser)
app.get('/jwtid', Authentify, (req,res) => {
    res.status(200).json({status: 'success', id: res.locals.user._id})
})

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