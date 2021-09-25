module.exports = {
  webpack: function (config, options) {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "less-loader",
        },
      ],
    });

    return config;
  },

  env: {
    MAIL_CHIMP_URL: "YGGarcia.us5.list-manage.com",
    MAIL_CHIMP_USER: "9b12a7395b94d2a533746ba84",
    MAIL_CHIMP_ID: "e3fa2be9a0",
    APOLLO_URL: "http://localhost:5000/graphql",
  },
};
