declare interface IDetalle {
  readonly num_detalle: string;
  id_factura?: string;
  id_product?: string;
  cantidad: number;
  precio: number;
};
