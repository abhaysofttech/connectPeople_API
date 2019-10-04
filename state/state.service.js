const config = require('config.json');
const db = require('_helpers/db');
const State = db.State;


module.exports = {
    getAll
}

async function getAll() {
    return await State.find().select('-hash');
}