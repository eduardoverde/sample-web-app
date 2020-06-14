export interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  categoryCode?: string;
  active?: boolean;
  price?: number;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public categoryCode?: string,
    public active?: boolean,
    public price?: number
  ) {
    this.active = this.active || false;
  }
}
