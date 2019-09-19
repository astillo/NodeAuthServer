const db = require('../data/dbConfig.js')

module.exports = {
    add,
    findBy,
    findById,
    find,
    findDep,
}

function find() {
    return db('users').select('id', 'username', 'department')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(id) {
    return db('users').where({ id }).first()
}

function findDep(filter) {
    return db('users').where(filter).select('*')
}


async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}