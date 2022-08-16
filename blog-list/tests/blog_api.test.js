const supertest = require('supertest')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const helper = require('./list_samples')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blogs')
const User = require('../models/user')

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.blogs)
})


describe('BLOGS:', () => {

  test('are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('are all loaded', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(helper.blogs.length)
  })

  test('a valid blog can be added', async () => {
    const newBlog = {
      title: 'Testing Blog',
      author: 'Iluvatar',
      url:
        'http://www.iluvatar.org',
      likes: 5
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.blogs.length + 1)

    const contents = blogsAtEnd.map(n => n.author)
    expect(contents).toContain('Iluvatar')
  })

  test('a specific blog can be viewed', async () => {
    const blogsAtStart = await helper.blogsInDb()

    const blogToView = blogsAtStart[0]

    const resultBlog = await api
      .get(`/api/blogs/${blogToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const processedBlogToView = JSON.parse(JSON.stringify(blogToView))

    expect(resultBlog.body).toEqual(processedBlogToView)

  })

  test('a specific blog can be deleted', async () => {
    const blogsAtStart = await helper.blogsInDb()

    const blogToDelete = blogsAtStart[0]

    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.blogs.length - 1)

    const titles = blogsAtEnd.map(r => r.title)
    expect(titles).not.toContain(blogToDelete.title)

  })

  test('have a unique identifier named "id"', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })

  test('are assigned 0 likes if "likes" property is missing from request', async () => {
    const newBlog = {
      title: 'Example blog title',
      author: 'John Doe',
      url: 'http://www.example.com',
    }

    const response = await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.blogs.length + 1)

    expect(response.body.likes).toBe(0)
  })

  test('only blogs with title and url can be added', async () => {
    const newBlog = {
      author: 'Somebody'
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.blogs.length)
  })

  test('can update likes of individual post', async () => {
    const allBlogsInDb = await helper.blogsInDb()
    const blogToBeUpdated = allBlogsInDb[0]
    const updatedData = {
      likes: 100
    }
    const updatedBlog = await api
      .put(`/api/blogs/${blogToBeUpdated.id}`)
      .send(updatedData)
      .expect(200)

    expect(updatedBlog.body.likes).toBe(updatedData.likes)
  })

})

afterAll(() => {
  mongoose.connection.close()
})