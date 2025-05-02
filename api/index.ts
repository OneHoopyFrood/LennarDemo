import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type EmailRecord {
    email: String
  }

  type EmailResponse {
    success: Boolean
    message: String
  }

  type Query {
    emails: [EmailRecord]
  }

  type Mutation {
    addEmail(email: String!): EmailResponse
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
    addEmail: (_: unknown, { email }: { email: string }) => {
      const newEmail = { email };

      // Validate email format (simple regex check, not exhaustive)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return {
          success: false,
          message: "Invalid email format",
        };
      }

      // Check for duplicates
      const emailExists = emails.some((e) => e.email === email);
      if (emailExists) {
        return {
          success: false,
          message: "Email already exists",
        };
      }

      // Add email to the list
      emails.push(newEmail);
      return {
        success: true,
        message: "Email added successfully",
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
