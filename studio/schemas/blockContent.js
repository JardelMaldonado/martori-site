export default {
    name: 'blockContent',

    title: 'Block Content',

    type: 'array',

    of: [
        {
            title: 'Block',
            type: 'block',

            styles: [{ title: 'Normal', value: 'normal' }],

            lists: [{ title: 'Bullet', value: 'bullet' }],

            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },

                    { title: 'Emphasis', value: 'em' },
                ],
            },
        },
    ],
}
