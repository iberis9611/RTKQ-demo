import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { selectPostById } from './postsSlice'
import { useSelector } from "react-redux";

let PostsExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))
  return (
    <article>
        <h2>{post.title}</h2>
        <p className="excerpt">{post.body.substring(0, 75)}...</p>
        <p className="postCredit">
          <Link to={`post/${post.id}`}>View Post</Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
    </article>
  )
}

// It allows the component not to rerender if the post it receives does not change. But it's recommended to use normalized data.
// PostsExcerpt = React.memo(PostsExcerpt)

export default PostsExcerpt