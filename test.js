const chai = require('chai');
const chaiHttp = require('chai-http');

// ✅ DO NOT do: chai.use(chaiHttp.default || chaiHttp);
// ✅ DO NOT do: chai.use(chaiHttp);
chai.use(require('chai-http')); // ← This is the clean way that works in all environments

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
