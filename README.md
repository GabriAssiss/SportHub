# SportHub Landing Page 🏅

Bem-vindo ao repositório do **SportHub**, uma landing page moderna, responsiva e interativa projetada para destacar o seu complexo esportivo!

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática oferecendo segurança e robustez ao código.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build ultrarrápida.
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework utilitário de CSS direto no código, gerenciado nativamente pelo pacote vite.
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones (ex: menu hambúrguer, chevrons, ícone de usuário).

## ✨ Funcionalidades e Destaques

- **Super Responsividade**: Layout testado do mobile ao Ultra Desktop. O projeto foi perfeitamente calibrado com os breakpoints nativos do Tailwind (`sm`, `md`, `lg`, `xl` e `2xl`).
- **Carousel Dinâmico Customizado**: Componente feito do "zero" para exibição das modalidades com transições e navegação (Pilates, Futevôlei, Pickleball, Beach Tennis, Tênis, Academia).
- **Scroll Suave (Smooth Scroll)**: Ao clicar nos links do cabeçalho, a página desliza de forma agradável e suave até a seção correspondente.
- **Design Limpo / Glassware**: Uso ostensivo de desfoques de fundo (`backdrop-blur-sm`), degrades sofisticados e fontes tipográficas marcantes.

## 🛠️ Como Executar o Projeto Localmente

Siga o passo a passo para testar a interface na sua própria máquina:

1. **Pré-requisito:** Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

2. No seu terminal, clone ou navegue até a pasta do projeto (se já tiver o código):
```bash
cd sporthub-landing-page
```

3. Instale as dependências:
```bash
npm install
```

4. Suba o ambiente local de desenvolvimento com Vite:
```bash
npm run dev
```

5. O projeto abrirá na porta padrão do Vite (geralmente em [http://localhost:5173/](http://localhost:5173/)). Aproveite!

## 📂 Estrutura do Projeto

Os componentes principais se encontram no diretório `src/`:

- `src/components/Header.tsx` - Navbar fixa interativa com comportamento responsivo e botão de contato.
- `src/components/HeroSection.tsx` - Área de destaque na introdução com texto de apresentação escalonável.
- `src/components/ActivitySection.tsx` - Seção base que hospeda o componente das modalidades esportivas abordadas.
- `src/components/Carousel.tsx` - Isolado perfeitamente para receber um Array de propriedades visuais e processar o slideshow.
- `src/index.css` - Arquivo onde constam os ajustes principais de tema, cores em variáveis `--color-*` e scroll fluído para o Tailwind v4.

---

💻 Criado para a excelência do **SportHub**. Supere seus limites!