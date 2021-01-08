module.exports = {
  title: 'Availity Docs',
  tagline: "Healthcare can be complicated, but building web applications shouldn't be.",
  url: 'https://availity.github.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'availity',
  projectName: 'availity.github.io',
  themeConfig: {
    navbar: {
      title: 'Availity Docs',
      logo: {
        alt: 'Availity Docs Logo',
        src: 'img/icon.png',
        href: '/', // https://availity.github.io
        target: '_self',
      },
      items: [
        {
          href: 'https://availity.github.io/availity-react',
          target: '_self',
          label: 'React',
          position: 'right',
        },
        {
          href: 'https://availity.github.io/sdk-js',
          target: '_self',
          label: 'SDK-JS',
          position: 'right',
        },
        {
          href: 'availity.github.io/availity-workflow',
          target: '_self',
          label: 'Workflow',
          position: 'right',
        },
        {
          href: 'https://github.com/availity/availity.github.io',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Availity React',
          items: [
            {
              label: 'Documentation',
              href: 'https://availity.github.io/availity-react',
              target: '_self',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/availity/availity-react',
            },
          ],
        },
        {
          title: 'Availity SDK-JS',
          items: [
            {
              label: 'Documentation',
              href: 'https://availity.github.io/sdk-js',
              target: '_self',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/availity/sdk-js',
            },
          ],
        },
        {
          title: 'Availity Workflow',
          items: [
            {
              label: 'Documentation',
              href: 'https://availity.github.io/availity-workflow',
              target: '_self',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/availity/availity-workflow',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Made with ❤️ by Availity`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/availity/availity.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
