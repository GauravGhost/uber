const User = require('../models/user')
const UserRepository = require('../repositories/userRepository');
const accessToken = require('../utils/signJwt');
const userRepository = new UserRepository();

const registerService = async (userData) => {
        const isUserExist = await userRepository.getByEmail(userData.email);
        if (isUserExist) {
            throw new Error("User Already Exist!");
        }
        const response = await userRepository.create(userData);
        const token = await accessToken(response);
        return {user: response, token };
}

const loginService = async ({ email, password }) => {
        const user = await userRepository.getByEmail(email);
        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordSame = await user.comparePassword(password);
        if (!isPasswordSame) {
            throw new Error("Invalid email or password");
        }
        const token = await accessToken(user);
        return { token: token };
}


module.exports = {
    registerService,
    loginService
}