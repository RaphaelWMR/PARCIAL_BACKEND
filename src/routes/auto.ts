import { Router } from 'express';
import { deleteauto, getAuto, getAutos, postauto, updateauto } from '../controllers/auto';

const router = Router();

router.get('/', getAutos);
router.get('/:id', getAuto);
router.delete('/:id', deleteauto);
router.post('/', postauto);
router.put('/:id', updateauto);
export default router;