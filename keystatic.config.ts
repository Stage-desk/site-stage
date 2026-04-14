import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { data: 'yaml', contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição (SEO)', multiline: true }),
        pubDate: fields.date({ label: 'Data de Publicação' }),
        author: fields.text({ label: 'Autor' }),
        category: fields.text({ label: 'Categoria' }),
        readTime: fields.text({ label: 'Tempo de Leitura (Ex: 5 min)' }),
        // Upload real de imagem de capa
        image: fields.image({ 
          label: 'Imagem de Capa',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
          validation: { isRequired: true }
        }),
        // Editor expandido com suporte a imagens no texto
        content: fields.document({
          label: 'Conteúdo do Artigo',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
});
