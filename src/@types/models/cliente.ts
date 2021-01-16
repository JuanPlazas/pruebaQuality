import { Model } from 'sequelize';

export default class Cliente extends Model {
  id_cliente: string;
  nombre: string;
  apellido: string;
  direccion: string;
  fecha_nacimiento: Date;
  telefono: string;
  email: string;
}
