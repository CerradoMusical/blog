'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PostList from '@/components/PostList'
import PlaylistGrid from '@/components/PlaylistGrid'
import { mockPosts, mockPlaylists } from '@/data/mockData'

export default function HomePage() {
  const featuredPosts = mockPosts.slice(0, 6) // Mostrar mais posts

  const handleLoadMore = () => {
    window.location.href = '/tema/todos'
  }

  return (
    <div className="min-h-screen bg-gray-50">      {/* Hero Section com Banner Musical */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden -mt-28 pt-28"
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #b45309 75%, #92400e 100%)',
        }}
      >
        {/* Background com notas musicais */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/projeto/banner.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20"></div>
        
        {/* Conteúdo */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/projeto/logo.png"
              alt="Cerrado Musical"
              width={550}
              height={180}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ✨ Últimas Matérias
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Descubra as histórias mais recentes do mundo musical
            </p>
            <div className="w-20 h-1 bg-blue-900 rounded mx-auto"></div>
          </div>

          <PostList 
            posts={featuredPosts}
            showLoadMore={true}
            onLoadMore={handleLoadMore}
          />
        </div>
      </section>

      {/* Playlists */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎵 Playlists Especiais
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-6">
              Curadoria musical especial para diferentes momentos
            </p>
            <div className="w-20 h-1 bg-yellow-400 rounded mx-auto"></div>
          </div>

          <PlaylistGrid playlists={mockPlaylists.slice(0, 3)} />

          <div className="text-center mt-8">
            <Link
              href="/playlists"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-200"
            >
              Ver Todas as Playlists
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
