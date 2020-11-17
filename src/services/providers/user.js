import BaseHandler from '../../handler/base.handler';

class  UserProvider  extends BaseHandler {
	register(payload) {
		return this.post('/users',  payload)
	}
  login(payload) {
    return this.post('/users/login',  payload)
  }
}

export default UserProvider;
