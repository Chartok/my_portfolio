// Mutation to add a new project
import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
    mutation AddProject($title: String!, $description: String!, $link: String!, $image: String!) {
        addProject(title: $title, description: $description, link: $link, image: $image) {
            id
            title
            description
            link
            image
        }
    }
`;