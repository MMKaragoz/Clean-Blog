const Posts = require('../models/Posts');

exports.createPost = async (req, res) => {
  await Posts.create(req.body);

  res.redirect('/');
};

exports.getPost = async (req, res) => {
  const post = await Posts.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.deletePost = async (req, res) => {
  await Posts.findByIdAndRemove(req.params.id);

  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const post = await Posts.findById(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect('/');
};

exports.getEditPostPage = async (req, res) => {
  const post = await Posts.findById(req.params.id);
  res.render('edit', {
    post,
  });
};
