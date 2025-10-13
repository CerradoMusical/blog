import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="flex gap-4 p-4 border border-secondary-200 rounded-lg hover:shadow-md transition-shadow duration-200 bg-white"
    >
      <div className="flex-shrink-0">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={80}
          height={80}
          className="w-20 h-20 object-cover rounded"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-secondary-900 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-secondary-600 text-sm line-clamp-2">
          {post.summary}
        </p>
      </div>
    </Link>
  )
}

export default PostCard