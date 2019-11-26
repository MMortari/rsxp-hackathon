import { Model, DataTypes } from 'sequelize';

class Subject extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        color: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      { sequelize }
    );
  }
}

export default Subject;
