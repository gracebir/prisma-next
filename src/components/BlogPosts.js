import { useQuery} from "@apollo/client"
import { GET_BLOGPOSTS } from '../graphql/queries'
import BlogPost from "./BlogPost";



function BlogPosts({ onDelete,openModal}) {
    const { loading, error, data } = useQuery(GET_BLOGPOSTS);

    if(loading){
        return "Loading ..."
    }

    if(error){
        return "error"
    }

    console.log(data);
    return data.blogPosts.map((blogPost, i)=> <BlogPost onDelete={onDelete} openModal={openModal}  key={i} {...blogPost}/>)
}

export default BlogPosts
