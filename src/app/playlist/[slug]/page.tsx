import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import PostList from '@/components/PostList'
import { getPlaylistBySlug, mockPlaylists } from '@/data/mockData'
import { BreadcrumbItem } from '@/types'

export async function generateStaticParams() {
  return mockPlaylists.map((playlist) => ({
    slug: playlist.slug,
  }))
}

interface PlaylistPageProps {
  params: Promise<{
    slug: string
  }>
}

const PlaylistPage = async ({ params }: PlaylistPageProps) => {
  const resolvedParams = await params
  const playlist = getPlaylistBySlug(resolvedParams.slug)

  if (!playlist) {
    notFound()
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Início', href: '/' },
    { label: 'Playlists', href: '/playlists' },
    { label: playlist.name }
  ]
  return (
    <div className="container pt-8 pb-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Header da Playlist */}
      <div className="mb-12">
        {playlist.imageUrl && (
          <div className="mb-6">
            <Image
              src={playlist.imageUrl}
              alt={playlist.name}
              width={1200}
              height={400}
              className="w-full h-48 md:h-64 object-cover rounded-lg"
            />
          </div>
        )}
        
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          {playlist.name}
        </h1>
          <p className="text-lg text-secondary-600 mb-4">
          {playlist.description}
        </p>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-primary-600 font-medium">
            {playlist.posts.length} artigos nesta playlist
          </p>
          
          {playlist.spotifyUrl && (
            <a
              href={playlist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.08 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Ouvir no Spotify
            </a>
          )}
        </div>
      </div>

      {/* Lista de Posts da Playlist */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          Artigos da Playlist
        </h2>
        <PostList posts={playlist.posts} />
      </div>
    </div>
  )
}

export default PlaylistPage