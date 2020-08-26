export class Product
{
    id:string;
    nombre:string;
    sku:string;
    descripcion:string;
    precio:string;
    constructor(nombre,sku,descripcion,precio){
        this.id ="not set"
        this.nombre = nombre;
        this.sku =  sku;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}