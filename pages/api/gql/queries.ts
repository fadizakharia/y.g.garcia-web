import { gql } from "@apollo/client";

export const getBooks = gql`
  query {
    getBooks {
      Books {
        id
        body
        genres
        header
        purchase_options {
          id
          title
          url
          iconUrl
        }
        images {
          id
          imageUrl
          key
          localImageUrl
        }
        status
        subtitle
        title
        warning_message
      }
      errors {
        field
        message
      }
    }
  }
`;
export const getBookQuery = gql`
  query ($bookId: String!) {
    getBook(bookId: $bookId) {
      Book {
        id
        body
        genres
        header
        purchase_options {
          id
          title
          url
          iconUrl
        }
        images {
          id
          imageUrl
          key
          localImageUrl
        }
        status
        subtitle
        title
        warning_message
      }
      errors {
        field
        message
      }
    }
  }
`;
export const getCategoriesQuery = gql`
  query {
    getCategories {
      title
      id
    }
  }
`;
export const getCharactersQuery = gql`
  query ($step: Float, $page: Float, $cat: String) {
    getCharacters(step: $step, page: $page, cat: $cat) {
      total
      characters {
        id
        name
        gender
        color
        ethnicity
        bio
        date_of_birth
        images {
          id
          imageUrl
          key
        }
        category {
          id
          title
        }
      }
    }
  }
`;
export const getCharacterQuery = gql`
  query ($charId: String!) {
    getCharacter(charId: $charId) {
      character {
        id
        name
        gender
        color
        ethnicity
        bio
        date_of_birth
        images {
          id
          imageUrl
          key
        }
        category {
          id
          title
        }
      }
      errors {
        field
        message
      }
    }
  }
`;
export const getAllCharactersQuery = gql`
  query {
    getAllCharacters {
      id
      bio
      category {
        id
        title
      }
      color
      date_of_birth
      ethnicity
      gender
      name
      images {
        id
        imageUrl
        key
      }
    }
  }
`;
