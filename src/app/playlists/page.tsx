import React from 'react'
import PlaylistGrid from '@/components/PlaylistGrid'
import { mockPlaylists } from '@/data/mockData'

const PlaylistsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Nossas Playlists
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Coleções musicais especialmente criadas para você explorar o melhor da música tocantinense
          </p>
          <div className="w-20 h-1 bg-yellow-400 rounded mx-auto mt-6"></div>
        </div>

        <PlaylistGrid playlists={mockPlaylists} />
      </div>
    </div>
  )
}

export default PlaylistsPage