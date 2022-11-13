export const CERTIFICATE_CONTRACT_ADDRESS = "0x8826c56c4289d086417F78729731C32BaF31Df03";
export const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "record",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "CertificateIssued",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_of_issuer",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name_of_issued",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name_of_event",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "hash_of_document",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfs_of_document",
          "type": "string"
        }
      ],
      "name": "issueCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "records",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_of_issuer",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name_of_issued",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name_of_event",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "hash_of_document",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfs_of_document",
          "type": "string"
        }
      ],
      "name": "verifyCertificate",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];