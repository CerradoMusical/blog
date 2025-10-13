import React from 'react'
import PlaylistCard from './PlaylistCard'
import { Playlist } from '@/types'

interface PlaylistGridProps {
  playlists: Playlist[]
}

const PlaylistGrid: React.FC<PlaylistGridProps> = ({ playlists }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlist={playlist} />
      ))}
    </div>
  )
}

export default PlaylistGrid