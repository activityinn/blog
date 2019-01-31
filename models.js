const models = require('activityinn').models;
const BaseModel = models.BaseModel;

class Blog extends BaseModel{
  constructor(){
    this.addField('title', models.STRING(128));
    this.addField('master', models.relation.foreignkey(models.Actor))
    super();
  }
}

class Post extends BaseModel{
  constructor(){
    super();

    this.addField('title', models.STRING(128));

    this.addField('actor', models.relation.foreignkey(models.Actor));

    this.addField('body', models.TEXT);

    this.addField('createdAt', models.DATETIME);
    this.addField('updatedAt', models.DATETIME);

    this.addField('views', models.NUMBER);
    this.addField('published', models.BOOLEAN);

    this.addField('blog', models.relation.foreignkey(Blog));

		this.addField('comment', models.relation.foreignkey(Comment)); 

    this.setBaseName('post');
  }
};

class Comment extends BaseModel{
  constructor(){
    super();

    this.addField('userId', models.relation.foreignkey(models.Actor));

		// TODO:
		// comment can be made under a post or under another comment.
		// Moreover, commets can be handled like a mastodon toot.
		// Needs to be strudied further.
    this.addField('postId', models.relation.foreignkey(Post));
		
		// TODO: decide about length of comment
		this.addField('text', models.STRING(1024));
  }
}


class Category extends BaseModel{
  constructor(){
    super();

    this.addField('type', models.STRING(64));
    this.addField('desctiption', models.STRING(128));
  }
}

class CategoryPost extends BaseModel{
  constructor(){
    super();

    this.addField('categoryId', models.relation.foreignkey(Category));
    this.addField('postId', models.relation.foreignkey(Post));
  }
}

class PostLike extends BaseModel{
  constructor(){
    super();

		// TODO:
		// Liking a post would be completely similar to liking a Mastodon toot.
		// Needs to be studied further

    this.addField('userId', models.relation.foreignkey(models.Actor));
    this.addField('postId', models.relation.foreignkey(Post));
    this.addField('createdAt', models.DATETIME);
  }
}

module.exports = {
  Blog,
  Post,
  Comment,
  Category,
  CategoryPost,
  PostLike,
}
