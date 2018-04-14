const chai = require('chai');
require('mocha');
const mongoose = require('mongoose');
const supertest = require('supertest');
const { expect, assert } = chai;

const app = require('./app');

const request = supertest(app);

describe('Test user create', () => {
  it('should return 200, when first run', (done) => {
    request
      .post('/users')
      .send({
        name: 'tianyu',
      })
      .expect(200)
      .end((err, res) => {
        expect(err).not.exist;
        done(err);
      });
  });

  after(() => {
    mongoose.disconnect();
  });
});