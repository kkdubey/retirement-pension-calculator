import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import LifeStyle from '../models/lifeStyle';

const should = chai.use(chaiHttp).should();

describe('LifeStyles', () => {

  beforeEach(done => {
    LifeStyle.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for LifeStyles', () => {

    it('should get all the lifeStyles', done => {
      chai.request(app)
        .get('/api/lifeStyles')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get lifeStyles count', done => {
      chai.request(app)
        .get('/api/lifeStyles/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new lifeStyle', done => {
      const lifeStyle = new LifeStyle({ name: 'Fluffy', weight: 4, age: 2 });
      chai.request(app)
        .post('/api/lifeStyle')
        .send(lifeStyle)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('name');
          res.body.should.have.a.property('weight');
          res.body.should.have.a.property('age');
          done();
        });
    });

    it('should get a lifeStyle by its id', done => {
      const lifeStyle = new LifeStyle({ name: 'LifeStyle', weight: 2, age: 4 });
      lifeStyle.save((error, newLifeStyle) => {
        chai.request(app)
          .get(`/api/lifeStyle/${newLifeStyle.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('weight');
            res.body.should.have.property('age');
            res.body.should.have.property('_id').eql(newLifeStyle.id);
            done();
          });
      });
    });

    it('should update a lifeStyle by its id', done => {
      const lifeStyle = new LifeStyle({ name: 'LifeStyle', weight: 2, age: 4 });
      lifeStyle.save((error, newLifeStyle) => {
        chai.request(app)
          .put(`/api/lifeStyle/${newLifeStyle.id}`)
          .send({ weight: 5 })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a lifeStyle by its id', done => {
      const lifeStyle = new LifeStyle({ name: 'LifeStyle', weight: 2, age: 4 });
      lifeStyle.save((error, newLifeStyle) => {
        chai.request(app)
          .delete(`/api/lifeStyle/${newLifeStyle.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});


