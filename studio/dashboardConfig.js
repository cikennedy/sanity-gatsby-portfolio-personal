export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6140e2e796486112b73d093c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-personal-studio',
                  apiId: '4493e471-ce1b-4362-b141-b5d272802307'
                },
                {
                  buildHookId: '6140e2e7abdde0100aa9eb64',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-personal',
                  apiId: '3c5d1658-d535-43c9-a3d3-d39627951ea9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cikennedy/sanity-gatsby-portfolio-personal',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-personal.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
