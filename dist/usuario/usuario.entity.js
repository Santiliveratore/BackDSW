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
import { Localidad } from "../localidad/localidad.entity.js";
export let Usuario = class Usuario {
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Usuario.prototype, "apellido", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Usuario.prototype, "contrase\u00F1a", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
__decorate([
    ManyToOne(() => Localidad, { eager: true, fieldName: 'id_localidad' }),
    __metadata("design:type", Localidad)
], Usuario.prototype, "localidad", void 0);
Usuario = __decorate([
    Entity()
], Usuario);
//# sourceMappingURL=usuario.entity.js.map