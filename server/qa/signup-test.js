'use strict';

const request = require('supertest'),
      mocha = require('mocha'),
      expect = require('Chai').expect;

describe('POST /signup', () => {

  let url = 'http://localhost:3003';
  let user = {
    email: 'jonsnow@knowsnothing.org'
  };

  it('should response with status of 201 for successful signup POST operation', (done) => {
    request(url)
      .post('/user/signup')
      .send(user)
      .expect(201, done);
  });

  it('should create a new user on POST /user/signup', (done) => {
    request(url)
      .post('/user/signup')
      .send(user)
      .expect(201)
      .end((err, res) => {
        if (err) console.error(err);
        expect(res.body).to.be.an('object');
        expect(res.body.email).to.equal('jonsnow@knowsnothing.org');
        done();
      })
  });

});

describe('POST /signin', () => {
  let url = 'http://localhost:3003';
  let user = {
    email: 'trump2016@whitehouse.gov'
  };

  it('should respond with status of 202 for successful signin POST operation', (done) => {
    request(url)
      .post('/user/signin')
      .send(user)
      .expect(202, done);
  });

});
