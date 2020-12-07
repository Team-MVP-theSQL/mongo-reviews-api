let Reviews = require('../db/Reviews.js');
let db = require('../db/');

let controller = {
  getAll: (req, res) => {
    Reviews.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  deleteAll: (req, res) => {
    Reviews.deleteMany({})
      .then(() => {
        res.status(200).send('Deleted all entries');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  post: (req, res) => {
    Reviews.create(req.body)
      .then(() => {
        res.status(200).send('Entry posted');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getShoeReviews: (req, res) => {
    Reviews.find({ shoeid: req.params.shoeid })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getOneReview: (req, res) => {
    Reviews.findOne({ _id: req.params.id })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  put: (req, res) => {
    Reviews.updateOne({ _id: req.params.id }, req.body )
      .then(() => {
        res.status(200).send('Entry updated');
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  deleteOne: (req, res) => {
    Reviews.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).send('Deleted entry');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};

module.exports = controller;