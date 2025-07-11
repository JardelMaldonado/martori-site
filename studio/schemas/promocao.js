export default {
    name: 'descricoesPromocoes',

    title: 'Descrições dos Cards de Promoção',

    type: 'document',

    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],

    fields: [
        {
            name: 'descricaoInstrumentos',
            title: 'Descrição do Card de INSTRUMENTOS',
            type: 'text',
        },
        {
            name: 'descricaoComponentes',
            title: 'Descrição do Card de COMPONENTES',
            type: 'text',
        },
        {
            name: 'descricaoFerramental',
            title: 'Descrição do Card de FERRAMENTAL',
            type: 'text',
        },
    ],
}
