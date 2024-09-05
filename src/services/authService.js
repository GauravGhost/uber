const User = require('../models/user')
const UserRepository = require('../repositories/userRepository');
const accessToken = require('../utils/signJwt');
const userRepository = new UserRepository();

const registerService = async (userData) => {
    try {
        const isUserExist = await userRepository.getByEmail(userData.email);
        if (isUserExist) {
            throw new Error("User Already Exist!");
        }
        const response = await userRepository.create(userData);
        const token = await accessToken(response);
        return { ...response, token };
    } catch (error) {
        throw new Error(error);
    }
}

const loginService = async ({ email, password }) => {
    try {
        const user = await userRepository.getByEmail(email);
        if (!user) {
            throw new Error("Invalid email or password")
        }

        const isPasswordSame = await User.comparePassword(password);
        if (!isPasswordSame) {
            throw new Error("Invalid email or password")
        }
        const token = accessToken(user);
        return { token: token };
    } catch (error) {
        throw new Error("Something Went Wrong")
    }

}


module.exports = {
    registerService,
    loginService
}