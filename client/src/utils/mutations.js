import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login (email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      image
      link
      title
    }
  }
}`;

export const REMOVE_BOOK = gql`
mutation removeBook($boookId: ID!) {
  removeBook(bookId:$bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      # _id
      bookId
      authors
      image
      link
      title
      description
    }
  }
}`;