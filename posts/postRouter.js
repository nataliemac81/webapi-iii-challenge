const express = require('express');

const router = express.Router();

const db = require('./postDb')

router.get('/', (req, res) => {
	db.get()
  .then(posts => {
		res.status(200).json(posts)
  })
  .catch(err => {
		res.status(500).json({
			err: err,
			message: "The posts information could not be retrieved."
		})
  }) 
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;