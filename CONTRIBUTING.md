# Contribuindo para o Portal Editorial

Obrigado pelo seu interesse em contribuir! 🎉

## Como Contribuir

### 1. Fork e Clone

```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU-USUARIO/portal-editorial.git
cd portal-editorial
```

### 2. Configuração do Ambiente

```bash
# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### 3. Faça suas Alterações

- Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
- Faça commits descritivos: `git commit -m "feat: adiciona nova funcionalidade"`
- Siga as convenções do projeto

### 4. Envie suas Alterações

```bash
# Push para sua branch
git push origin feature/nova-feature

# Abra um Pull Request no GitHub
```

## Convenções

### Commits

Usamos [Conventional Commits](https://conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração
- `test:` testes

### Código

- Use TypeScript com tipagem rigorosa
- Siga as convenções do Prettier/ESLint
- Mantenha componentes pequenos e reutilizáveis
- Use Tailwind CSS para estilização

## Estrutura do Projeto

```
src/
├── app/          # Pages (App Router)
├── components/   # Componentes reutilizáveis
├── data/         # Dados e mocks
└── types/        # Tipos TypeScript
```

## Dúvidas?

Abra uma [Issue](https://github.com/SEU-USUARIO/portal-editorial/issues) para discussão!
