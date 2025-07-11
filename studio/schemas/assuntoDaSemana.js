export default {
  name: 'assuntoDaSemana',

  title: 'Assunto da Semana',

  type: 'document',

  fields: [
    {
      name: 'titulo',
      title: 'Título Principal',
      description: 'Este é o título grande que aparece no topo. Exemplo: ASSUNTO DA SEMANA',
      type: 'string',

      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragrafos',
      title: 'Conteúdo (Parágrafos)',
      description:
        'Este é o texto principal. O editor de texto permite criar múltiplos parágrafos, usar negrito, etc.',

      type: 'blockContent',
    },
  ],

  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
}
