const {express, app} = require('../config/server')
const reviewsRouter = express.Router();
const dbMethods = require('../databaseHelpers/reviewsDatabaseFunctions')

reviewsRouter.get('/', (req,res)=>{
    const reviews = req.query
    return dbMethods.getReviews(res,reviews)
})

reviewsRouter.post('/addReview', (req,res)=>{
    return dbMethods.addReviews(req.body,res)
})

module.exports = reviewsRouter;
