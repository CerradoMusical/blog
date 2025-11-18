import React from 'react'
import Link from 'next/link'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const getThemeColor = (theme: string) => {
    switch (theme) {
      case 'perfil': return 'bg-gradient-to-r from-blue-600 to-blue-700'
      case 'bastidores': return 'bg-gradient-to-r from-purple-600 to-purple-700'
      case 'publico': return 'bg-gradient-to-r from-green-600 to-green-700'
      default: return 'bg-gradient-to-r from-gray-600 to-gray-700'
    }
  }
  
  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case 'perfil': return '🎤'
      case 'bastidores': return '🎬'
      case 'publico': return '💫'
      default: return '📰'
    }
  }
  
  const getThemeLabel = (theme: string) => {
    switch (theme) {
      case 'perfil': return 'Perfil'
      case 'bastidores': return 'Bastidores'
      case 'publico': return 'Público'
      default: return theme
    }
  }

  return (
    <Link href={`/post/${post.slug}`} className="group block max-w-md mx-auto">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-100">
        {/* Imagem - sempre no topo */}
        <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
          <img
            src={`/blog${post.imageUrl}`}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Badge do tema */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg ${getThemeColor(post.theme)}`}>
              {getThemeIcon(post.theme)} {getThemeLabel(post.theme)}
            </span>
          </div>
        </div>

        {/* Conteúdo - responsivo */}
        <div className="flex-1 p-6 flex flex-col justify-between min-w-0">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {post.summary}
            </p>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
            <span>Por {post.author}</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
            </time>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard