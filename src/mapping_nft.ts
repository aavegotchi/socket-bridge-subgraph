import { BridgingTokens, TokensBridged } from "../generated/gotchi/NFTContract";
import { TokenContract } from "../generated/schema";
import { ChainId, TX_BRIDGED, TX_BRIDGING } from "./constants";
import { findTokenForChain, getOrCreateBridgeTransfer } from "./helper";

export function handleBridgingNFTsOnBaseSepolia(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.BASE_SEPOLIA);
  if (tokenContract) {
    handleBridgingNFTs(event, tokenContract);
  }
}

export function handleNFTsBridgedOnBaseSepolia(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.BASE_SEPOLIA);
  if (tokenContract) {
    handleNFTsBridged(event, tokenContract);
  }
}

export function handleBridgingNFTsOnPolter(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLTER);
  if (tokenContract) {
    handleBridgingNFTs(event, tokenContract);
  }
}

export function handleNFTsBridgedOnPolter(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLTER);
  if (tokenContract) {
    handleNFTsBridged(event, tokenContract);
  }
}

export function handleBridgingNFTsOnPolygon(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLTER);
  if (tokenContract) {
    handleBridgingNFTs(event, tokenContract);
  }
}

export function handleNFTsBridgedOnPolygon(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLTER);
  if (tokenContract) {
    handleNFTsBridged(event, tokenContract);
  }
}

export function handleBridgingNFTsOnGeist(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLTER);
  if (tokenContract) {
    handleBridgingNFTs(event, tokenContract);
  }
}

export function handleNFTsBridgedOnGeist(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLTER);
  if (tokenContract) {
    handleNFTsBridged(event, tokenContract);
  }
}

function handleBridgingNFTs(
  event: BridgingTokens,
  tokenContract: TokenContract
): void {
  // TODO: Implement
  const txHash = event.transaction.hash;
  const id = txHash.toHex();
  let entity = getOrCreateBridgeTransfer(id);
  entity.messageId = event.params.messageId;
  entity.tokenContract = tokenContract.id;
  entity.connector = event.params.connector;
  entity.sender = event.params.sender;
  entity.receiver = event.params.receiver;
  entity.amount = event.params.amount;
  entity.fee = event.transaction.value;
  entity.txHash = txHash;
  entity.timestamp = event.block.timestamp;
  entity.type = TX_BRIDGING;
  entity.tokenId = event.params.tokenId;
  entity.blockNumber = event.block.number;
  entity.save();
}

function handleNFTsBridged(
  event: TokensBridged,
  tokenContract: TokenContract
): void {
  // TODO: Implement

  const txHash = event.transaction.hash;
  const id = txHash.toHex();
  let entity = getOrCreateBridgeTransfer(id);
  entity.messageId = event.params.messageId;
  entity.tokenContract = tokenContract.id;
  entity.connector = event.params.connecter;
  entity.receiver = event.params.receiver;
  entity.amount = event.params.amount;
  entity.txHash = txHash;
  entity.timestamp = event.block.timestamp;
  entity.type = TX_BRIDGED;
  entity.tokenId = event.params.tokenId;
  entity.blockNumber = event.block.number;
  entity.save();
}
