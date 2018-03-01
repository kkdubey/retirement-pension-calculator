import * as express from 'express';

import LifeStyleCtrl from './controllers/lifeStyle';
import UserCtrl from './controllers/user';
import LifeStyle from './models/lifeStyle';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const lifeStyleCtrl = new LifeStyleCtrl();
  const userCtrl = new UserCtrl();

  // lifeStyles
  router.route('/lifeStyles').get(lifeStyleCtrl.getAll);
  router.route('/lifeStyles/count').get(lifeStyleCtrl.count);
  router.route('/lifeStyle').post(lifeStyleCtrl.insert);
  router.route('/lifeStyle/:id').get(lifeStyleCtrl.get);
  router.route('/lifeStyle/:id').put(lifeStyleCtrl.update);
  router.route('/lifeStyle/:id').delete(lifeStyleCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
