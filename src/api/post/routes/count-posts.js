module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/posts/count',
      handler: 'post.count',
    }
  ]
}
