const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Quisque porta volutpat erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'Curabitur convallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 10,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
