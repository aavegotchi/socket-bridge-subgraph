import { Address } from "@graphprotocol/graph-ts";
import { BridgeTransfer, TokenContract } from "../generated/schema";
import { bridgeAddressesForNetwork, Network } from "./constants";

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
  network: Network
): TokenContract | null {
  const bridgeAddresses = bridgeAddressesForNetwork(network);
  if (vault) {
    for (let i = 0; i < bridgeAddresses.length; i++) {
      const addressParams = bridgeAddresses[i];

      //Varies depending on whether this is a parent or child chain
      const vaultAddress =
        addressParams.get("Controller") || addressParams.get("Vault");
      const symbol = addressParams.get("Symbol");
      const tokenType = addressParams.get("Type");
      const tokenAddress =
        addressParams.get("SuperToken") ||
        addressParams.get("MintableToken") ||
        addressParams.get("NonMintableToken");
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

// export function findPolygonToken(vault: Address | null): TokenContract | null {
//   return findTokenForNetwork(vault, Network.POLYGON);
// }

// export function findPolygonAmoyToken(
//   vault: Address | null
// ): TokenContract | null {
//   return findTokenForNetwork(vault, Network.POLYGON_AMOY);
// }

// export function findBaseToken(vault: Address | null): TokenContract | null {
//   return findTokenForNetwork(vault, Network.BASE);
// }

// export function findBaseSepoliaToken(vault: Address | null): TokenContract | null {
//   const bridgeAddresses = baseSepoliaBridgeAddresses();
//   if (vault) {
//     for (let i = 0; i < bridgeAddresses.length; i++) {
//       const addressParams = bridgeAddresses[i];
//       const vaultAddress = addressParams.get("Controller");
//       const symbol = addressParams.get("Symbol");
//       const tokenType = addressParams.get("Type");
//       const tokenAddress = addressParams.get("SuperToken");
//       if (
//         vaultAddress &&
//         vault.equals(Address.fromString(vaultAddress)) &&
//         tokenAddress &&
//         symbol &&
//         tokenType
//       ) {
//         const tokenContract = fetchToken(Address.fromString(tokenAddress));
//         tokenContract.symbol = symbol;
//         tokenContract.type = tokenType;
//         tokenContract.save();
//         return tokenContract;
//       }
//     }
//   }
//   return null;
// }

// export function findGeistToken(vault: Address | null): TokenContract | null {
//   return findTokenForNetwork(vault, Network.GEIST);
// }

// export function findPolterToken(vault: Address | null): TokenContract | null {
//   return findTokenForNetwork(vault, Network.POLTER);
// }
