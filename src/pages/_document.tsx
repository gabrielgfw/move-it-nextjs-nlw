import Document, { Html, Head, Main, NextScript } from 'next/document';

// Esta classe tem a finalidade de aplicar configurações estáticas.

// Este arquivo também tem a vantagem de ser chamado apenas uma única vez,
// independentemente da quantidade de acessos que o client faça.

// Main chama o restante da aplicação.
// NextScript acrescenta arquivos de scripts próprios do NextJs.

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="imagem/png"/> 

          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}