import { Post, Playlist } from '@/types'

export const mockPosts: Post[] = [
  {
    id: '1',
    slug: 'primeira-materia-perfil',
    title: 'Primeira Matéria do Perfil',
    summary: 'Esta é uma matéria interessante sobre perfil que vai te ensinar muitas coisas importantes.',
    content: `## Introdução

Esta é uma matéria completa sobre o tema perfil. Aqui você encontrará informações detalhadas e bem estruturadas.

### Subtítulo Importante

O conteúdo continua aqui com mais detalhes e explicações relevantes para o leitor.

Este é um parágrafo normal com informações importantes que complementam o tópico principal.`,
    imageUrl: 'https://via.placeholder.com/300x300/3b82f6/ffffff?text=Perfil+1',
    theme: 'perfil',
    publishedAt: '2024-01-15',
    author: 'João Silva'
  },
  {
    id: '2',
    slug: 'segunda-materia-bastidores',
    title: 'Nos Bastidores do Projeto',
    summary: 'Conheça como funciona por trás das câmeras neste artigo exclusivo sobre bastidores.',
    content: `## Como Tudo Começou

Esta matéria revela os segredos por trás do nosso projeto principal.

### Os Desafios Enfrentados

Durante o desenvolvimento, enfrentamos diversos obstáculos que nos fizeram crescer.

Cada etapa foi cuidadosamente planejada para garantir o melhor resultado possível.`,
    imageUrl: 'https://via.placeholder.com/300x300/ef4444/ffffff?text=Bastidores+1',
    theme: 'bastidores',
    publishedAt: '2024-01-14',
    author: 'Maria Santos'
  },
  {
    id: '3',
    slug: 'terceira-materia-publico',
    title: 'Conectando com o Público',
    summary: 'Estratégias eficazes para se conectar melhor com sua audiência e criar engajamento.',
    content: `## A Importância da Conexão

Conectar-se com o público é fundamental para qualquer projeto de sucesso.

### Estratégias Comprovadas

Apresentamos aqui as melhores práticas para criar uma conexão genuína.

A autenticidade é a chave para construir relacionamentos duradouros com sua audiência.`,
    imageUrl: 'https://via.placeholder.com/300x300/10b981/ffffff?text=Público+1',
    theme: 'publico',
    publishedAt: '2024-01-13',
    author: 'Pedro Costa'
  },
  {
    id: '4',
    slug: 'quarta-materia-perfil',
    title: 'Desenvolvimento Pessoal e Profissional',
    summary: 'Dicas valiosas para o crescimento pessoal e profissional no mundo moderno.',
    content: `## O Caminho do Crescimento

O desenvolvimento pessoal é uma jornada contínua de autodescoberta e melhoria.

### Habilidades Essenciais

Identificamos as competências mais importantes para o mercado atual.

Investir em si mesmo é sempre o melhor investimento que você pode fazer.`,
    imageUrl: 'https://via.placeholder.com/300x300/8b5cf6/ffffff?text=Perfil+2',
    theme: 'perfil',
    publishedAt: '2024-01-12',
    author: 'Ana Oliveira'
  },
  {
    id: '5',
    slug: 'quinta-materia-bastidores',
    title: 'Tecnologia nos Bastidores',
    summary: 'Como a tecnologia revolucionou nossos processos internos e melhorou a produtividade.',
    content: `## A Revolução Tecnológica

A implementação de novas tecnologias transformou completamente nossa operação.

### Ferramentas que Fazem a Diferença

Exploramos as principais ferramentas que otimizaram nosso trabalho.

A automação permitiu que focássemos no que realmente importa: criar conteúdo de qualidade.`,
    imageUrl: 'https://via.placeholder.com/300x300/f59e0b/ffffff?text=Bastidores+2',
    theme: 'bastidores',
    publishedAt: '2024-01-11',
    author: 'Carlos Lima'
  }
]

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    slug: 'playlist-iniciantes',
    name: 'Playlist 1 - Para Iniciantes',
    description: 'Uma coleção de artigos perfeita para quem está começando sua jornada.',
    imageUrl: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Playlist+1',
    posts: [mockPosts[0], mockPosts[2]]
  },
  {
    id: '2',
    slug: 'playlist-avancados',
    name: 'Playlist 2 - Conteúdo Avançado',
    description: 'Artigos mais profundos para quem quer se aprofundar nos temas.',
    imageUrl: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Playlist+2',
    posts: [mockPosts[1], mockPosts[3], mockPosts[4]]
  }
]

export const getPostsByTheme = (theme: string) => {
  return mockPosts.filter(post => post.theme === theme)
}

export const getPostBySlug = (slug: string) => {
  return mockPosts.find(post => post.slug === slug)
}

export const getPlaylistBySlug = (slug: string) => {
  return mockPlaylists.find(playlist => playlist.slug === slug)
}