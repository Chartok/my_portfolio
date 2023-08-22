// Query to fetch all projects
import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            id
            title
            description
            link
            image
        }
    }
`;
