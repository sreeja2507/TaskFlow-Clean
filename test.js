const chai = require('chai');
let chaiHttp;

try {
    // Try importing the module as a function (CJS style)
    chaiHttp = require('chai-http');
    if (typeof chaiHttp !== 'function') {
        chaiHttp = chaiHttp.default;
    }
} catch (err) {
    console.error('Failed to load chai-http:', err);
}

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

