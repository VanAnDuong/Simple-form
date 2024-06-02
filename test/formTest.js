const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Form Submission Tests', function() {
    let server;

    it('should start and respond to the GET method', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should handle form submissions correctly', function(done) {
        const testData = {
            name: 'John Doe',
            password: '12345',
            feedback: 'Great service!',
            contact: 'Email'
        };
    
        chai.request(app)
            .post('/feedback')
            .type('form')
            .send(testData)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.include(`<span style="color: blue;">${testData.name}</span>`); // Checking embedded name
                expect(res.text).to.include(`<span style="color: blue;">${testData.feedback}</span>`); // Checking embedded feedback
                expect(res.text).to.include('We appreciate your feedback'); // Checking static content
                done();
            });
    });
    
});


