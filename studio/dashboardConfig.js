export default {
  widgets: [
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
                  buildHookId: '63555f87e2dc260a41788da7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1x3c6cs1',
                  apiId: 'bc17b6bb-9d18-4c3b-8771-89db1ef18724'
                },
                {
                  buildHookId: '63555f87e201e0123f94a116',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1b41p6r7',
                  apiId: '66f9ccbf-3488-42a2-836e-ae6013259e20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Joelk97/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1b41p6r7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
