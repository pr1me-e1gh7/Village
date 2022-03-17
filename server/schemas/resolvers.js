const { AuthenticationError } = require(‘apollo-server-express’);
const { User, Post } = require(‘../models’);
const { signToken } = require(‘../utils/auth’);
const resolvers = {
  Query: {
    posts: async () => {
      return Post.find().populate(‘comments’)
    },
    post: async (parent, {postId} ) => {
      return Post.findOne({_id: postId})
    },
    users: async () => {
      return User.find().populate(‘posts’)
    },
    user: async (parent, {userId}) => {
      return User.findOne({_id: userId}).populate(‘posts’)
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError(‘Not logged in’);
    },
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      // await User.findOneAndUpdate(
        //   { username: postAuthor },
        //   { $addToSet: { posts: post._id } }
        // );
        return post;
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError(‘Incorrect credentials’);
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError(‘Incorrect credentials’);
        }
        const token = signToken(user);
        return { token, user };
      }
    }
  };
  module.exports = resolvers;