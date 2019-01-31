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

    this.setBaseName('post');
  }
};

class User extends BaseModel{
  constructor(){
    super();

    this.addField('firstName', models.STRING(64));
    this.addField('lastName', models.STRING(64));
    this.addField('email', models.STRING(64));
    this.addField('password', models.STRING(128));
  }
}

class Roles extends BaseModel{
  constructor(){
    super();

    this.addField('name', models.STRING(64));
    this.addField('desctiption', models.STRING(128));
  }
}

class UserRoles extends BaseModel{
  constructor(){
    super();

    this.addField('userId', models.relation.foreignkey(models.User));
    this.addField('roleId', models.relation.foreignkey(models.Roles));
  }
}

class Comments extends BaseModel{
  constructor(){
    super();

    this.addField('userId', models.relation.foreignkey(models.User));
    this.addField('postId', models.relation.foreignkey(models.Post));
    this.addField('text', models.STRING(1024));
  }
}


class Categories extends BaseModel{
  constructor(){
    super();

    this.addField('type', models.STRING(64));
    this.addField('desctiption', models.STRING(128));
  }
}

class CategoriesPost extends BaseModel{
  constructor(){
    super();

    this.addField('categoryId', models.relation.foreignkey(models.Categories));
    this.addField('postId', models.relation.foreignkey(models.Post));
  }
}

class PostLikes extends BaseModel{
  constructor(){
    super();

    this.addField('userId', models.relation.foreignkey(models.User));
    this.addField('postId', models.relation.foreignkey(models.Post));
    this.addField('createdAt', models.DATETIME);
  }
}

module.exports = {
  Blog,
  Post,
  User,
  Roles,
  UserRoles,
  Comments,
  Categories,
  CategoriesPost,
  PostLikes,
}
