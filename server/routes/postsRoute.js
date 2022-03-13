const express = require('express')
const router = express.Router()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

const postsService = require('../service/postsService')

router.get('/' , async (req , res) => {
    res.send('Minha API')
})


router.get('/posts', async (req, res) => {
    const post = await postsService.getPosts();
    res.json(post)
})

router.use('/api-docs' , swaggerUi.serve)


router.get('/')
router.get('/posts/:id')
router.get('/api-docs', swaggerUi.setup(swaggerDocument))
router.post('/posts')
router.put('/posts/:id')
router.delete('/posts/:id')


module.exports = router