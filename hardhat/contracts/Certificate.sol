// Certificate.sol

pragma solidity ^0.8.7;

import './Ownable.sol';

contract Certificate is Ownable {
  mapping (bytes32 => address) public records;
  mapping (address => bytes32[]) public nfts;

  event CertificateIssued(bytes32 indexed record, uint256 timestamp, bool returnValue);

  function issueCertificate(string calldata name, string calldata details) external onlyOwner {
    bytes32 certificate = keccak256(abi.encodePacked(name, details));
    require(certificate != keccak256(abi.encodePacked("")));
    records[certificate] = msg.sender;
    nfts[msg.sender].push(certificate);
    emit CertificateIssued(certificate, block.timestamp, true);
  }

  function owningAuthority() external view returns (address) {
    return owner;
  }

  function getAllNFTs(address caller) public view returns (bytes32[] memory) {
    return nfts[caller];
  }

  function verifyCertificate(string calldata name, string calldata details, bytes32 certificate) external view returns (bool) {
    bytes32 certificate2 = keccak256(abi.encodePacked(name, details));
    // are certificates the same?
    if (certificate == certificate2) {
      // does the certificate exist on the blockchain?
      if (records[certificate] == owner) {
        return true;
      }
    }
    return false;
  }
}