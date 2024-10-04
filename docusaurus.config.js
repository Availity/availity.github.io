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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
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
          to: 'https://availity.github.io/element',
          target: '_self',
          label: 'Element',
          position: 'right',
        },
        {
          to: 'https://availity.github.io/sdk-js',
          target: '_self',
          label: 'SDK-JS',
          position: 'right',
        },
        {
          to: 'https://availity.github.io/availity-workflow',
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
          title: 'Element Design System',
          items: [
            {
              label: 'Documentation',
              to: 'https://availity.github.io/element',
              target: '_self',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Availity/element',
            },
          ],
        },
        {
          title: 'Availity SDK-JS',
          items: [
            {
              label: 'Documentation',
              to: 'https://availity.github.io/sdk-js',
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
              to: 'https://availity.github.io/availity-workflow',
              target: '_self',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/availity/availity-workflow',
            },
          ],
        },
        {
          title: 'Availity React',
          items: [
            {
              label: 'Documentation',
              to: 'https://availity.github.io/availity-react',
              target: '_self',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/availity/availity-react',
            },
          ],
        },
        {
          title: 'Legacy Availity UIKit',
          items: [
            {
              label: 'Documentation',
              to: 'https://availity.github.io/availity-uikit',
              target: '_self',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Availity/availity-uikit',
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
  plugins: [require.resolve('./esm-plugin.js')],
};
