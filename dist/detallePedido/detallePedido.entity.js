var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
//import { Pedido } from "../pedido/pedido.entity.js";
import { Producto } from "../producto/producto.entity.js";
// Usa una clase intermediaria
let PedidoClass;
export let DetallePedido = class DetallePedido {
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], DetallePedido.prototype, "id", void 0);
__decorate([
    Property(),
    __metadata("design:type", Number)
], DetallePedido.prototype, "cantidad", void 0);
__decorate([
    ManyToOne(() => Producto, { eager: true, fieldName: 'id_producto' }),
    __metadata("design:type", Producto)
], DetallePedido.prototype, "producto", void 0);
__decorate([
    ManyToOne(() => PedidoClass, { eager: true, fieldName: 'id_pedido' }),
    __metadata("design:type", Object)
], DetallePedido.prototype, "pedido", void 0);
DetallePedido = __decorate([
    Entity()
], DetallePedido);
// Después del bloque de código, carga la clase, hice esto porque me daba un error que no lo pude solucionar de ninguna forma
import('../pedido/pedido.entity.js').then(mod => {
    PedidoClass = mod.Pedido;
});
//# sourceMappingURL=detallePedido.entity.js.map