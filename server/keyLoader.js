import { promises as fs } from 'fs';
import { createPrivateKey } from 'crypto';
import path from 'path';

// Load the private key once
let privateKey;

async function loadPrivateKey() {
  try {
    const privateKeyPath = path.join(__dirname, process.env.JWT_PRIVATE_KEY_PATH);
    const privateKeyPem = await fs.readFile(privateKeyPath, 'utf8');
    privateKey = createPrivateKey({
      key: privateKeyPem,
      format: 'pem',
      type: 'pkcs8',
    });
  } catch (error) {
    console.error('Error loading private key:', error);
    throw error;
  }
}

export { privateKey, loadPrivateKey };