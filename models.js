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

module.exports = {
  Blog,
  Post,
}
