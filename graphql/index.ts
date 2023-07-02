export const getUserQuery = `
    query GetUser($email: String!) {
        user(by: { email: $email }) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkInUrl
        }
    }
`;

export const createUserQuery = `
    mutation CreateUser($input: CreateUserInput!) {
        userCreate(input: $input) {
            user {
                name
                email
                avatarUrl
                description
                githubUrl
                linkInUrl
                id
            }
        }
    }
`;
