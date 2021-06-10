const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.route('/').post(postController.createPost); // /posts
router.route('/:id').get(postController.getPost);
router.route('/:id').delete(postController.deletePost);
router.route('/edit/:id').get(postController.getEditPostPage);
router.route('/edit/:id').put(postController.updatePost);

module.exports = router;
