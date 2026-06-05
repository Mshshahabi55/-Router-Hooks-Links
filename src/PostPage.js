import React from 'react'
import { useParams,Link } from 'react-router-dom'

const PostPage = ({ posts,handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).tostring() === id);

  return (
    <main className="PostPage">
      <article className="post">
          {post &&
               <>
                  <h2>{post.title}</h2>
                  <p className='postdate'>{post.datetime}</p>
                  <p className='postbody'>{post.body}</p>
                  <button onClick={() => handleDelete(post.id)}>
                    Delete Post
                  </button>
               </>
          }
      </article>
        
    </main>
  )
}

export default PostPage
