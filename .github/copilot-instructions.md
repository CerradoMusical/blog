# Portal Editorial - GitHub Copilot Instructions

Este é um portal editorial moderno construído com Next.js 14, TypeScript e Tailwind CSS.

## 🏗️ Arquitetura do Projeto

### Stack Tecnológico

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript para type safety
- **Estilização**: Tailwind CSS
- **Deploy**: GitHub Pages com GitHub Actions

### Estrutura de Pastas

```
src/
├── app/              # App Router pages
├── components/       # Componentes reutilizáveis
├── data/            # Mock data e configurações
└── types/           # Tipos TypeScript
```

## 📋 Convenções de Código

### Componentes

- Use React Functional Components com TypeScript
- Props devem ter interfaces tipadas
- Prefira composição sobre herança
- Mantenha componentes pequenos e focados

### Estilização

- Use apenas classes do Tailwind CSS
- Evite CSS customizado quando possível
- Use responsive design (mobile-first)
- Prefira utilities sobre componentes customizados

### Dados

- Mock data em `src/data/mockData.ts`
- Tipos definidos em `src/types/index.ts`
- Use dados tipados sempre

## 🎨 Design System

### Cards de Matérias

- Layout horizontal no desktop (foto 320px + texto)
- Layout vertical no mobile
- Máximo 896px de largura
- Hover effects suaves

### Playlists

- Estilo inspirado no Spotify
- Gradiente laranja/vermelho
- Controles visuais de reprodução
- Cards com tamanho fixo (max-w-sm)

### Responsividade

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Status do Projeto

- [x] Estrutura Next.js configurada
- [x] Componentes principais implementados
- [x] Design responsivo
- [x] Cards de matérias com fotos em destaque
- [x] Playlists estilo Spotify
- [x] Navegação limpa (removida navegação secundária)
- [x] Configuração para GitHub Pages
- [x] Documentação completa
- [x] Projeto limpo para produção

## 📝 Próximos Passos

Para futuras melhorias:

1. Adicionar sistema de busca
2. Implementar filtros avançados
3. Adicionar sistema de comentários
4. Integração com CMS headless
5. Otimizações de performance
