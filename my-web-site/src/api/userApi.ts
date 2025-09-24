import api from "../utils/apiConfig.ts";

export const signUp = async (username: any, password: any) => {
    return api.post("/api/users/signup", { username, password });
};