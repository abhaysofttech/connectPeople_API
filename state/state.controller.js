const express = require('express');
const router = express.Router();
const stateService = require('./state.service');

//routes
router.get('/', getAll);

function getAll(req, res, next) {
    stateService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}
module.exports = router;