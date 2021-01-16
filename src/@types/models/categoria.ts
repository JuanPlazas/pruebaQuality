import { Model } from 'sequelize';

export default class Categoria extends Model {
  id_categoria: string;
  nombre: string;
  descripcion: string;
}
