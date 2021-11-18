export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '619636960e7889fb98a8ca82',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d2e67nk9',
                  apiId: '84274816-7857-4a7b-b287-be0ffb3f7e24'
                },
                {
                  buildHookId: '6196369667299f044af563b7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-79a28gpc',
                  apiId: '197e0ed2-a653-4c37-be1c-661c51f3ea35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RSBromley/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-79a28gpc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
