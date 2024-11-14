import { BridgingTokens, TokensBridged } from "../generated/ghst/Contract";
import { TokenContract } from "../generated/schema";
import { ChainId, TX_BRIDGED, TX_BRIDGING } from "./constants";
import { findTokenForChain, getOrCreateBridgeTransfer } from "./helper";

export function handleBridgingTokensOnPolygon(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLYGON);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnPolygon(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLYGON);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

export function handleBridgingTokensOnAmoy(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLYGON_AMOY);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnAmoy(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLYGON_AMOY);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

export function handleBridgingTokensOnBase(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.BASE);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnBase(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.BASE);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

export function handleBridgingTokensOnGeist(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.GEIST);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnGeist(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.GEIST);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

export function handleBridgingTokensOnPolter(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLTER);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnPolter(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.POLTER);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

export function handleBridgingTokensOnBaseSepolia(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, ChainId.BASE_SEPOLIA);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnBaseSepolia(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, ChainId.BASE_SEPOLIA);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

function handleBridgingTokens(
  event: BridgingTokens,
  tokenContract: TokenContract
): void {
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
  entity.blockNumber = event.block.number;
  entity.save();
}

function handleTokensBridged(
  event: TokensBridged,
  tokenContract: TokenContract
): void {
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
  entity.blockNumber = event.block.number;
  entity.save();
}
