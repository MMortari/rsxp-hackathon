import { Model, DataTypes } from 'sequelize';

class Lesson extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        content: DataTypes.STRING,
        content_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      { sequelize }
    );
  }
}

export default Lesson;
