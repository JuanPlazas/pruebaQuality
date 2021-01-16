import { Model } from 'sequelize';

class Factura extends Model {
  num_factura: string;
  id_cliente: string;
  fecha: Date;
}

export default Factura;
