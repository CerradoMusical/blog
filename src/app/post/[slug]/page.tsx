import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import RichText from '@/components/RichText'
import BandaSopruLayout from '@/components/BandaSopruLayout'
import LucasMennezesLayout from '@/components/LucasMennezesLayout'
import FernandaHofmmanLayout from '@/components/FernandaHofmmanLayout'
import BarbaraCrivelariLayout from '@/components/BarbaraCrivelariLayout'
import Projeto1Mais1Layout from '@/components/Projeto1Mais1Layout'
import AnaVitoriaLayout from '@/components/AnaVitoriaLayout'
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

  // Se for o post da banda Soprü, usar layout especial
  if (post.slug === 'historia-banda-sopru') {
    return <BandaSopruLayout />
  }

  // Se for o post do Lucas Mennezes, usar layout especial
  if (post.slug === 'entrevista-exclusiva-lucas-mennezes') {
    return <LucasMennezesLayout />
  }

  // Se for o post da Fernanda Hofmman, usar layout especial
  if (post.slug === 'noite-show-fernanda-hofmman') {
    return <FernandaHofmmanLayout />
  }

  // Se for o post da Barbara Crivelari, usar layout especial
  if (post.slug === 'barbara-crivelari') {
    return <BarbaraCrivelariLayout />
  }

  // Se for o post do Projeto 1+1, usar layout especial
  if (post.slug === 'projeto-1-mais-1') {
    return <Projeto1Mais1Layout />
  }

  // Se for o post da AnaVitória, usar layout especial
  if (post.slug === 'norte-ecoa-duas-vozes-anavitoria') {
    return <AnaVitoriaLayout />
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