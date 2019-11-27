import { Model, DataTypes } from 'sequelize';

class Lesson extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        content: DataTypes.STRING,
        content_id: DataTypes.STRING,
        done: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.AnswerOption, {
      foreignKey: 'lesson_id',
      as: 'answers',
    });
  }
}

export default Lesson;
