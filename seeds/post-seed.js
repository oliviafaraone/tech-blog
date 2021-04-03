const { Post } = require('../models');

const postdata = [
  {
    title: 'Top HTML tips',
    post_url: 'https://htmltips.com/',
    user_id: 1
  },
  {
    title: 'How to develop in JavaScript',
    post_url: 'https://javacript.gov/',
    user_id: 2
  },
  {
    title: 'Learn SQL in 10 days',
    post_url: 'https://sql.eu/',
    user_id: 1
  },
  {
    title: 'Backend vs Frontend',
    post_url: 'http://fullstack.cn/',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
