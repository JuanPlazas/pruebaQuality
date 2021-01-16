import { DataTypes, Sequelize } from 'sequelize';

import Producto from '../@types/models/producto';

export default (sequelize: Sequelize) => {
  Producto.init({
    id_producto: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    precio: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    stock: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    id_categoria: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  }, {
    sequelize,
    createdAt: 'created_at',
    modelName: 'producto',
    tableName: 'producto',
    updatedAt: 'updated_at',
  });

  return Producto;
};
