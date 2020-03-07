import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'
import deepEqualInAnyOrder from 'deep-equal-in-any-order'

chai.use(chaiHttp)
chai.use(deepEqualInAnyOrder)
chai.should()

const CATEGORY = {
  name: 'test category',
  description: 'lorem ipsum dolor et',
  imageUrl: '',
  slug: 'test-category'
}

describe('categories', () => {
  describe('POST /categories', () => {
    it('Should create a category', done => {
      chai
        .request('http://localhost:3000')
        .post('/categories')
        .send(CATEGORY)
        .end((err, res) => {
          if (err) throw new Error("Can't create a category")
          expect(res).to.have.status(200)
          expect(res.body).to.be.a('object')

          const {id, ...rest} = res.body
          expect(id).to.be.a('string')
          expect(rest).to.deep.equalInAnyOrder(CATEGORY)

          done()
        })
    })

    // test also api error
  })
})
