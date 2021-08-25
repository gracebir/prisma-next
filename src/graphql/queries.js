import { gql } from '@apollo/client'

export const  GET_BLOGPOSTS = gql`
{
  blogPosts{
    id
    text
  }
}
`;


export const ADD_POST = gql`
    mutation AddBlogPost($text: String){
        addBlogPost(text: $text){
            id
            text
        }
    }
`;