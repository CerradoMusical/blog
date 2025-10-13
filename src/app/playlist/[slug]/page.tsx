import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import PostList from '@/components/PostList'
import { getPlaylistBySlug } from '@/data/mockData'
import { BreadcrumbItem } from '@/types'

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
    <div className="container py-8">
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
        
        <p className="text-sm text-primary-600 font-medium">
          {playlist.posts.length} artigos nesta playlist
        </p>
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