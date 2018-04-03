export class Cart {
    id?: string; //iddelcarrito
    uid: string; //iddelusuario, un usuario solo tiene un carrito, no tiene sentido que tenga 20 carritos
    products?: Array<any> = []; //arraydeunproductos
    totalProducts: number = 0;
    constructor() {}
  }
  