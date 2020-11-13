import {getUMSUserData, getUserAppData} from "../utils/cache";

export const UserData = {
    data() {
        return {
            user_id: null,
            role: '',
            first_name: null,
            email: null,
            country: null,
            last_name: null,
            role_id: '',
            city: null,
            id: null,
            phone: null,
            created_by: null,
            expert_ums_id: null
        }
    },
    mounted() {
        const user = getUMSUserData();
        const user_app = getUserAppData();
        if (user && user_app) {
            this.user_id = user.user_id;
            this.first_name = user.first_name;
            this.email = user.email;
            this.country = user.country;
            this.last_name = user.last_name;
            this.phone= user.phone;
            this.city = user.city;
            this.role = (user_app.application_role.name).toLowerCase();
            this.role_id = user_app.application_role.role_id;
            this.id = user.user_id;
            this.created_by = user_app.created_by;
            this.expert_ums_id = user_app.expert_ums_id;
        } else {
            return {
                user_id: 1,
                role: 'admin',
                first_name: null,
                last_name: null,
                role_id: '',
                city: null,
                email: null,
                country: null,
                id: null,
                created_by: null,
                expert_ums_id: null,
                length: null,
            }
        }
    }
};
