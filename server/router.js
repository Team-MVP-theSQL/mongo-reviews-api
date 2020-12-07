let router = require('express').Router();
let controller = require('./controller.js');

router.route('/reviews')
  .get(controller.getAll)
  .delete(controller.deleteAll)
  .post(controller.post);

router.route('/reviews/:shoeid')
  .get(controller.getShoeReviews);

router.route('/review/:id')
  .get(controller.getOneReview)
  .put(controller.put)
  .delete(controller.deleteOne);

module.exports = router;