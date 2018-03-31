const UserModel = require('../models/UserModel');

const AdminService = {
    getAllUsers() {
        return UserModel
            .find({}, (err, users) => {
                let usersMap = {};
                users.forEach((user) => {
                    usersMap[user.telegramId] = user;
                });
                return usersMap;
        })
    }
};

module.exports = AdminService;