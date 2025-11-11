import React from 'react'
import PostList from '@/components/PostList'
import { mockPosts, getPostsByTheme } from '@/data/mockData'

export async function generateStaticParams() {
  const themes = ['perfil', 'bastidores', 'publico', 'todos']
  return themes.map((theme) => ({
    slug: theme,
  }))
}

interface ThemePageProps {
  params: Promise<{
    slug: string
  }>
}

const ThemePage = async ({ params }: ThemePageProps) => {
  const resolvedParams = await params
  const slug = resolvedParams.slug

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
    <div className="container pt-8 pb-8">
      {/* Título da Página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-6">
          {slug === 'todos' ? 'Todos os Posts' : getThemeLabel(slug)}
        </h1>
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