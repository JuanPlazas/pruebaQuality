import { DataTypes, Sequelize } from 'sequelize';

import Factura from '../@types/models/factura';

export default (sequelize: Sequelize) => {

  Factura.init({
    num_factura: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    id_cliente: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    fecha: {
      type: new DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    sequelize,
    createdAt: 'created_at',
    modelName: 'facturas',
    tableName: 'facturas',
    updatedAt: 'updated_at',
  });

  return Factura;
};
