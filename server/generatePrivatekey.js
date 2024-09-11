const { generateKeyPairSync } = require('crypto');
const { writeFileSync } = require('fs');

// Generate an Ed25519 key pair
const { privateKey } = generateKeyPairSync('ed25519');

// Export the private key in PEM format
const pemPrivateKey = privateKey.export({
    type: 'pkcs8',
    format: 'pem'
});

// Save the private key to a file called 'private-key.pem'
writeFileSync('private-key.pem', pemPrivateKey);

console.log('Private key saved to private-key.pem');