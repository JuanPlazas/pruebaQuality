import { DataTypes, Sequelize } from 'sequelize';

import Categoria from '../@types/models/categoria';

export default (sequelize: Sequelize) => {

  Categoria.init({
    id_categoria: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  }, {
    sequelize,
    createdAt: 'created_at',
    modelName: 'categoria',
    tableName: 'categoria',
    updatedAt: 'updated_at',
  });

  return Categoria;
};
