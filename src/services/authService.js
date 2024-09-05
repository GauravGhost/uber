const User = require('../models/user')
const UserRepository = require('../repositories/userRepository')
const UserRepository = new UserRepository();

const registerService = async (userData) => {
    try {
        const isUserExist = await authRepository.getByEmail(userData.email);
        if (isUserExist) {
            throw new Error("User Already Exist!");
        }
        const response = await authRepository.create(userData);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

const loginService = async ({ email, password }) => {
    try {
        const isUserExist = await authRepository.getByEmail(email);
        if (!isUserExist) {
            throw new Error("Invalid email or password")
        }

        const isPasswordSame = await User.comparePassword(password);
        if (!isPasswordSame) {
            throw new Error("Invalid email or password")
        }
        return true;
    } catch (error) {
        throw new Error("Something Went Wrong")
    }

}


module.exports = {
    registerService,
    loginService
}