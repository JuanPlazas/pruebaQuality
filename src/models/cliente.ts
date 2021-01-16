import { DataTypes, Model, Sequelize } from 'sequelize';

import Cliente from '../@types/models/cliente';

export default (sequelize: Sequelize) => {

  Cliente.init({
    id_cliente: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    apellido: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    direccion: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    fecha_nacimiento: {
      type: new DataTypes.DATEONLY,
      allowNull: false,
    },
    telefono: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
    {
      sequelize,
      createdAt: 'created_at',
      modelName: 'cliente',
      tableName: 'cliente',
      updatedAt: 'updated_at',
    });

  return Cliente;
};
