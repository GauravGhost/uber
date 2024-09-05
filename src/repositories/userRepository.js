const CrudRepository = require('./crudRepository')
const User = require('../models/user')
class UserRepository extends CrudRepository {
    constructor() {
        super(User)
    }
    async getByEmail(email) {
        try {
            const result = await User.findOne({ email: email });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = UserRepository;