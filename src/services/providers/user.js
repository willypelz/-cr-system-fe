import BaseHandler from '../../handler/base.handler';

class  UserSettingProvider  extends BaseHandler {
	getUserSettings(payload) {
		return this.query('/user-settings/'+payload+'/user');
	}
	getUserSetting(payload) {
		return this.query('/user-settings/'+payload);
	}
	saveUserSetting(payload) {
		return this.post('/user-settings',payload)
	}
	deleteUserSetting(payload) {
		return this.delete('/user-settings/'+payload)
	}
	editUserSetting(payload) {
		return this.put('/user-settings/'+payload.id,payload)
	}
}

export default UserSettingProvider;