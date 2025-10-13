export interface Post {
  id: string
  slug: string
  title: string
  summary: string
  content: string
  imageUrl: string
  theme: 'perfil' | 'bastidores' | 'publico'
  publishedAt: string
  author: string
}

export interface Playlist {
  id: string
  slug: string
  name: string
  description: string
  posts: Post[]
  imageUrl?: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
}