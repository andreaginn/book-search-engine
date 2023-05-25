const { Book, User } = require('../models');
const {signToken} = require("../utils/auth")
const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
           return {user, token};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({email});
            const token = signToken(user);
            return {user, token};
        },
        saveBook: async (parent, bookData, context) => {
            const userUpdated = await User.findOneAndUpdate(
                {_id: context.user._id}, 
                {$push: {savedBooks: bookData}},
                {new: true}
            );
            return userUpdated;
        },
        removeBook: async (parent, { _id, techNum }) => {
            const userUpdated = await User.findOneAndUpdate(
                {_id: context.user._id}, 
                {$pull: {savedBooks: bookData}},
            );
            return updatedUser;
        },
    },
};

module.exports = resolvers;
