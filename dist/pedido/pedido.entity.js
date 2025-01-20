var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, Cascade } from "@mikro-orm/core";
import { Usuario } from "../usuario/usuario.entity.js";
import { DetallePedido } from "../detallePedido/detallePedido.entity.js";
export let Pedido = class Pedido {
    constructor() {
        this.detalles = new Collection(this);
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    Property(),
    __metadata("design:type", Date)
], Pedido.prototype, "fecha", void 0);
__decorate([
    Property(),
    __metadata("design:type", Number)
], Pedido.prototype, "monto", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Pedido.prototype, "estado", void 0);
__decorate([
    ManyToOne(() => Usuario, { eager: true, fieldName: 'id_usuario' }),
    __metadata("design:type", Usuario)
], Pedido.prototype, "usuario", void 0);
__decorate([
    OneToMany(() => DetallePedido, detallePedido => detallePedido.pedido, { cascade: [Cascade.REMOVE] }),
    __metadata("design:type", Object)
], Pedido.prototype, "detalles", void 0);
Pedido = __decorate([
    Entity()
], Pedido);
//# sourceMappingURL=pedido.entity.js.map