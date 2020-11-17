import BaseHandler from '../../handler/base.handler';

class  ReviewProvider  extends BaseHandler {
	createReview(payload) {
    return this.post(`/companies/${payload.key}/reviews`,  payload)
  }
  updateReview(payload) {
    return this.put(`/companies/${payload.slug}/reviews/${payload.id}`,  payload)
  }
  deleteReview(payload) {
    return this.delete(`/companies/${payload.slug}/reviews`)
  }

}

export default ReviewProvider;
