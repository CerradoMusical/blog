# Portal Editorial

Um portal editorial moderno construído com Next.js, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Navegação Global Fixa**: Barra de navegação sempre visível com destaque para a página ativa
- **Páginas Principais**:
  - **Início (/)**: Logo centralizado, lista de matérias em destaque e playlists
  - **Temas (/tema/[slug])**: Navegação por abas (Perfil, Bastidores, Público)
  - **Detalhe de Matéria (/post/[slug])**: Visualização completa com breadcrumbs
  - **Sobre Nós (/sobre)**: Página institucional com foto e texto
  - **Playlists (/playlists, /playlist/[slug])**: Sistema de coleções organizadas

## 🏗️ Arquitetura

### Componentes Principais

- **Navbar**: Navegação global com destaque da página ativa
- **PostCard**: Card com thumbnail à esquerda, título e resumo à direita
- **PostList**: Lista de posts com opção de "Carregar mais"
- **PlaylistCard** e **PlaylistGrid**: Cards e grade para playlists
- **RichText**: Renderização de conteúdo com formatação markdown
- **Breadcrumbs**: Navegação hierárquica
- **Footer**: Rodapé simples

### Estrutura de Dados

```typescript
interface Post {
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

interface Playlist {
  id: string
  slug: string
  name: string
  description: string
  posts: Post[]
  imageUrl?: string
}
```

## 🎨 Design

- **Design System**: Cores primárias (azul) e secundárias (cinza)
- **Layout Responsivo**: Mobile-first com Tailwind CSS
- **Tipografia**: Sistema de fontes nativo do sistema
- **Espaçamento**: Padronizado com classes Tailwind

## 🛠️ Tecnologias

- **Framework**: Next.js 15.5.4 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Imagens**: Next.js Image com otimização automática
- **Roteamento**: App Router com páginas dinâmicas

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar em produção
npm start

# Linting
npm run lint
```

## 🚦 Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar**: http://localhost:3000

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── not-found.tsx      # Página 404
│   ├── sobre/             # Página "Sobre Nós"
│   ├── tema/[slug]/       # Páginas por tema
│   ├── post/[slug]/       # Detalhe das matérias
│   ├── playlists/         # Lista de playlists
│   └── playlist/[slug]/   # Detalhe da playlist
├── components/            # Componentes reutilizáveis
├── data/                  # Dados mock
├── types/                 # Definições TypeScript
└── ...
```

## 🎯 Dados de Exemplo

O projeto inclui dados mock com:
- 5 posts de exemplo (diferentes temas)
- 2 playlists organizadas
- Imagens placeholder via placeholder.com

## 🔧 Customização

Para personalizar o portal:

1. **Cores**: Modifique `tailwind.config.js`
2. **Conteúdo**: Substitua os dados em `src/data/mockData.ts`
3. **Componentes**: Modifique os componentes em `src/components/`

## 📱 Responsividade

O design é totalmente responsivo:
- **Mobile**: Layout em coluna única
- **Tablet**: Grid de 2 colunas para playlists
- **Desktop**: Layout otimizado com sidebar e grid

## ✨ Próximos Passos

- [ ] Integração com CMS (Strapi, Contentful)
- [ ] Sistema de busca
- [ ] Comentários nas matérias
- [ ] Newsletter
- [ ] Analytics
- [ ] SEO otimizado

---

Desenvolvido com ❤️ usando Next.js, TypeScript e Tailwind CSS.