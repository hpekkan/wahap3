// SPDX-License-Identifier: MIT
// Certificate.sol

pragma solidity ^0.8.7;

contract Certificate {
  mapping (bytes32 => string[2]) public records;

  event CertificateIssued(bytes32 indexed record, uint256 timestamp);

  function issueCertificate(string calldata name_of_issuer, string calldata name_of_issued, string calldata name_of_event, 
                            uint time, string calldata hash_of_document, string calldata ipfs_of_document) external {
    bytes32 certificate_id = keccak256(abi.encodePacked(name_of_issuer, name_of_issued, name_of_event, time));
    require(certificate_id != keccak256(abi.encodePacked("")));
    records[certificate_id] = [hash_of_document, ipfs_of_document];
    emit CertificateIssued(certificate_id, block.timestamp);
  }

  function verifyCertificate(string calldata name_of_issuer, string calldata name_of_issued, string calldata name_of_event, 
                            uint time, string calldata hash_of_document, string calldata ipfs_of_document) external view returns (bool) {
    bytes32 certificate_id = keccak256(abi.encodePacked(name_of_issuer, name_of_issued, name_of_event, time));

    if (records[certificate_id].length == 0 || keccak256(bytes(records[certificate_id][0]))    != keccak256(bytes(hash_of_document)) ) 
        return false;
    return true;
    }
  }
