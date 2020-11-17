import UserProvider from "./providers/user";
import CompanyProvider from "./providers/company";
import ReviewProvider from "./providers/review";

export const UserService = new UserProvider();
export const CompanyService = new CompanyProvider();
export const ReviewService = new ReviewProvider();

