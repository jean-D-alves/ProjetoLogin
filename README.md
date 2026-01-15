# login e criação de usuario

# Estrutura

```
└── 📁 frontend
    ├── 📁 api
    │   ├── 📁 src
    │   │   ├── 📁 config
    │   │   │   └── 📄 db.js
    │   │   ├── 📁 controllers
    │   │   │   └── 📄 Login.controller.js
    │   │   ├── 📁 middleware
    │   │   │   ├── 📄 auth.middleware.js
    │   │   │   └── 📄 redirect.middleware.js
    │   │   ├── 📁 models
    │   │   │   └── 📄 Login.model.js
    │   │   └── 📁 router
    │   │       └── 📄 Login.route.js
    │   └── 📝 README.md
    ├── 📁 pages
    │   ├── 🌐 404.html
    │   ├── 🌐 home.html
    │   └── 🌐 login.html
    ├── 📁 public
    │   ├── 📁 css
    │   │   ├── 🎨 global.css
    │   │   └── 🎨 home.css
    │   ├── 📁 imagens
    │   │   ├── 🖼️ back-pc.jpg
    │   │   ├── 🖼️ back-phone.jpg
    │   │   ├── 🖼️ back-print.jpg
    │   │   ├── 🖼️ back-tablet.jpg
    │   │   ├── 🖼️ back-tv.jpg
    │   │   ├── 🖼️ icon-pc.png
    │   │   ├── 🖼️ icon-phone.png
    │   │   ├── 🖼️ icon-print.png
    │   │   ├── 🖼️ icon-tablet.png
    │   │   └── 🖼️ icon-tv.png
    │   └── 📁 js
    │       └── 📄 login.js
    ├── ⚙️ .gitignore
    ├── 📝 README.md
    ├── 📄 app.js
    ├── ⚙️ package-lock.json
    └── ⚙️ package.json
```

## iniciar o projeto
no terminal
```
npm i
```
isso vai instalar as dependencias 
***
depois 
```
npm run dev
```
isso vai iniciar

## introdução basica 
a pagina pages é onde estão os html.
<br>
arquivos como css e js ficaram salvos na pasta public.
quando for usar o 
```
    <link rel="stylesheet" href="public/css/global.css">
```
retire o nome public
```
    <link rel="stylesheet" href="/css/global.css">
```
dessa forma com a "/" no começo
## explicação
foi feito ate agr com express portanto um framework e o não entendimento de certos conseitos não faram mal.
***
# ATENÇÃO 
se der erro algo não aparecer fale com comigo que provavelmente é o framework. alem disso a adição de outra pagina html necessita de configuração no framework portanto pode falar comigo