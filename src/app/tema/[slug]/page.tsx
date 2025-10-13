'use client'

import React from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import PostList from '@/components/PostList'
import { mockPosts, getPostsByTheme } from '@/data/mockData'

const ThemePage = () => {
  const params = useParams()
  const pathname = usePathname()
  const slug = params.slug as string

  const themes = [
    { key: 'perfil', label: 'Perfil', href: '/tema/perfil' },
    { key: 'bastidores', label: 'Bastidores', href: '/tema/bastidores' },
    { key: 'publico', label: 'Público', href: '/tema/publico' },
  ]

  const getThemeLabel = (slug: string) => {
    const theme = themes.find(t => t.key === slug)
    return theme ? theme.label : 'Todos'
  }

  const posts = slug === 'todos' ? mockPosts : getPostsByTheme(slug)

  return (
    <div className="container py-8">
      {/* Título da Página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-6">
          {slug === 'todos' ? 'Todos os Posts' : getThemeLabel(slug)}
        </h1>

        {/* Abas de Navegação */}
        <div className="border-b border-secondary-200">
          <nav className="flex space-x-8">
            {themes.map((theme) => (
              <Link
                key={theme.key}
                href={theme.href}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  pathname === theme.href
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                }`}
              >
                {theme.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Lista de Posts */}
      <PostList posts={posts} />

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary-500">
            Nenhum post encontrado para este tema.
          </p>
        </div>
      )}
    </div>
  )
}

export default ThemePage