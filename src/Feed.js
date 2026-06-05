import React from 'react'
import Post from './Post'
const Feed = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <post key={post.id} post={post} />
      ))}
    </>
  )
}

export default Feed
