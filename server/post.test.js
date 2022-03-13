const axios = require('axios')


test('Retornando posts', async () => {
    const response = await axios({
        url: 'http://localhost:3000/blog/posts',
        method: 'get'
    })

    const posts = response.data

    expect(posts).toHaveLength(2)

    const [firstPost] = posts

    console.log(firstPost);

    expect(firstPost.id).toBe(1)
    expect(firstPost.title).toBe('REST API: O que é?')

})