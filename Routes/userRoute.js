// const { Hollywood, Food, Bollywood, Technology, Fitness } = require("../controller/Details");
const {allData}=require('../controller/Details')
const {register,login,aboutus,contactus} = require("../controller/user");
const userRoute = require("express").Router();
const {AllRoutes,specificRoutes}=require('../middleware/auth');

// userRoute.use(AllRoutes);

userRoute.post('/register',register);
userRoute.post('/login',login)
userRoute.get('/aboutus',aboutus)
userRoute.get('/contactus',contactus)

userRoute.get('/allData',allData);


module.exports = userRoute;