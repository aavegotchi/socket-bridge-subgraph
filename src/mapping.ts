import {BridgingTokens, TokensBridged} from "../generated/kek/Contract"
import {findPolygonToken, getOrCreateBridgeTransfer} from "./helper"

export function handleBridgingTokens(event: BridgingTokens): void {
    let tokenContract = findPolygonToken(event.transaction.to)
    if (tokenContract) {
        const txHash = event.transaction.hash;
        const id = txHash.toHex();

        let entity = getOrCreateBridgeTransfer(id);
        entity.tokenContract = tokenContract.id;
        entity.connector = event.params.connector;
        entity.from = event.params.sender;
        entity.to = event.params.receiver;
        entity.amount = event.params.amount;
        entity.messageId = event.params.messageId;
        entity.fee = event.transaction.value;
        entity.txHash = txHash;
        entity.timestamp = event.block.timestamp;
        entity.save();
    }
}

export function handleTokensBridged(event: TokensBridged): void {
    // TODO
}
