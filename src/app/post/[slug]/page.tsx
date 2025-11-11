import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import RichText from '@/components/RichText'
import { getPostBySlug, mockPosts } from '@/data/mockData'
import { BreadcrumbItem } from '@/types'

export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

const PostPage = async ({ params }: PostPageProps) => {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const getThemeLabel = (theme: string) => {
    const themeLabels = {
      perfil: 'Perfil',
      bastidores: 'Bastidores',
      publico: 'Público'
    }
    return themeLabels[theme as keyof typeof themeLabels] || theme
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Início', href: '/' },
    { label: getThemeLabel(post.theme), href: `/tema/${post.theme}` },
    { label: post.title }
  ]
  return (
    <div className="container pt-8 pb-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Imagem Destaque */}
      <div className="mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
      </div>

      {/* Título e Metadados */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-sm text-secondary-600 space-x-4">
          <span>Por {post.author}</span>
          <span>•</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR')}</span>
          <span>•</span>
          <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">
            {getThemeLabel(post.theme)}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <article className="max-w-4xl">
        <RichText content={post.content} />
      </article>
    </div>
  )
}

export default PostPage