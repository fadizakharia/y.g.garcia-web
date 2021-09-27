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
  images: {
    domains: ["s3.us-east-2.amazonaws.com"],
  },
};
