import Sequelize from 'sequelize';

import dbConfig from '../../config/database';

import Subject from '../models/Subject';
import Content from '../models/Content';
import Lesson from '../models/Lesson';

const connection = new Sequelize(dbConfig);

const models = [Subject, Content, Lesson];

models.forEach(model => model.init(connection));

// User.associate(connection.models);
// Address.associate(connection.models);
// Tech.associate(connection.models);

module.exports = connection;
