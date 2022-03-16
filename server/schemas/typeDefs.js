const { gql } = require('apollo-server-express');

const typeDefs = gql`
 
  type Post {
    _id: ID
    postAuthor: String
    postText: String
    createdAt: String
    mood: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String

  }

 

  type User {
    _id: ID
    email: String
    username: String
    password: String
    posts: [Post]
  }

 

  type Auth {
    token: ID
    user: User
  }

  type Query {
    posts: [Post]
    post(postId: ID!): Post 
    user(userId: ID!): User
  }

  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    addPost(postText: String, mood: String!): Post
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
