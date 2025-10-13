'use client'

import React from 'react'
import Link from 'next/link'
import PostList from '@/components/PostList'
import PlaylistGrid from '@/components/PlaylistGrid'
import { mockPosts, mockPlaylists } from '@/data/mockData'

export default function HomePage() {
  const featuredPosts = mockPosts.slice(0, 3)

  const handleLoadMore = () => {
    window.location.href = '/tema/todos'
  }

  return (
    <div className="container py-8">
      {/* Logo/Título Central */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">
          Portal Editorial
        </h1>
        <p className="text-lg text-secondary-600">
          Seu destino para conteúdo de qualidade
        </p>
      </div>

      {/* Lista de Matérias */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          Últimas Matérias
        </h2>
        <PostList 
          posts={featuredPosts}
          showLoadMore={true}
          onLoadMore={handleLoadMore}
        />
      </section>

      {/* Playlists */}
      <section>
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">
          Playlists em Destaque
        </h2>
        <PlaylistGrid playlists={mockPlaylists} />
      </section>
    </div>
  )
}