import {gql} from "graphql-tag"

export const ME = gql`
{
    me {
        _id
        username
        email
        books {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`