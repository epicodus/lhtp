// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubTheme = require('prism-react-renderer/themes/github');
const nightOwlTheme = require('prism-react-renderer/themes/nightOwl');
const nightOwlLightTheme = require('prism-react-renderer/themes/nightOwlLight');
const palenightTheme = require('prism-react-renderer/themes/palenight');
const vsDarkTheme = require('prism-react-renderer/themes/vsDark');
const vsLightTheme = require('prism-react-renderer/themes/vsLight');

const remarkDisableTokenizers = require('remark-disable-tokenizers');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LHTP',
  tagline: 'Learn How to Program',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://epicodus.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lhtp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'epicodus', // Usually your GitHub org/user name.
  projectName: 'lhtp', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // plugins: [
  //   [
  //     require.resolve("./plugins/fetch-github-content"),
  //     {
  //       repo: 'testing',
  //       outDir: 'docs',
  //       filenames: ['README.md', 'dei_1_independent_project.md']
  //     }
  //   ]
  // ],

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
          remarkPlugins: [
            [
              remarkDisableTokenizers,
              { block: ['indentedCode'] },
            ],
          ],
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Learn How to Program',
        logo: {
          alt: 'Learn How to Program',
          src: 'img/lhtp-favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'courses',
            position: 'left',
            label: 'Courses',
          },
          {
            type: 'doc',
            docId: 'student-handbook',
            position: 'left',
            label: 'Handbook',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Epicodus, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'ruby'],
      },
    }),
};

module.exports = config;
