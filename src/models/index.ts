// Modules
import { Op, Sequelize } from 'sequelize';

// Models
import Cliente from './cliente';
import Factura from './factura';
import Detalle from './detalle';
import Producto from './producto';
import Categoria from './categoria';

// Constants
import config from '../config';

const sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
  dialect: 'mysql',
  host: config.DB_HOST,
  logging: true,
  pool: {
    max: Number(config.POOL_MAX),
    min: Number(config.POOL_MIN),
    acquire: 30000,
    idle: 10000,
  },
  port: config.DB_PORT,
});

const db = {
  sequelize,
  Sequelize,
  Op,
  Cliente: Cliente(sequelize),
  Factura: Factura(sequelize),
  Detalle: Detalle(sequelize),
  Producto: Producto(sequelize),
  Categoria: Categoria(sequelize),
};

export default db;
