const { Post } = require('../models');

const postdata = [
  {
    title: 'Top HTML tips',
    post_con: 'My top HTML tips are listed on order of usefulness below.',
    user_id: 1
  },
  {
    title: 'How to develop in JavaScript',
    post_con: 'Developing in javascript can be very tough but definitely worth taking the time to learn',
    user_id: 2
  },
  {
    title: 'Learn SQL in 10 days',
    post_con: 'SQL is a very applicable database software to quickly sort though information',
    user_id: 1
  },
  {
    title: 'Backend vs Frontend',
    post_con: 'The client side coding process differs greatly from server side work.',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
