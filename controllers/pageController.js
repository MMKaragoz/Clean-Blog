const Posts = require('../models/Posts');

exports.getIndexPage = async (req, res) => {
  const posts = await Posts.find({}).sort('-dateCreated');
  res.status(200).render('index', {
    posts,
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about');
};

exports.getAddPostPage = (req, res) => {
  res.status(200).render('add_post');
};
