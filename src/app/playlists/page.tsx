import React from 'react'
import PlaylistGrid from '@/components/PlaylistGrid'
import { mockPlaylists } from '@/data/mockData'

const PlaylistsPage = () => {
  return (
    <div className="container pt-8 pb-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">
          Todas as Playlists
        </h1>
        <p className="text-lg text-secondary-600">
          Coleções organizadas de conteúdo para diferentes interesses
        </p>
      </div>

      <PlaylistGrid playlists={mockPlaylists} />
    </div>
  )
}

export default PlaylistsPage