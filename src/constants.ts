import { TypedMap } from "@graphprotocol/graph-ts";

export const TX_BRIDGING = "BRIDGING";
export const TX_BRIDGED = "BRIDGED";

enum Network {
  POLYGON = "polygon",
  POLYGON_AMOY = "polygonAmoy",
  BASE = "base",
  GEIST = "geist",
  POLTER = "polter",
  BASE_SEPOLIA = "baseSepolia",
}

interface Token {
  symbol: string;
  address: string;
  type: "ERC20" | "ERC721" | "ERC1155";
  vault?: string;
  controller?: string;
  tokenType: "NonMintableToken" | "MintableToken" | "SuperToken";
  controllerType: "Vault" | "Controller";
}

const networks: { [key in Network]: Token[] } = {
  polygon: [
    {
      symbol: "FUD",
      address: "0x403e967b044d4be25170310157cb1a4bf10bdd0f",
      type: "ERC20",
      vault: "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
    {
      symbol: "FOMO",
      address: "0x44A6e0BE76e1D9620A7F76588e4509fE4fa8E8C8",
      type: "ERC20",
      vault: "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
    {
      symbol: "ALPHA",
      address: "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2",
      type: "ERC20",
      vault: "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
    {
      symbol: "KEK",
      address: "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C",
      type: "ERC20",
      vault: "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
    {
      symbol: "GLTR",
      address: "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc",
      type: "ERC20",
      vault: "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
    {
      symbol: "GHST",
      address: "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
      type: "ERC20",
      vault: "0x2a9e7A2A9FeD4A83F59125cFf72761E467cEa419",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
    {
      symbol: "USDC",
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      type: "ERC20",
      vault: "0x2CFFb0B0361838A9889Db3F5Ac7984B23D4988E9",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
  ],
  polygonAmoy: [
    {
      symbol: "GHST",
      address: "0xF679b8D109b2d23931237Ce948a7D784727c0897",
      type: "ERC20",
      vault: "0x3aa86893F04dd7fbaa63Dacc8E6bd887521E3BaE",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
    {
      symbol: "USDC",
      address: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
      type: "ERC20",
      vault: "0x89165bCD984995FA5e5E0C23B1460bdc6102701B",
      tokenType: "NonMintableToken",
      controllerType: "Vault",
    },
  ],
  base: [
    {
      symbol: "FUD",
      address: "0x4595Ea2d4d76e067D6701552b8A66743f048A38b",
      type: "ERC20",
      controller: "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
    {
      symbol: "FOMO",
      address: "0xB501045c286E2e499D761106Da367B7b9D72De9e",
      type: "ERC20",
      controller: "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
    {
      symbol: "ALPHA",
      address: "0x73e49fa294e6198400cA693a856816E23D0968Ee",
      type: "ERC20",
      controller: "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
    {
      symbol: "KEK",
      address: "0x59c98408F27517937D2065d61862eBF129B07FD9",
      type: "ERC20",
      controller: "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
    {
      symbol: "GLTR",
      address: "0x2D400eB3beee681471F59da5B1a0d61A18Dee743",
      type: "ERC20",
      controller: "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
  ],
  geist: [
    {
      symbol: "GHST",
      address: "0x78860E9be983caBCdA2C101cbc185B23Efd1F4Cc",
      type: "ERC20",
      controller: "0x8C1e6969Ca76Ca73a9B002fE8085F6A45B3679e5",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
    {
      symbol: "USDC",
      address: "0xCFa0bC1ED6135166e9163211b4Ca566a0EE81e35",
      type: "ERC20",
      controller: "0xfa17Cc60d20E973E6EC1731C9544B285F779fEb9",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
  ],
  polter: [
    {
      symbol: "GHST",
      address: "0xCef3AdFaE288d3304e42582a0786e0276181Acf2",
      type: "ERC20",
      controller: "0x49017f31dB018eAD84E67A382B5f3f796695aAc3",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
    {
      symbol: "USDC",
      address: "0x6cF5c0342c98E9D344aFd44A8AE399DbF4E018fC",
      type: "ERC20",
      controller: "0x0c8a0818B0816fB5E41073f8715Bae058E5e6C07",
      tokenType: "SuperToken",
      controllerType: "Controller",
    },
  ],
  baseSepolia: [
    {
      tokenType: "NonMintableToken",
      controllerType: "Vault",
      address: "0x87C969d083189927049f8fF3747703FB9f7a8AEd",
      symbol: "GOTCHI",
      type: "ERC721",
      vault: "0x110A646276961C2d8a54b951bbC8B169E0F573c4",
    },
    {
      tokenType: "NonMintableToken",
      controllerType: "Vault",
      address: "0x87C969d083189927049f8fF3747703FB9f7a8AEd",
      symbol: "GOTCHI_ITEM",
      type: "ERC1155",
      vault: "0x130119B300049A80C20B2D3bfdFCfd021373E5e7",
    },
  ],
};

function bridgeAddresses(network: Network): Array<TypedMap<string, string>> {
  let bridgeAddresses: Array<TypedMap<string, string>> = new Array<
    TypedMap<string, string>
  >();

  networks[network].forEach((token) => {
    let addressParams: TypedMap<string, string> = new TypedMap<
      string,
      string
    >();
    addressParams.set("Symbol", token.symbol);
    addressParams.set(token.tokenType, token.address);
    addressParams.set(
      token.controllerType,
      token.vault ? token.vault : token.controller ? token.controller : ""
    );
    addressParams.set("Type", token.type);
    bridgeAddresses.push(addressParams);
  });

  return bridgeAddresses;
}

export function polygonBridgeAddresses(): Array<TypedMap<string, string>> {
  return bridgeAddresses(Network.POLYGON);
}

export function polygonAmoyBridgeAddresses(): Array<TypedMap<string, string>> {
  return bridgeAddresses(Network.POLYGON_AMOY);
}

export function baseBridgeAddresses(): Array<TypedMap<string, string>> {
  return bridgeAddresses(Network.BASE);
}

export function geistBridgeAddresses(): Array<TypedMap<string, string>> {
  return bridgeAddresses(Network.GEIST);
}

export function polterBridgeAddresses(): Array<TypedMap<string, string>> {
  return bridgeAddresses(Network.POLTER);
}

export function baseSepoliaBridgeAddresses(): Array<TypedMap<string, string>> {
  return bridgeAddresses(Network.BASE_SEPOLIA);
}

// export function baseSepoliaBridgeAddresses(): Array<TypedMap<string, string>> {
//   let baseSepoliaBridgeAddresses: Array<TypedMap<string, string>> = new Array<
//     TypedMap<string, string>
//   >();

//   // let fudAddressParams: TypedMap<string, string> = new TypedMap<
//   //   string,
//   //   string
//   // >();
//   // fudAddressParams.set("Symbol", "FUD");
//   // fudAddressParams.set(
//   //   "NonMintableToken",
//   //   "0x403e967b044d4be25170310157cb1a4bf10bdd0f"
//   // );
//   // fudAddressParams.set("Vault", "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75");
//   // fudAddressParams.set("Type", "ERC20");

//   // let fomoAddressParams: TypedMap<string, string> = new TypedMap<
//   //   string,
//   //   string
//   // >();
//   // fomoAddressParams.set("Symbol", "FOMO");
//   // fomoAddressParams.set(
//   //   "NonMintableToken",
//   //   "0x44A6e0BE76e1D9620A7F76588e4509fE4fa8E8C8"
//   // );
//   // fomoAddressParams.set("Vault", "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB");
//   // fomoAddressParams.set("Type", "ERC20");

//   // let alphaAddressParams: TypedMap<string, string> = new TypedMap<
//   //   string,
//   //   string
//   // >();
//   // alphaAddressParams.set("Symbol", "ALPHA");
//   // alphaAddressParams.set(
//   //   "NonMintableToken",
//   //   "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2"
//   // );
//   // alphaAddressParams.set("Vault", "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16");
//   // alphaAddressParams.set("Type", "ERC20");

//   // let kekAddressParams: TypedMap<string, string> = new TypedMap<
//   //   string,
//   //   string
//   // >();
//   // kekAddressParams.set("Symbol", "KEK");
//   // kekAddressParams.set(
//   //   "NonMintableToken",
//   //   "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C"
//   // );
//   // kekAddressParams.set("Vault", "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460");
//   // kekAddressParams.set("Type", "ERC20");

//   // let gltrAddressParams: TypedMap<string, string> = new TypedMap<
//   //   string,
//   //   string
//   // >();
//   // gltrAddressParams.set("Symbol", "GLTR");
//   // gltrAddressParams.set(
//   //   "NonMintableToken",
//   //   "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc"
//   // );
//   // gltrAddressParams.set("Vault", "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d");
//   // gltrAddressParams.set("Type", "ERC20");

//   let ghstAddressParams: TypedMap<string, string> = new TypedMap<
//     string,
//     string
//   >();
//   ghstAddressParams.set("Symbol", "GHST");
//   ghstAddressParams.set(
//     "NonMintableToken",
//     "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7"
//   );
//   ghstAddressParams.set("Vault", "0x2a9e7A2A9FeD4A83F59125cFf72761E467cEa419");
//   ghstAddressParams.set("Type", "ERC20");

//   let usdcAddressParams: TypedMap<string, string> = new TypedMap<
//     string,
//     string
//   >();
//   usdcAddressParams.set("Symbol", "USDC");
//   usdcAddressParams.set(
//     "NonMintableToken",
//     "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
//   );
//   usdcAddressParams.set("Vault", "0x2CFFb0B0361838A9889Db3F5Ac7984B23D4988E9");
//   usdcAddressParams.set("Type", "ERC20");

//   baseSepoliaBridgeAddresses.push(fudAddressParams);
//   baseSepoliaBridgeAddresses.push(fomoAddressParams);
//   baseSepoliaBridgeAddresses.push(alphaAddressParams);
//   baseSepoliaBridgeAddresses.push(kekAddressParams);
//   baseSepoliaBridgeAddresses.push(gltrAddressParams);
//   baseSepoliaBridgeAddresses.push(ghstAddressParams);
//   baseSepoliaBridgeAddresses.push(usdcAddressParams);

//   return baseSepoliaBridgeAddresses;
// }
