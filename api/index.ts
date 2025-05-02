import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Email {
    email: String
  }

  type Query {
    emails: [Email]
  }

  type Mutation {
    addEmail(email: String!): Email
  }
`;

const emails = [
  {
    email: "example@example.com",
  },
];

const resolvers = {
  Query: {
    emails: () => emails,
  },
  Mutation: {
    addEmail: (_, { email }: { email: string }) => {
      const newEmail = { email };

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");
      }
      // Check for duplicates
      const emailExists = emails.some((e) => e.email === email);
      if (emailExists) {
        throw new Error("Email already exists");
      }

      // Add email to the list
      emails.push(newEmail);
      return newEmail;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
