import { Model } from 'sequelize';

class Detalle extends Model {
  num_detalle: string;
  id_factura?: string;
  id_product?: string;
  cantidad: number;
  precio: number;
}

export default Detalle;
