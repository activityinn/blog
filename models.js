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

		this.addField('firstName', inn.STRING(64));
		this.addField('lastName', inn.STRING(64));
		this.addField('email', inn.STRING(64));
		this.addField('password', inn.STRING(128));
	}
}

class Roles extends BaseModel{
	constructor(){
		super();

		this.addField('name', inn.STRING(64));
		this.addField('desctiption', inn.STRING(128));
	}
}

class UserRoles extends BaseModel{
	constructor(){
		super();

		this.addField('userId', inn.relation.foreignkey(inn.User));
		this.addField('roleId', inn.relation.foreignkey(inn.Roles));
	}
}

class Comments extends BaseModel{
	constructor(){
		super();

		this.addField('userId', inn.relation.foreignkey(inn.User));
		this.addField('postId', inn.relation.foreignkey(inn.Post));
		this.addField('text', inn.STRING(1024));
	}
}


class Categories extends BaseModel{
	constructor(){
		super();

		this.addField('type', inn.STRING(64));
		this.addField('desctiption', inn.STRING(128));
	}
}

class CategoriesPost extends BaseModel{
	constructor(){
		super();

		this.addField('categoryId', inn.relation.foreignkey(inn.Categories));
		this.addField('postId', inn.relation.foreignkey(inn.Post));
	}
}

class PostLikes extends BaseModel{
	constructor(){
		super();

		this.addField('userId', inn.relation.foreignkey(inn.User));
		this.addField('postId', inn.relation.foreignkey(inn.Post));
    this.addField('createdAt', inn.DATETIME);
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
