module.exports = {
  siteMetadata: {
    title: `Quad Financial`,
    description: `A QUAD Financial é uma empresa de análise de investimentos, com foco no mercado de ações. Desenvolvemos o Método M4D, uma abordagem de investimento sem precedentes no mercado financeiro. Com ele, é possível extrair o sinal emitido por cada dimensão do mercado de ações e assim mensurar o risco de exposição ao mercado. A partir disso, construímos nossa estratégia de investimentos visando obter retornos consistentes no médio prazo.`,
    author: `@benehur.pessoa`,
    siteUrl: `https://quadfinancial.com.br/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,400,600,800`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quad Financial`,
        short_name: `QF`,
        start_url: `/`,
        description: `A QUAD Financial é uma empresa de análise de investimentos, com foco no mercado de ações.`,
        background_color: `#172331`,
        theme_color: `#f32530`,
        orientation: `portrait`,
        display: `minimal-ui`,
        scope: `/`,
        icon: `src/images/favQuad.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
