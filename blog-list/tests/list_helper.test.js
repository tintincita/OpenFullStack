const listHelper = require('../utils/list_helper')
const Blog = require('./list_samples')


describe('dummy', () => {
  test('dummy returns one', () => {
    const result = listHelper.dummy(Blog.noBlogs)
    expect(result).toBe(1)
  })
})

describe('total likes', () => {
  test('when list has no blog equals the likes of that', () => {
    const result = listHelper.totalLikes(Blog.noBlogs)
    expect(result).toBe(0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(Blog.listWithOneBlog)
    expect(result).toBe(5)
  })

  test('returns total number of likes for all blog posts', () => {
    const result = listHelper.totalLikes(Blog.blogs)
    expect(result).toBe(36)
  })
})

describe('returns most liked blog', () => {
  test('when list has no blog equals null', () => {
    const result = listHelper.favoriteBlog(Blog.noBlogs)
    expect(result).toBe(null)
  })

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.favoriteBlog(Blog.listWithOneBlog)
    expect(result).toEqual({
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5,
    })
  })

  test('when list has many blogs equals the most liked blog of that', () => {
    const result = listHelper.favoriteBlog(Blog.blogs)
    expect(result).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    })
  })
})

describe('returns author with largest amount of blogs', () => {
  test('when list has no blog equals null', () => {
    const result = listHelper.mostBlogs(Blog.noBlogs)
    expect(result).toBe(null)
  })

  test('when list has only one blog equals the author of that', () => {
    const result = listHelper.mostBlogs(Blog.listWithOneBlog)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      blogs: 1,
    })
  })

  test('when list has many blogs equals the right author', () => {
    const result = listHelper.mostBlogs(Blog.blogs)
    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3,
    })
  })
})

describe('returns author with largest amount of likes', () => {
  test('when list has no blog equals null', () => {
    const result = listHelper.mostLikes(Blog.noBlogs)
    expect(result).toBe(null)
  })

  test('when list has only one blog equals the author of that', () => {
    const result = listHelper.mostLikes(Blog.listWithOneBlog)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 5,
    })
  })

  test('when list has many blogs equals the right author', () => {
    const result = listHelper.mostLikes(Blog.blogs)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17,
    })
  })
})
