const BaseModel = require('activityinn').BaseModel;

class Blog extends BaseModel{
  constructor(){
    this.addField('title', inn.STRING(128));
    this.addField('master', inn.relation.foreignkey(inn.Actor))
    super();
  }
}

class Post extends BaseModel{
  constructor(){
    super();

    this.addField('title', inn.STRING(128));

    this.addField('actor', inn.relation.foreignkey(inn.Actor));

    this.addField('body', inn.TEXT);

    this.addField('createdAt', inn.DATETIME);
    this.addField('updatedAt', inn.DATETIME);

    this.addField('views', inn.NUMBER);
    this.addField('published', inn.BOOLEAN);

    this.addField('blog', inn.relation.foreignkey(Blog));

    this.setBaseName('post');
  }
};

module.exports = {
  Blog,
  Post,
}
