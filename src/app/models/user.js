import {Model} from 'sequelize';

class user extends Model {
  static init(sequelize) {
    super.init (
      {                                  // so entram as que o usuario preenche
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default user;
