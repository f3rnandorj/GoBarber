import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init (
      {                                  // so entram as que o usuario preenche
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;

  }

  static associate (models) {             //relacionamento entre tabelas
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default File;
