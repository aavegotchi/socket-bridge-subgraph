import {Address} from "@graphprotocol/graph-ts";
import {BridgeTransfer, TokenContract} from "../generated/schema";
import {polygonBridgeAddresses} from "./constants";

export function fetchToken(address: Address): TokenContract {
    let contract = TokenContract.load(address);

    if (contract == null) {
        contract = new TokenContract(address);
    }

    return contract as TokenContract;
}

export function getOrCreateBridgeTransfer(id: string): BridgeTransfer {
    let entity = BridgeTransfer.load(id);
    if (entity === null) {
        entity = new BridgeTransfer(id);
    }
    return entity;
}

export function findPolygonToken(vault: Address | null): TokenContract | null {
    const bridgeAddresses = polygonBridgeAddresses()
    if(vault){
        for(let i=0; i<bridgeAddresses.length; i++) {
            const addressParams = bridgeAddresses[i];
            const vaultAddress = addressParams.get('Vault')
            const symbol = addressParams.get('Symbol')
            const tokenType = addressParams.get('Type')
            const tokenAddress = vaultAddress && (vault.equals(Address.fromString(vaultAddress))) ? addressParams.get('NonMintableToken') : null;
            if(tokenAddress && symbol && tokenType) {
                const tokenContract  = fetchToken(Address.fromString(tokenAddress));
                tokenContract.symbol = symbol;
                tokenContract.type = tokenType;
                tokenContract.save();
                return tokenContract
            }
        }
    }
    return null;
}
