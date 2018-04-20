import { expect, assert } from 'chai';
import 'mocha';
import * as supertest from 'supertest';
import * as mongoose from 'mongoose';
import app from './app';

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

  it('should return 200, when second run', (done) => {
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