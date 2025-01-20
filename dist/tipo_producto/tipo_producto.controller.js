import { orm } from '../shared/db/orm.js';
import { Tipo_producto } from './tipo_producto.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const tipo_productos = await em.find(Tipo_producto, {});
        res.status(200).json({ message: 'fin all tipos productos', data: tipo_productos });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const id = Number.parseInt(req.params.id);
        const tipo_producto = await em.findOneOrFail(Tipo_producto, { id });
        res.status(200).json({ message: 'tipo producto encontrado', data: tipo_producto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const tipo_producto = em.create(Tipo_producto, req.body);
        await em.flush();
        res.status(201).json({ message: 'tipo producto creado', data: tipo_producto });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const id = Number.parseInt(req.params.id);
        const tipo_producto = em.getReference(Tipo_producto, id);
        em.assign(tipo_producto, req.body);
        await em.flush();
        res.status(200).json({ message: 'tipo producto actualizado' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function remove(req, res) {
    try {
        const id = Number.parseInt(req.params.id);
        const tipo_producto = em.getReference(Tipo_producto, id);
        await em.removeAndFlush(tipo_producto);
        res.status(204).send({ message: 'tipo producto eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=tipo_producto.controller.js.map