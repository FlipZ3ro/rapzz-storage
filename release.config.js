const baseConfig = require('scratch-semantic-release-config');

module.exports = {
    ...baseConfig,
    branches: [
        ...baseConfig.branches,
        {
            name: 'develop',
            channel: 'next' // Tentukan saluran 'next' untuk branch 'develop'
        },
        {
            name: 'hotfix/*',
            channel: 'hotfix', // Tentukan saluran 'hotfix' untuk branch 'hotfix/*'
            prerelease: 'hotfix'
        }
    ]
};

