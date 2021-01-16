import { DataTypes, Sequelize } from 'sequelize';

import Detalle from '../@types/models/detalle';

export default (sequelize: Sequelize) => {

  Detalle.init({
    num_detalle: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    id_factura: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    id_product: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    cantidad: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    precio: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
  }, {
    sequelize,
    createdAt: 'created_at',
    modelName: 'detalle',
    tableName: 'detalle',
    updatedAt: 'updated_at',
  });

  return Detalle;
};
