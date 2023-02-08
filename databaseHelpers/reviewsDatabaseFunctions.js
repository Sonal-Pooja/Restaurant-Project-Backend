const reviewsDB = require('../models/reviews').reviews

function getReviews(res, result){
   reviewsDB.find()
   .lean()
   .then((result) => {return res.json(result)})
   .catch((err) => {
    console.log(err)
    return res.json({error:err})})
}

function addReviews(data,res){

    const newReview = new reviewsDB
    newReview.name = data.name
    newReview.rating = data.rating
    newReview.message = data.message

    newReview.save(function(err,result){
        if(err){
            console.log(err)
            return res.json({error:err})
        }

        return res.json({status:"SUCCESS",message:`Review added successfully.`})
    })
    
}

module.exports = {getReviews, addReviews}