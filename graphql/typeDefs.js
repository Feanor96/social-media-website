const gql = require('graphql-tag');

module.exports = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        comments: [Comment]!
        likes: [Like]!
        likeCount: Int!
        commentCount: Int!
    }

    type Comment {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }

    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }

    type Query { 
        getPosts: [Post]
        getPost(postId: ID!): Post!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComment(postId: ID!, body: String!): Comment!
        deleteComment(postId: ID!, commentId: ID!): String!
        likePost(postId: ID!): Like!
    }


`