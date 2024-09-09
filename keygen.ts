import { Keypair } from "@solana/web3.js";
// Now we should create a keypair, like this:

// Generate a new keypair
let kp = Keypair.generate();
console.log(`You have generate a new Solana wallet: ${kp.publicKey.toBase58()}`);

console.log(`Solana wallet secret key: ${kp.secretKey}`);
