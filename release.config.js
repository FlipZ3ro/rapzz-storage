module.exports = {
    extends: 'scratch-semantic-release-config',
    branches: [
        'main', // Tambahkan branch default 'main' di sini atau sesuaikan dengan branch default Anda
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
