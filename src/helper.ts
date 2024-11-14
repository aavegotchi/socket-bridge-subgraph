import { Address } from "@graphprotocol/graph-ts";
import { BridgeTransfer, TokenContract } from "../generated/schema";
import { ChainId, getTokensForNetwork } from "./constants";

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

export function findTokenForChain(
  vault: Address | null,
  network: ChainId
): TokenContract | null {
  const tokens = getTokensForNetwork(network);

  if (vault && tokens) {
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      let vaultAddress = token.vault || token.controller;

      const symbol = token.symbol;
      const tokenType = token.type;

      let tokenAddress = token.address;

      if (
        vaultAddress &&
        vault.equals(Address.fromString(vaultAddress)) &&
        tokenAddress &&
        symbol &&
        tokenType
      ) {
        const tokenContract = fetchToken(Address.fromString(tokenAddress));
        tokenContract.symbol = symbol;
        tokenContract.type = tokenType;
        tokenContract.save();
        return tokenContract;
      }
    }
  }
  return null;
}
