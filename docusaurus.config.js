const fs = require("fs");
const jwt = require('jsonwebtoken');
const axios = require('axios');

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LHTP',
  tagline: 'Learn How to Program',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://learnhowtoprogram.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'epicodus', // Usually your GitHub org/user name.
  projectName: 'textbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: [require.resolve("./plugins/fetch-github-content")],

  // plugins: [
  //   [
  //     "docusaurus-plugin-remote-content",
  //     {
  //         name: "some-content", // used by CLI, must be path safe
  //         sourceBaseUrl: "https://raw.githubusercontent.com/epicodus-classroom/testing/main", // the base url for the markdown (gets prepended to all of the documents when fetching)
  //         outDir: "docs", // the base directory to output to.
  //         documents: ["README.md"], // the file names to download
  //         request_config: {
  //           baseURL: 'https://api.github.com/repos/epicodus-classroom/testing',
  //           headers: {
  //             Accept: 'application/vnd.github.raw+json',
  //             Authorization: `Bearer ${getInstallationAccessToken()}`,
  //           },
  //         }
  //     },
  //   ],
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/epicodus-classroom/intro-curriculum/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Learn How to Program',
        logo: {
          alt: 'Learn How to Program',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'foo/test',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Epicodus, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
