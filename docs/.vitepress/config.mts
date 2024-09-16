import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Policy Reporter",
  description: "Documentation for Policy Reporter",
  themeConfig: {
    logo: '/assets/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Resources', link: '/getting-started/resources' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Helm Chart', link: '/getting-started/helm' },
          { text: 'Resources', link: '/getting-started/resources' },
        ]
      },
      {
        text: 'Policy Reporter',
        items: [
          { text: 'Report Processing', link: '/policy-reporter/report-processing' },
          { text: 'Persistence', link: '/policy-reporter/persistence' },
          { text: 'Integrations | Targets', link: '/policy-reporter/integrations' },
          { text: 'Metrics', link: '/policy-reporter/metrics' },
          { text: 'E-Mail Reports', link: '/policy-reporter/email-reports' },
        ]
      },
      {
        text: 'Policy Reporter UI',
        items: [
          { text: 'Introduction', link: '/policy-reporter-ui/introduction' },
          { text: 'Customization', link: '/policy-reporter-ui/customization' },
          { text: 'Source Configuration', link: '/policy-reporter-ui/source-config' },
          { text: 'Authentication', link: '/policy-reporter-ui/authentication' },
          { text: 'Custom Boards', link: '/policy-reporter-ui/custom-boards' },
          { text: 'Multi Tenant', link: '/policy-reporter-ui/multi-tenant' },
        ]
      },
      {
        text: 'Plugin System',
        items: [
          { text: 'Introduction', link: '/plugin-system/introduction' },
          { text: 'Kyverno Plugin', link: '/plugin-system/kyverno-plugin' },
          { text: 'Trivy Plugin', link: '/plugin-system/trivy-plugin' },
        ]
      }
    ],

    outline: {
      level: [2, 3],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kyverno/policy-reporter' }
    ]
  }
})
