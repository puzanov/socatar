const supertest = require('supertest')

const app = require('./../src/index.js')

module.exports = async function notFoundImages (t, source) {
  const res = await supertest(app)
    .get(`/${source}/definiteryWrongUserIdHere`)

  t.is(res.statusCode, 404)
}
