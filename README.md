# Geek Stor

Bem-vindo à Geek Stor, a sua loja online para produtos geek incríveis. Este é um projeto de página inicial simples que destaca a marca, apresenta um menu de navegação e fornece um espaço para o conteúdo principal.

## Conteúdo

### Estrutura do HTML

O arquivo HTML (`index.html`) contém a estrutura básica da página, incluindo cabeçalho, conteúdo principal e a inclusão de estilos CSS e script JavaScript.

### Cabeçalho
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=], initial-scale=1.0">
    <title>Geek Stor</title>
    <link rel="stylesheet" href="style.css">
</head>
```
O cabeçalho define o conjunto de caracteres, a compatibilidade com o navegador, a configuração da viewport, o título da página e inclui um link para o arquivo de estilo externo.

### Logo e Menu de Navegação
```html
<header class="cabecalho flex">
    <section class="logoFlex">
        <img src="logo.svg" alt="logo">
    </section>
    <nav class="menu menuFlex">
        <button class="botaoproduto" type="submit">Produtos</button>
        <button class="botaocontato" type="submit">Contatos</button>
    </nav>
</header>
```
O cabeçalho contém o logotipo (logo.svg) da Geek Stor e um menu de navegação com botões para "Produtos" e "Contatos".

### Conteúdo Principal
```html
<main class="conteudo mainFlex">
    <!-- ... -->
</main>
```
A seção principal é reservada para o conteúdo da página.

### Scripts
```html
<script src="script.js"></script>
```
O arquivo de script JavaScript (`script.js`) é incluído para adicionar interatividade à página.

## Estilos CSS

Os estilos CSS estão organizados no arquivo `style.css` e são vinculados ao HTML para estilizar a aparência da página.

## Estrutura Flexível

A estrutura do HTML utiliza flexbox para criar um layout flexível e responsivo.

## Como Contribuir

Se você quiser contribuir para este projeto ou sugerir melhorias, sinta-se à vontade para fazer um fork do repositório e enviar suas pull requests.

Obrigado por visitar a Geek Stor! Explore nossos produtos geek incríveis.
