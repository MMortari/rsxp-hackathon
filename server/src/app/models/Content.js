import { Model, DataTypes } from 'sequelize';

class Content extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        grade: DataTypes.STRING,
        subject_id: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      { sequelize }
    );

    return this;
  }
}

export default Content;
