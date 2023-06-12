import {gql} from "graphql-tag"

export const LOGIN = gql`
mutation login($email: String, $password: String){
    login(email: $email, password: $password){
        token
        user{
            username
            _id
        }
    }
}


`

export const ADDUSER = gql`
mutation addUser($username: String, $email: String, $password: String) {
    token
    user {
        username
        _id
    }
}
`

export const SAVEBOOK = gql`
mutation saveBook($authors: [String], $description: String, $title: String, $bookId: ID, 
    $image: String, $link: String) {
        _id
        username
        books{ 
            bookId
            authors
            description
            title
            image
            link
        }
    }
`

export const REMOVEBOOK = gql`
mutation removeBook($authors: [String], $description: String, $title: String, $bookId: ID, 
    $image: String, $link: String) {
        _id
        username
        books{ 
            bookId
            authors
            description
            title
            image
            link
        }
    }
`