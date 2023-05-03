const express = require('express')
const UserControllers = require('../controllers/tache')
const router = express.Router();

router.get('/', UserControllers.findAll);
router.get('/searchtache', UserControllers.searchtache);
router.get('/:id', UserControllers.findOne);
router.post('/', UserControllers.create);
router.patch('/:id', UserControllers.update);
router.delete('/:id', UserControllers.destroy);

module.exports = router;
