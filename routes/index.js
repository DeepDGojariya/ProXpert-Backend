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
const getUsers = require('../controllers/getUsers')
const deleteUser = require('../controllers/deleteUser')
const approveProperty = require('../controllers/approveProperty')

//Declaring the router
const router = express.Router()

//User Routes
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/get-users').get(getUsers)
router.route('/add-property').post(addProperty)
router.route('/get-all-properties').get(getAllProperties)
router.route('/get-a-property/:id').get(getProperty)
router.route('/get-my-property-listings/:username').get(getMyPropertyListings)//used by seller
router.route('/get-owner-info/:id').get(getOwnerInfo)//used by buyer
router.route('/add-enquiry/:id').post(addEnquiry)//used by buyer
router.route('/add-subscription').patch(addSubscription)//Subscription
router.route('/get-enquiries/:id').get(getEnquiries)//used by seller
router.route('/get-my-enquiries/:username').get(getMyEnquiries)//used by buyer:-kaha kaha muh maara hai
router.route('/filter-property').get(getFilteredProperties)
router.route('/delete-my-property/:id').delete(deleteMyProperty)
router.route('/delete-user/:id').delete(deleteUser)
router.route('/approve-property/:id').patch(approveProperty)

module.exports = router