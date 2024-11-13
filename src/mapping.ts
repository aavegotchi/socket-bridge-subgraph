import { BridgingTokens, TokensBridged } from "../generated/kek/Contract";
import { TokenContract } from "../generated/schema";
import { Network, TX_BRIDGED, TX_BRIDGING } from "./constants";
import { findTokenForChain, getOrCreateBridgeTransfer } from "./helper";

export function handleBridgingTokensOnPolygon(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, Network.POLYGON);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnPolygon(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, Network.POLYGON);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

export function handleBridgingTokensOnBase(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, Network.BASE);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnBase(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, Network.BASE);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

export function handleBridgingTokensOnGeist(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, Network.GEIST);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnGeist(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, Network.GEIST);
  if (tokenContract) {
    handleTokensBridged(event, tokenContract);
  }
}

export function handleBridgingTokensOnPolter(event: BridgingTokens): void {
  let tokenContract = findTokenForChain(event.address, Network.POLTER);
  if (tokenContract) {
    handleBridgingTokens(event, tokenContract);
  }
}

export function handleTokensBridgedOnPolter(event: TokensBridged): void {
  let tokenContract = findTokenForChain(event.address, Network.POLTER);
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
  entity.save();
}
