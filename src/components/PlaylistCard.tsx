import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Playlist } from '@/types'

interface PlaylistCardProps {
  playlist: Playlist
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <div className="bg-gradient-to-br from-orange-500 via-red-600 to-red-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 max-w-sm">
      {/* Header com imagem da playlist */}
      <div className="flex items-start gap-4 mb-6">
        {playlist.imageUrl && (
          <div className="flex-shrink-0">
            <Image
              src={playlist.imageUrl}
              alt={playlist.name}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.08 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span className="text-sm opacity-90">Save on Spotify</span>
          </div>

          <Link href={`/playlist/${playlist.slug}`}>
            <h3 className="text-xl font-bold mb-1 hover:underline cursor-pointer line-clamp-2">
              {playlist.name}
            </h3>
          </Link>

          <p className="text-sm opacity-80">
            Curated Musical
          </p>
        </div>

        {/* Botão de minimizar */}
        <button className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors">
          <span className="text-lg leading-none">−</span>
        </button>
      </div>

      {/* Controles de reprodução */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>

          <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 6h-2v12h2zm-3.5 6L6 18V6z" />
            </svg>
          </button>

          <button className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>

        {/* Botão Play principal */}
        <button className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
          <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Lista de músicas/artigos */}
      <div className="space-y-3">
        {playlist.posts.slice(0, 3).map((post, index) => (
          <div key={post.id} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className="text-white/60 w-4">{index + 1}</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{post.title}</p>
                <p className="text-white/60 truncate">{post.author}</p>
              </div>
            </div>
            <span className="text-white/60 ml-2">02:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}</span>
          </div>
        ))}
      </div>

      {/* Footer com Spotify */}
      {playlist.spotifyUrl && (
        <div className="mt-6 pt-4 border-t border-white/20">
          <a
            href={playlist.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.08 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Adicionar seção
          </a>
        </div>
      )}
    </div>
  )
}

export default PlaylistCard