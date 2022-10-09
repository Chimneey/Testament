// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @custom:security-contact jermaine@gmail.com
contract MyNFT is ERC721 {
    constructor() ERC721("MyNFT", "MNFT") {
    }
}