import { getUserData} from "../util/cache";

export const UserData = {
    data() {
        return {
            user_id: null,
            role: '',
            first_name: null,
            email: null,
        }
    },
    mounted() {
        const user = getUserData();
        if (user) {
            this.user_id = user.user_id;
            this.first_name = user.first_name;
            this.email = user.email;
        }
    }
};
