import * as bs58 from 'bs58';
import { execSync } from 'child_process';
import { Keypair } from '@solana/web3.js';

describe('Deserialsy - Base58 Decoder', () => {
    const keypair = Keypair.generate();
    const validKey = bs58.encode(keypair.secretKey);

    const runUtility = (input: string) => {
        try {
            return execSync(`npm run decode -- ${input}`, { encoding: 'utf8', stdio: [0, 'pipe', 'pipe'] }).toString();
        } catch (error: any) {
            return error.stderr.toString();
        }
    };

    test('should decode a valid Base58 key', () => {
        const result = runUtility(validKey);
        console.log(result)
        expect(result).toContain("Decoded key in bytes format:");
    });

    test('should fail for an invalid Base58 format', () => {
        const invalidKey = "INVALID_KEY_12345";
        const result = runUtility(invalidKey);
        console.log(result)
        expect(result).toContain("Non-base58 character");
    });

    test('should fail for a too short Base58 key', () => {
        const shortKey = "SHORT";
        const result = runUtility(shortKey);
        expect(result).toContain("An error occurred during decoding:");
    });

    test('should fail for a too long Base58 key', () => {
        const longKey = "LONGKEY".repeat(20);
        const result = runUtility(longKey);
        expect(result).toContain("An error occurred during decoding:");
    });

    test('should fail for a Base58 key with special characters', () => {
        const specialKey = validKey + "!@#";
        const result = runUtility(specialKey);
        expect(result).toContain("An error occurred during decoding:");
    });
});
