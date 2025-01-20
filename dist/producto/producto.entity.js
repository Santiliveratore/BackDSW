var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { Categoria } from "../categoria/categoria.entity.js";
import { Tipo_producto } from "../tipo_producto/tipo_producto.entity.js";
export let Producto = class Producto {
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    Property(),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Producto.prototype, "foto", void 0);
__decorate([
    ManyToOne(() => Categoria, { eager: true, fieldName: 'id_categoria' }),
    __metadata("design:type", Categoria)
], Producto.prototype, "categoria", void 0);
__decorate([
    ManyToOne(() => Tipo_producto, { eager: true, fieldName: 'id_tipo_producto' }),
    __metadata("design:type", Tipo_producto)
], Producto.prototype, "tipo", void 0);
Producto = __decorate([
    Entity()
], Producto);
//# sourceMappingURL=producto.entity.js.map