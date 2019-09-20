const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');

router.get("/", (req, res) => {
<<<<<<< HEAD
  let itemId = req.body.itemId;
  Review.find({ itemId: itemId })
=======
	let itemId = req.query.itemId;
	Review.find({itemId: itemId})
>>>>>>> c939c950303dfacbd5d88bbc22d1a919e2616331
    .sort({ date: -1 })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noReviewsFound: "No reviews found" }));
});

router.get("/:id", (req, res) => {
  Review.find({itemId: req.params.itemId})
    .sort({ date: -1 })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noReviewsFound: "No reviews found" }));
});

// create a review
router.post('/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		debugger;
		const newReview = new Review({
			rating: req.body.rating,
			userId: req.user.id,
			itemId: req.body.itemId,
			title: req.body.title,
			comment: req.body.comment
		});

		newReview
			.save()
			.then(review => res.json(review));
	});

module.exports = router;