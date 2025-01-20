import { orm } from '../shared/db/orm.js';
import { DetallePedido } from './detallePedido.entity.js';
const em = orm.em;
async function findAll(req, res) {
    try {
        const detalle_pedidos = await em.find(DetallePedido, {});
        res.status(200).json({ message: 'find all detalle_pedidos', data: detalle_pedidos });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function findOne(req, res) {
    try {
        const id = Number.parseInt(req.params.id);
        const detalle_pedido = await em.findOneOrFail(DetallePedido, { id });
        res.status(200).json({ message: 'detalle_pedido encontrado', data: detalle_pedido });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function add(req, res) {
    try {
        const detalle_pedido = em.create(DetallePedido, req.body);
        await em.flush();
        res.status(201).json({ message: 'detalle_pedido creado', data: detalle_pedido });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function update(req, res) {
    try {
        const id = Number.parseInt(req.params.id);
        const detalle_pedido = em.getReference(DetallePedido, id);
        em.assign(detalle_pedido, req.body);
        await em.flush();
        res.status(200).json({ message: 'detalle_pedido actualizado' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function remove(req, res) {
    try {
        const id = Number.parseInt(req.params.id);
        const detalle_pedido = em.getReference(DetallePedido, id);
        await em.removeAndFlush(detalle_pedido);
        res.status(204).send({ message: 'detalle_pedido eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export { findAll, findOne, add, update, remove };
//# sourceMappingURL=detallePedido.controller.js.map