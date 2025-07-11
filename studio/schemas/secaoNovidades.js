export default {
    name: 'secaoNovidades',

    title: 'Seção de Novidades das Páginas',

    type: 'document',

    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],

    fieldsets: [
        { name: 'componentes', title: 'Página de Componentes' },
        { name: 'instrumentos', title: 'Página de Instrumentos' },
        { name: 'maquinas', title: 'Página de Máquinas' },
        { name: 'ferramentas', title: 'Página de Ferramentas' },
    ],

    fields: [
        {
            name: 'tituloComponentes',
            title: 'Título da Seção "Novidades"',
            type: 'string',

            fieldset: 'componentes',

            initialValue: 'Novidades em Componentes',
        },
        {
            name: 'descricaoComponentes',
            title: 'Descrição',
            type: 'text',
            rows: 5,
            fieldset: 'componentes',
        },

        {
            name: 'tituloInstrumentos',
            title: 'Título da Seção "Novidades"',
            type: 'string',
            fieldset: 'instrumentos',
            initialValue: 'Novidades em Instrumentos',
        },
        {
            name: 'descricaoInstrumentos',
            title: 'Descrição',
            type: 'text',
            rows: 5,
            fieldset: 'instrumentos',
        },

        {
            name: 'tituloMaquinas',
            title: 'Título da Seção "Novidades"',
            type: 'string',
            fieldset: 'maquinas',
            initialValue: 'Novidades em Máquinas e Equipamentos',
        },
        {
            name: 'descricaoMaquinas',
            title: 'Descrição',
            type: 'text',
            rows: 5,
            fieldset: 'maquinas',
        },

        {
            name: 'tituloFerramentas',
            title: 'Título da Seção "Novidades"',
            type: 'string',
            fieldset: 'ferramentas',
            initialValue: 'Novidades em Ferramentas',
        },
        {
            name: 'descricaoFerramentas',
            title: 'Descrição',
            type: 'text',
            rows: 5,
            fieldset: 'ferramentas',
        },
    ],
}
