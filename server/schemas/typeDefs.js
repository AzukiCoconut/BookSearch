const typeDefs = `
type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String, email: String, password: String!): Auth

    saveBook(userId: String!, authors: [String]!, description: String!, bookId: String!, image: String, link: String!, title: String! ): User
    removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;