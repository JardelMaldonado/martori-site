# Martori Eletro Eletrônica - Website Institucional

![Logo da empresa Martori](https://i.imgur.com/nW4lesT.png)

Bem-vindo ao repositório do site institucional da **Martori Eletro Eletrônica**. Este projeto foi desenvolvido para apresentar os serviços, produtos e a vasta experiência da empresa no mercado de eletroeletrônica, oferecendo um canal de comunicação direto e eficiente com seus clientes.

O site foi construído com tecnologias modernas, focando em performance, SEO e uma experiência de usuário fluida. O conteúdo dinâmico, como "Promocões" e "Assunto da Semana", é gerenciado através de um CMS headless (Sanity), permitindo que o cliente atualize o site de forma autônoma.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com o seguinte ecossistema de tecnologias:

- **[Next.js](https://nextjs.org/)**: Framework React para produção, utilizado para renderização no servidor (SSR), geração de site estático (SSG) e otimizações de performance.
- **[React](https://react.dev/)**: Biblioteca JavaScript para a construção da interface de usuário.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS "utility-first" para a estilização rápida e responsiva dos componentes.
- **[Sanity.io](https://www.sanity.io/)**: Plataforma de conteúdo headless (CMS) utilizada para gerenciar o conteúdo dinâmico do site (promoções e assunto da semana).
- **[Nodemailer](https://nodemailer.com/)**: Módulo para Node.js para o envio de e-mails através do formulário de contato.
- **[Google reCAPTCHA v3](https://www.google.com/recaptcha/about/)**: Para proteção do formulário de contato contra spam e bots.
- **[Vercel](https://vercel.com/)**: Plataforma de hospedagem e deploy contínuo, otimizada para projetos Next.js.

---

## 📋 Funcionalidades Principais

- **Design Responsivo**: Interface adaptada para uma ótima visualização em desktops, tablets e dispositivos móveis.
- **Conteúdo Dinâmico**: Seções como "Promoções" e "Assunto da Semana" são gerenciadas pelo cliente via Sanity.
- **Formulário de Contato Seguro**: Integrado com Nodemailer para envio de e-mails e protegido com Google reCAPTCHA v3.
- **Otimização de Performance**: Imagens otimizadas com `next/image` e fontes carregadas eficientemente com `next/font`.
- **Navegação Intuitiva**: Menu de navegação claro, com destaque para a página ativa.

---

## 🛠️ Configuração do Ambiente de Desenvolvimento

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en) (versão 18.x ou superior)
- [Git](https://git-scm.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/JardelMaldonado/martori-site.git](https://github.com/JardelMaldonado/martori-site.git)
    cd martori-site
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo chamado `.env.local` na raiz do projeto e adicione as seguintes variáveis. Substitua os valores de exemplo pelos seus.

    ```env
    # Chaves do Sanity
    NEXT_PUBLIC_SANITY_PROJECT_ID="seu_project_id"
    NEXT_PUBLIC_SANITY_DATASET="production"
    NEXT_PUBLIC_SANITY_USE_CDN=false # Use 'true' para produção

    # Chaves do Google reCAPTCHA
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY="sua_site_key_publica"
    RECAPTCHA_SECRET_KEY="sua_secret_key"

    # Credenciais para envio de e-mail (Gmail)
    EMAIL_USER="seu_email@gmail.com"
    EMAIL_PASS="sua_senha_de_aplicativo_do_gmail"
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o site.

---

## 🚀 Deploy

O deploy deste projeto é feito automaticamente pela **Vercel**. Qualquer `push` para a branch `main` no GitHub irá acionar um novo build e deploy do site.

Lembre-se de configurar as mesmas variáveis de ambiente do arquivo `.env.local` no painel de configurações do seu projeto na Vercel.

---

## 🤝 Contribuição

Este é um projeto privado. Para sugestões ou reporte de bugs, por favor, entre em contato com o desenvolvedor responsável.

---

<p align="center">
  Desenvolvido por Jardel Maldonado.
</p>
