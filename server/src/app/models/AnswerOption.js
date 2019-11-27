import { Model, DataTypes } from 'sequelize';

class AnswerOption extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        input_name: DataTypes.STRING,
        correct: DataTypes.BOOLEAN,
        lesson_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Lesson, {
      foreignKey: 'lesson_id',
      as: 'lesson',
    });
  }
}

export default AnswerOption;
