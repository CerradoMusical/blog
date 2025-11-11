import React from 'react'
import PostCard from './PostCard'
import { Post } from '@/types'

interface PostListProps {
  posts: Post[]
  showLoadMore?: boolean
  onLoadMore?: () => void
}

const PostList: React.FC<PostListProps> = ({ 
  posts, 
  showLoadMore = false, 
  onLoadMore 
}) => {  return (
    <div>
      {/* Lista vertical com cards horizontais */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {showLoadMore && (
        <div className="text-center pt-8">
          <button
            onClick={onLoadMore}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Todos os posts
          </button>
        </div>
      )}
    </div>
  )
}

export default PostList