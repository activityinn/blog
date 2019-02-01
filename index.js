const Inn = require('activityinn');

// TODO:
// make config or env file for configuration
const inn = new Inn({
  host: 'example.com',
  base_url: '/blog/',
  port: '8000',
  db: Inn.memoryDB(),
});

const {Blog, Post, Category, CategoryPost, Comment , PostLike} = require('./models');
inn.register(Blog);
inn.register(Post);
inn.register(Category);
inn.register(CategoryPost);
inn.register(Comment);
inn.register(PostLike);

inn.start();
