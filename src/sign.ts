#!/usr/bin/env node

import {
    Keypair,
    Connection,
    VersionedTransaction,
    PublicKey,
    LAMPORTS_PER_SOL,
    SystemProgram,
    TransactionMessage
} from '@solana/web3.js';
import * as bs58 from 'bs58';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Функция для подписания транзакции
export async function signTransaction(instructionBase58: string, recentBlockhash: string, privateKeyBase58: string): Promise<string> {
    // Декодирование приватного ключа
    const privateKeyBytes = bs58.decode(privateKeyBase58);
    const keypair = Keypair.fromSecretKey(privateKeyBytes);

    // Декодирование инструкции
    const instructionBytes = bs58.decode(instructionBase58);

    // Создание транзакции из байтов инструкции
    const transaction = VersionedTransaction.deserialize(instructionBytes);

    // Обновление recentBlockhash
    transaction.message.recentBlockhash = recentBlockhash;

    // Подписание транзакции
    transaction.sign([keypair]);

    // Возврат подписанной транзакции
    return bs58.encode(transaction.serialize());
}

// Настройка yargs для получения аргументов командной строки
const argv = yargs(hideBin(process.argv))
    .option('instruction', {
        alias: 'i',
        type: 'string',
        description: 'Instruction in base58 format',
        demandOption: true,
    })
    .option('blockhash', {
        alias: 'b',
        type: 'string',
        description: 'Recent blockhash in base58 format',
        demandOption: true,
    })
    .option('privateKey', {
        alias: 'p',
        type: 'string',
        description: 'Private key in base58 format',
        demandOption: true,
    })
    .help()
    .alias('help', 'h')
    .argv as { instruction: string; blockhash: string; privateKey: string };

// Пример использования
async function main() {
    const { instruction, blockhash, privateKey } = argv;

    const tx = await signTransaction(instruction, blockhash, privateKey)

    console.log(tx);
}

main();
