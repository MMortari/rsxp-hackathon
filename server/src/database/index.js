import Sequelize from 'sequelize';

import Subject from '../app/models/Subject';
import Content from '../app/models/Content';
import Lesson from '../app/models/Lesson';
import AnswerOption from '../app/models/AnswerOption';

import databaseConfig from '../config/database';

const models = [Subject, Content, Lesson, AnswerOption];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
