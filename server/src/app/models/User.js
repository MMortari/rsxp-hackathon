import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        age: DataTypes.NUMBER,
      },
      { sequelize }
    );
  }
}

export default User;
