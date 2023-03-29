const express = require('express');
const controller = require('../controllers/tradeController');

const router = express.Router();

// GET /trades: send all trades to the user
router.get('/', controller.index);

// GET /trades/new: send html form for creating a new trade
router.get('/new', controller.new);

// POST /trades: create a new trade
router.post('/', controller.create);

// GET /trades/:id: send details of trade identified by id
router.get('/:id', controller.show);

// GET /stories/:id/edit: send html form for updating an existing story
router.get('/:id/edit', controller.edit);

// PUT /trades/:id: update a story identified by id
router.put('/:id', controller.update);

// DELETE /stories/:id: delete the story identified by id
router.delete('/:id', controller.delete);

module.exports = router;