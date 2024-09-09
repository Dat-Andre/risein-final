import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { wallet } from "./dev-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Connect to the cluster
const connection = new Connection("https://api.devnet.solana.com");
console.log("Public key:", keypair.publicKey.toBase58());
(async () => {
  try {
    // claim 2 devnet SOL tokens
    const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
    console.log(`Done! This is the TX: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Something went wrong: ${e}`);
  }
})();
