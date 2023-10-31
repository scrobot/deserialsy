# Deserialsy
![CI Status](https://github.com/scrobot/deserialsy/workflows/Node.js%20Package/badge.svg)
[![npm version](https://badge.fury.io/js/deserialsy.svg)](https://badge.fury.io/js/deserialsy)


## Project Description
Deserialsy is a simple command-line tool designed to decode Solana base58-encoded keys. With just one command, users can quickly convert their Base58 keys into a byte array, revealing the public key and presenting it as a hexadecimal string.

## Installation

### From npm (for local usage)
To install Deserialsy for local usage in a project:
```shell
npm install deserialsy
```

# Globally

For a global installation (enabling use from any terminal location):

```shell
npm install -g deserialsy
```

# Usage

Once globally installed, you can run Deserialsy as follows:

```shell
deserialsy [YOUR_BASE58_KEY]
```

## Example

```shell
deserialsy 2J3Z4X5Y6W7V8U9T1A2B3C4D5E6F7G8H9J1K2L3M4N5P6Q7R8S9T1A2B3C4D5E
``` 

## Output

```shell
Decoded key in bytes format: <Byte Array Output>
Decoded public key: <Public Key Output>
Decoded key as a hexadecimal string: <Hexadecimal String Output>
```

> Note: Replace <Byte Array Output>, <Public Key Output>, and <Hexadecimal String Output> with actual example outputs if you'd like to provide concrete results in the README.

## Contributing

If you'd like to contribute to Deserialsy, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Links

- Project homepage: https://www.npmjs.com/package/deserialsy
- Repository: https://github.com/scrobot/deserialsy