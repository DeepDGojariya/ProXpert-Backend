//Imports
const express = require('express')
const auth = require('../middleware/jwtauth')
const subscribed = require('../middleware/subscribed')
const register = require('../controllers/register')
const login = require('../controllers/login')
const addProperty = require('../controllers/addProperty')
const getAllProperties = require('../controllers/getAllProperties')
const getProperty = require('../controllers/getProperty')
const getMyPropertyListings = require('../controllers/getMyPropertyListings')
const getOwnerInfo = require('../controllers/getOwnerInfo')
const addEnquiry = require('../controllers/addEnquiry')
const addSubscription = require('../controllers/addSubscription')
const getEnquiries = require('../controllers/getEnquiries')
const getMyEnquiries = require('../controllers/getMyEnquiries')
const getFilteredProperties = require('../controllers/getFilteredProperties')
const deleteMyProperty = require('../controllers/deleteMyProperty')

//Declaring the router
const router = express.Router()

//User Routes
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/add-property').post(auth,addProperty)
router.route('/get-all-properties').get(getAllProperties)
router.route('/get-a-property/:id').get(auth,getProperty)
router.route('/get-my-property-listings/:username').get(auth,getMyPropertyListings)//used by seller
router.route('/get-owner-info/:id').get(auth,getOwnerInfo)//used by buyer
router.route('/add-enquiry/:id').post(auth,subscribed,addEnquiry)//used by buyer
router.route('/add-subscription').patch(auth,addSubscription)//Subscription
router.route('/get-enquiries/:id').get(auth,getEnquiries)//used by seller
router.route('/get-my-enquiries/:username').get(auth,getMyEnquiries)//used by buyer:-kaha kaha muh maara hai
router.route('/filter-property').get(getFilteredProperties)
router.route('/delete-my-property/:id').delete(auth,deleteMyProperty)

module.exports = router