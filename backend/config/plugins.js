// ./config/plugins.js
module.exports = ({ env }) => ({
    // ...
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook: `${env('VERCEL_DEPLOY_HOOK')}`,
            apiToken: `${env('VERCEL_API_TOKEN')}`,
            appFilter: `${env('VERCEL_APP_FILTER')}`,
            teamFilter: `${env('VERCEL_TEAM_FILTER')}`,
            roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
    },
    // ...
    // ...
    'preview-button': {
        enabled: true,
        resolve: './src/plugins/preview-button' // path to plugin folder
    },
    // ...
    // ...
    seo: {
        enabled: true,
    },
    // ...
    // ...
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                accessKeyId: `${env('AWS_ACCESS_KEY_ID')}`,
                secretAccessKey: `${env('AWS_ACCESS_SECRET')}`,
                region: `${env('AWS_REGION')}`,
                params: {
                    Bucket: `${env('AWS_BUCKET')}`,
                },
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // ...
    // ...

    'sitemap': {
        enabled: true,
        config: {
            autoGenerate: true,
            allowedFields: ['id', 'uid', 'slug', 'category'],
            excludedTypes: [],
        },
    },
    // ...
    'wysiwyg': {
        enabled: true,
        resolve: './src/plugins/wysiwyg'
    },

    // ...
})