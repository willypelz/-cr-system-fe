import BaseHandler from '../../handler/base.handler';

class CompanyProvider extends BaseHandler {
  createCompany(payload) {
    return this.post('/companies', payload)
  }

  getCompanies() {
    return this.get('/companies')
  }
  getCompanyActivatedReview(slug) {
    return this.get(`/companies/${slug}/reviews/active`);
  }
  getCompany(slug) {
    return this.get('/companies/' + slug)
  }

  deleteCompany(slug) {
    return this.delete('/companies/' + slug)
  }
}

export default CompanyProvider;
