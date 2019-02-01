const Inn = require('activityinn');

const inn = new Inn({
  host: 'example.com',
  base_url: '/blog/',
  port: '8000',
  db: Inn.memoryDB(),
});

const {Blog, Post} = require('./models');
inn.register(Blog);
inn.register(Post);

inn.start();
