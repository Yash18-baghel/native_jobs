// app.config.js

const { expo } = require('./app.json');

module.exports = {
    name: expo.name,
    slug: expo.slug,
    version: expo.version,
    expo,
    config: ({ config }) => {
        // Mutate static config values
        config.extra = {
            apiKey: 'your-api-key',
            expo,
        };
        // Return modified config
        return config;
    },
};
