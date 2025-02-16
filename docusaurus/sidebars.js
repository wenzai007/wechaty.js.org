const CHATBOT_1_TO_2 = require('./sidebar-chatbot-1-to-2.js')

module.exports = {
  docs: {
    Introduction: [
      'introduction/README',
      'introduction/rpa',
      'introduction/puppet',
      'introduction/motivations',
      'introduction/concepts',
      'introduction/architecture',
      'introduction/lifecycle',
      'examples',
      'examples2',
      'introduction/alternatives',
    ],
    'Getting Started': [
      'getting-started',
    ],
    Tutorials: [
      'tutorials/README',
      'tutorials/video-tutorial',
      CHATBOT_1_TO_2,
    ],
    'Polyglot': [
      'polyglot/README',
      'polyglot/typescript',
      'polyglot/python',
      'polyglot/go',
      'polyglot/java',
      'polyglot/scala',
      'polyglot/php',
      'polyglot/dotnet',
      'polyglot/rust',
      'polyglot/diy',
    ],
    Recipes: [
      'recipes/README',
      'recipes/wechaty',
      'recipes/event',
      'recipes/message',
      'recipes/contact',
      'recipes/room',
      'recipes/friendship',
      'recipes/file-box',
      'recipes/usage-with-typescript',
      'recipes/usage-with-docker',
      'recipes/usage-with-heroku',
      'recipes/using-plugin-with-wechaty',
      'recipes/using-vorpal-with-wechaty',
      'recipes/using-redux-with-wechaty',
    ],
    'Case Study': [
      'case-study/README',
      'case-study/coaxer-bot',
    ],
    'Showcases': [
      'showcases/README',
      'showcases/osschat-bot',
      'showcases/rui-bot',
      'showcases/friday-bot',
      'showcases/projects-using-wechaty',
    ],
    'Puppet Providers': [
      'puppet-providers/README',
      'puppet-providers/wechat',
      'puppet-providers/whatsapp',
      'puppet-providers/official-account',
      'puppet-providers/gitter',
      'puppet-providers/lark',
      'puppet-providers/padlocal',
      'puppet-providers/wechat4u',
      'puppet-providers/service',
      'puppet-providers/mock',
      'puppet-providers/diy',
    ],
    'Puppet Services': [
      'puppet-services/README',
      'puppet-services/wxwork',
      'puppet-services/padlocal',
      'puppet-services/paimon',
      'puppet-services/donut',
      'puppet-services/compatibility',
      'puppet-services/diy',
    ],
    'Contributor Program': [
      'contributor-program/README',
      'contributor-program/publish-blog',
    ],
    'Events': [
      'events',
      'bot5/README',
      {
        type: 'category',
        label: '开源软件供应链点亮计划',
        items: [
          'ospp/README',
          'ospp/2021',
          'ospp/2020',
        ],
      },
      'gsod/README',
      {
        type: 'category',
        label: 'Google Summer of Code',
        items: [
          'gsoc/README',
          'gsoc/2021',
        ],
      },
    ],
    'API Reference': [
      'api/README',
      'api/wechaty',
      'api/message',
      'api/contact',
      'api/room',
      'api/room-invitation',
      'api/friendship',
    ],
    Specifications: [
      'specifications/README',
      'specifications/wechaty',
      'specifications/puppet',
      'specifications/service',
      'specifications/token',
    ],
    FAQ: ['faq'],
    Troubleshooting: [
      'troubleshooting',
    ],
    Others: [
      'changelog',
      'cheatsheet',
      'awesome-wechaty',
      'advanced',
      'resources',
      'glossary',
      'contributing',
      {
        type: 'category',
        label: 'Docusaurus',
        items: [
          'test/doc1',
          'test/doc2',
          'test/doc3',
          'test/mdx',
        ],
      },
    ],
  },
}
