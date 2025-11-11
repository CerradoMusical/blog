# 🎵 Cerrado Musical

> Um blog musical moderno e responsivo dedicado à música do Centro-Oeste, construído com Next.js, TypeScript e Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Funcionalidades

- 🏠 **Página Inicial**: Layout moderno com matérias em destaque
- 📑 **Sistema de Matérias**: Cards com fotos grandes e conteúdo organizado por temas
- 🎵 **Playlists Spotify-Style**: Interface inspirada no Spotify com controles visuais
- 📱 **Design Responsivo**: Adaptação automática para desktop e mobile
- 🎨 **Interface Moderna**: Design clean com hover effects e transições suaves
- 🔗 **Navegação Intuitiva**: Menu fixo e breadcrumbs para melhor UX

## 🖼️ Preview

### Página Inicial

- Cards de matérias com layout horizontal (desktop) e vertical (mobile)
- Fotos em destaque com badges de categoria
- Seção de playlists com visual do Spotify

### Matérias por Tema

- **Perfil**: Histórias e trajetórias de artistas
- **Bastidores**: Conteúdo dos bastidores dos shows
- **Público**: Experiências e histórias dos fãs

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cerrado-musical.git

# Entre no diretório
cd cerrado-musical

# Instale as dependências
npm install

# Execute o projeto em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 🏗️ Tecnologias

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript para type safety
- **Estilização**: Tailwind CSS para design system
- **Imagens**: Next.js Image com otimização automática
- **Deploy**: Configurado para GitHub Pages

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Pages e layouts (App Router)
│   ├── page.tsx           # Página inicial
│   ├── tema/[slug]/       # Páginas por tema
│   ├── post/[slug]/       # Detalhes das matérias
│   └── playlist/[slug]/   # Detalhes das playlists
├── components/            # Componentes reutilizáveis
│   ├── PostCard.tsx      # Card de matéria
│   ├── PlaylistCard.tsx  # Card estilo Spotify
│   └── Navbar.tsx        # Navegação principal
├── data/                 # Dados mockados
└── types/                # Tipos TypeScript
```

## 🎨 Design System

### Cards de Matérias

- **Desktop**: Layout horizontal com foto à esquerda (320px) e texto à direita
- **Mobile**: Layout vertical com foto em cima e texto embaixo
- **Tamanho máximo**: 896px para evitar esticamento excessivo

### Playlists Spotify-Style

- Gradiente laranja/vermelho característico
- Controles de reprodução funcionais
- Lista de faixas com duração
- Footer com link para Spotify

## 📱 Responsividade

O projeto utiliza breakpoints do Tailwind CSS:

- **Mobile**: < 768px (layout vertical)
- **Tablet**: 768px - 1024px (2 colunas)
- **Desktop**: > 1024px (3 colunas, layout horizontal)

## 🚀 Deploy

O projeto está configurado para deploy no GitHub Pages:

```bash
npm run build
npm run export
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para compartilhar conteúdo editorial de qualidade.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

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
