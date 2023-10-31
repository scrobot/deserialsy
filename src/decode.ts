#!/usr/bin/env node
import * as bs58 from 'bs58';

// Constants for text messages
const MISSING_INPUT_MSG = "Please provide a secret key in Base58 format.";
const DECODED_BYTES_MSG = "Decoded key in bytes format:";
const DECODED_PUBLIC_KEY_MSG = "Decoded public key:";
const DECODED_HEX_STRING_MSG = "Decoded key as a hexadecimal string:";
const DECODING_ERROR_MSG = "An error occurred during decoding:";

const base58Input = process.argv[2];

if (!base58Input) {
    console.error(MISSING_INPUT_MSG);
    process.exit(1);
}

try {
    const decoded = bs58.decode(base58Input);
    console.log(DECODED_BYTES_MSG, decoded);
    console.log(DECODED_PUBLIC_KEY_MSG, bs58.encode(decoded.slice(32, 64)));
    console.log(DECODED_HEX_STRING_MSG, decoded.toString());
} catch (error: any) {
    console.error(DECODING_ERROR_MSG, error.message);
    process.exit(1);
}
