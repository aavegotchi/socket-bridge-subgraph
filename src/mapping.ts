import {BridgingTokens, TokensBridged} from "../generated/kek/Contract"
import {findBaseToken, findPolygonToken, getOrCreateBridgeTransfer} from "./helper"
import {TokenContract} from "../generated/schema";
import {TX_BRIDGED, TX_BRIDGING} from "./constants";

export function handleBridgingTokensOnPolygon(event: BridgingTokens): void {
    let tokenContract = findPolygonToken(event.address)
    if (tokenContract) {
        handleBridgingTokens(event, tokenContract);
    }
}

export function handleTokensBridgedOnPolygon(event: TokensBridged): void {
    let tokenContract = findPolygonToken(event.address)
    if (tokenContract) {
        handleTokensBridged(event, tokenContract);
    }
}

export function handleBridgingTokensOnBase(event: BridgingTokens): void {
    let tokenContract = findBaseToken(event.address)
    if (tokenContract) {
        handleBridgingTokens(event, tokenContract);
    }
}

export function handleTokensBridgedOnBase(event: TokensBridged): void {
    let tokenContract = findBaseToken(event.address)
    if (tokenContract) {
        handleTokensBridged(event, tokenContract);
    }
}

function handleBridgingTokens(event: BridgingTokens, tokenContract: TokenContract): void {
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

function handleTokensBridged(event: TokensBridged, tokenContract: TokenContract): void {
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
