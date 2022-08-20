// build your `/api/projects` router here
const router = require('express').Router()

const Projects = require('./model');

router.get('/', async (req, res) => {
    const result = await Projects.getAll();
    res.json(result);
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the projects router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router