const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({_id: context.user._id});
            }
        },
    },

    Mutation: {
        addUser: async (_, {username, email, password}) => {
            const user = await User.create({username, email, password});
            console.log(user);
            const token = signToken(user);
          
            return {token, user};
        },

        login: async (_, {username, email, password}) => {
            const user = await User.findOne({ $or: [{ username: username }, { email: email }] });

            if (!user) {
                console.log("error: no user")
                return;
            }

            const correctPw = await user.isCorrectPassword(password);
            console.log(correctPw);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return {token, user};
        },
        saveBook: async (parent, {bookId, title, description, authors, image, link }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    {
                        _id: context.user._id
                    },
                    {
                        $addToSet: {
                            savedBooks: { bookId: bookId, title: title, description: description, authors: authors, image: image, link: link},
                        },
                    },
                    {new: true, runValidators: true},
                );
            }
        },

        removeBook: async (parent, {bookId}, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: {bookId: bookId }}},
                    { new: true }
                );
            }
        },
    },
};

module.exports = resolvers;