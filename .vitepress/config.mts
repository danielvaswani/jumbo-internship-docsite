import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Jumbo Internship",
  description: "This is the documentation for my Jumbo Internship",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Project Management', link: 'project-management/index.md', items: [
              { text: 'Learning Outcomes', link: 'project-management/learning-outcomes.md' },
              { text: 'Way of working', link: 'project-management/way-of-working.md' },
              { text: 'Logbook', link: 'project-management/logbook.md'},
              { text: 'FeedPulse', link: 'project-management/feed-pulse.md'},
              { text: 'Reflections', link: 'project-management/reflections.md'}
            ]
          },
          { text: 'Research', link: 'research/index.md', items: [
            { text: 'User Centered Design', link: 'research/user-centered-design.md' },
            { text: 'Design Systems', link: 'research/design-systems.md' },            
            { text: 'Contribution Model', link: 'research/contribution-model.md' },            
            { text: 'App Architecture', link: 'research/app-architecture.md' },
          ]},
          { text: 'Design', link: 'design/index.md', items: [{text: 'Rapid Prototyping', link: 'design/rapid-prototyping.md'}]},
          { text: 'Design', link: 'design/index.md', items: [{text: 'About Kompas', link: 'design/about-kompas.md'}]},
          { text: 'Development', link: 'development/index.md', items: [{ text: 'KompasAnalyser', link: 'development/kompas-analyser.md' }, { text: 'Portfolio site', link: 'development/portfolio-site.md' }]},
          { text: 'Showcase', link: 'showcase/index.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/danielvaswani' }
    ],
  },
}
)
