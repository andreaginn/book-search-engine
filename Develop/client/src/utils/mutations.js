import {gql} from "@apollo/client"

export const LOGINUSER = gql`
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
mutation addUser(
    $username: String, 
    $email: String, 
    $password: String
    ) {
    ADUSER(
        username: $username
        email: $email
        password: $password
    ) {
    token
    user {
        username
        _id
        email
        bookCount
        savedBooks {
            authors
            bookId
            iamge
            link
            title
            description
        }
    }
}
}
`

export const SAVEBOOK = gql`
mutation saveBook($newBook: InputBook) {
    saveBook(newBook: $newBook) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVEBOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
