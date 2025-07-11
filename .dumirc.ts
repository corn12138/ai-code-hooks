import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',

  // 生产环境基础路径
  base: process.env.NODE_ENV === 'production' ? '/ai-code-hooks/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/ai-code-hooks/' : '/',

  // 开启静态导出
  exportStatic: {},

  // 开启 hash 路由
  hash: true,

  // 站点信息
  title: 'AI-Code Hooks',
  description: '🎣 强大的 React Hooks 库，助力现代 Web 开发',

  // 主题配置
  themeConfig: {
    name: 'AI-Code Hooks',
    logo: false,

    // 顶部导航
    nav: [
      { title: '🏠 首页', link: '/' },
      { title: '🚀 快速开始', link: '/guide' },
      { title: '🎮 交互示例', link: '/examples' },
      { title: '📚 Hooks', link: '/hooks' },
      { title: '🌟 GitHub', link: 'https://github.com/corn12138/ai-code-hooks' }
    ],

    // 侧边栏
    sidebar: {
      '/': [
        {
          title: '开始使用',
          children: [
            { title: '快速开始', link: '/guide' },
            { title: '交互式示例', link: '/examples' },
          ],
        },
        {
          title: 'Hooks API',
          children: [
            { title: 'useAuth', link: '/use-auth' },
            { title: 'useAsync', link: '/use-async' },
            { title: 'useForm', link: '/use-form' },
            { title: 'useNetworkStatus', link: '/use-network-status' },
            { title: 'useLocalStorage', link: '/use-local-storage' },
            { title: 'useWindowSize', link: '/use-window-size' },
            { title: 'useApi', link: '/use-api' },
            { title: 'useEditor', link: '/use-editor' },
            { title: 'useDebounce', link: '/use-debounce' },
            { title: 'useClientSide', link: '/use-client-side' },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: {
      github: 'https://github.com/corn12138/ai-code-hooks',
    },

    // 页脚
    footer: 'Copyright © 2024 AI-Code Hooks. Built with ❤️ using Dumi.',

    // 编辑链接
    editLink: false, // 暂时关闭编辑链接

    // 搜索功能
    search: true,

    // 多语言支持
    locales: [
      { id: 'zh-CN', name: '中文', base: '/' }
    ],

    // 代码高亮主题
    prism: {
      theme: 'github',
      darkTheme: 'github-dark',
    },
  },

  // 文档配置
  resolve: {
    docDirs: ['docs', 'src'],
  },

  // 禁用 MFSU 避免模块解析问题
  mfsu: false,

  // 添加 PWA 支持
  pwa: {
    manifestPath: '/manifest.json',
    themeColor: '#1677ff',
  },

  // 分析工具
  analytics: {
    // 可以添加 Google Analytics
    // ga: 'G-XXXXXXXXXX',
  },

  // 站点地图
  sitemap: {
    hostname: 'https://corn12138.github.io',
  },

  // 开发服务器配置
  devServer: {
    port: 8000,
    host: '0.0.0.0',
  },
}); 