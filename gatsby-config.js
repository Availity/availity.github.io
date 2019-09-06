module.exports = {
  siteMetadata: {
    title: "Avality Docs",
    // subtitle: "",
    description:
      "Healthcare can be complicated, but building web applications shouldn't be."
  },
  plugins: [
    {
      resolve: "@availity/gatsby-theme-core",
      options: {
        root: __dirname
      }
    },
    {
      // For compling `availity-react` modules
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: ["@availity/app-icon"]
      }
    }
  ]
};
