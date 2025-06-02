const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;
const app = 'http://localhost:3000';

describe('Health Check', () => {
  it('should return 200 OK', (done) => {
    chai.request(app)
      .get('/health')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
