import Sequelize from 'sequelize';

import dbConfig from '../../config/database';

import Subject from '../models/Subject';
import Content from '../models/Content';
import Lesson from '../models/Lesson';
import AnswerOptions from '../models/AnswerOptions';

const connection = new Sequelize(dbConfig);

// const models = [Subject, Content, Lesson, AnswerOptions];

Subject.init(connection);
Content.init(connection);
Lesson.init(connection);
AnswerOptions.init(connection);

AnswerOptions.associate(connection.models);
Lesson.associate(connection.models);

// User.associate(connection.models);
// Address.associate(connection.models);
// Tech.associate(connection.models);
export default connection;
