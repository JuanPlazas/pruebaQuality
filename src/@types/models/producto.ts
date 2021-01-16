import { Model } from 'sequelize';

export default class Producto extends Model {
  id_producto: string;
  nombre: string;
  precio: number;
  stock: number;
  id_categoria: string;
}
