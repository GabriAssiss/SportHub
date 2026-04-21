# 🏟️ SportHub — Landing Page

Site institucional do **SportHub**, um clube esportivo moderno localizado na Pampulha, Belo Horizonte. O projeto apresenta as atividades, estrutura e canais de contato do clube, com design responsivo para mobile, desktop e TVs.

---

## 🚀 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Tipagem estática |
| [Vite](https://vite.dev/) | 8 | Bundler e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utilitária |
| [React Router DOM](https://reactrouter.com/) | 7 | Roteamento |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Biblioteca de ícones |

---

## ✅ Funcionalidades implementadas

- **Hero Section** com imagem de fundo em tela cheia e overlay gradiente
- **Header** fixo e transparente sobre o hero, com menu hamburguer para mobile
- **Carousel** de atividades com navegação por setas e dots animados
- **Seção Sobre Nós** com texto, imagem e cards de destaque
- **Formulário de Contato** com validação e informações do clube
- **Página de Login** para a Área do Sócio com validação de CPF
- **Scroll suave** para âncoras via `useScrollToHash`
- **Responsividade** para mobile, tablet, desktop e telas grandes (2xl)
- **Layout separado** — Header não aparece nas páginas de autenticação

---

## 📁 Hierarquia de pastas

```
sporthub-landing-page/
├── public/                     # Arquivos estáticos públicos
├── src/
│   ├── assets/
│   │   └── images/             # Imagens do projeto
│   │       ├── hero-section-image.jpg
│   │       ├── about-section-image.jpg
│   │       ├── carousel-1.jpg
│   │       ├── carousel-2.jpg
│   │       ├── carousel-3.jpg
│   │       ├── carousel-4.jpg
│   │       ├── carousel-5.jpg
│   │       └── carousel-6.jpg
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Header.tsx          # Barra de navegação
│   │   ├── HeroSection.tsx     # Seção principal com imagem de fundo
│   │   ├── ActivitySection.tsx # Seção de atividades com carousel
│   │   ├── Carousel.tsx        # Componente de carousel
│   │   ├── AboutSection.tsx    # Seção sobre o clube
│   │   ├── ContactSection.tsx  # Formulário e informações de contato
│   │   └── LoginForm.tsx       # Formulário de login
│   ├── pages/                  # Páginas da aplicação
│   │   ├── Home.tsx            # Página principal
│   │   └── Login.tsx           # Página de autenticação
│   ├── App.tsx                 # Roteamento principal
│   ├── App.css                 # Estilos globais da aplicação
│   ├── index.css               # Configuração do Tailwind e tema
│   └── main.tsx                # Ponto de entrada da aplicação
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

---

## 🎨 Tema de cores

Configurado via `@theme` no `index.css` do Tailwind v4:

| Variável | Cor | Uso |
|---|---|---|
| `--color-main-blue` | `#1A134C` | Fundo principal, header, seções azuis |
| `--color-secondary-blue` | `#0E85F2` | Botões, destaques, links |

---

## ⚙️ Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## 📱 Responsividade

O projeto utiliza os breakpoints padrão do Tailwind CSS:

| Breakpoint | Largura | Dispositivo |
|---|---|---|
| `sm` | 640px+ | Celulares grandes |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Laptops |
| `xl` | 1280px+ | Desktops |
| `2xl` | 1536px+ | TVs e monitores grandes |