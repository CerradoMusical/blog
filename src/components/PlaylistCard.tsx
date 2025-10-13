import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Playlist } from '@/types'

interface PlaylistCardProps {
  playlist: Playlist
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <Link
      href={`/playlist/${playlist.slug}`}
      className="block p-6 border border-secondary-200 rounded-lg hover:shadow-md transition-shadow duration-200 bg-white"
    >
      {playlist.imageUrl && (
        <div className="mb-4">
          <Image
            src={playlist.imageUrl}
            alt={playlist.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-secondary-900 mb-2">
        {playlist.name}
      </h3>
      <p className="text-secondary-600 mb-3">
        {playlist.description}
      </p>
      <p className="text-sm text-primary-600 font-medium">
        {playlist.posts.length} artigos
      </p>
    </Link>
  )
}

export default PlaylistCard