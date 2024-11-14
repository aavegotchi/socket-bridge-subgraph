export const TX_BRIDGING = "BRIDGING";
export const TX_BRIDGED = "BRIDGED";

export class Token {
  symbol: string;
  address: string;
  type: string;
  controller: string | null;
  vault: string | null;
  tokenType: string;
  controllerType: string;

  constructor(
    symbol: string,
    address: string,
    type: string,
    controller: string | null,
    vault: string | null,
    tokenType: string,
    controllerType: string
  ) {
    this.symbol = symbol;
    this.address = address;
    this.type = type;
    this.controller = controller;
    this.vault = vault;
    this.tokenType = tokenType;
    this.controllerType = controllerType;
  }
}

export enum ChainId {
  POLYGON = 137,
  BASE = 8453,
  GEIST = 63157,
  POLTER = 631571,
  BASE_SEPOLIA = 845,
  POLYGON_AMOY = 80002,
}

export function getTokensForNetwork(chainId: ChainId): Token[] | null {
  if (chainId === ChainId.POLYGON) {
    return [
      new Token(
        "FUD",
        "0x403e967b044d4be25170310157cb1a4bf10bdd0f",
        "ERC20",
        null,
        "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75",
        "NonMintableToken",
        "Vault"
      ),
      new Token(
        "FOMO",
        "0x44A6e0BE76e1D9620A7F76588e4509fE4fa8E8C8",
        "ERC20",
        null,
        "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB",
        "NonMintableToken",
        "Vault"
      ),
      new Token(
        "ALPHA",
        "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2",
        "ERC20",
        null,
        "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16",
        "NonMintableToken",
        "Vault"
      ),
      new Token(
        "KEK",
        "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C",
        "ERC20",
        null,
        "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460",
        "NonMintableToken",
        "Vault"
      ),
      new Token(
        "GLTR",
        "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc",
        "ERC20",
        null,
        "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d",
        "NonMintableToken",
        "Vault"
      ),
      new Token(
        "GHST",
        "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
        "ERC20",
        null,
        "0x2a9e7A2A9FeD4A83F59125cFf72761E467cEa419",
        "NonMintableToken",
        "Vault"
      ),
      new Token(
        "USDC",
        "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        "ERC20",
        null,
        "0x2CFFb0B0361838A9889Db3F5Ac7984B23D4988E9",
        "NonMintableToken",
        "Vault"
      ),
    ];
  } else if (chainId === ChainId.POLYGON_AMOY) {
    return [
      new Token(
        "GHST",
        "0xF679b8D109b2d23931237Ce948a7D784727c0897",
        "ERC20",
        null,
        "0x3aa86893F04dd7fbaa63Dacc8E6bd887521E3BaE",
        "NonMintableToken",
        "Vault"
      ),
      new Token(
        "USDC",
        "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
        "ERC20",
        null,
        "0x89165bCD984995FA5e5E0C23B1460bdc6102701B",
        "NonMintableToken",
        "Vault"
      ),
    ];
  } else if (chainId === ChainId.BASE) {
    return [
      new Token(
        "FUD",
        "0x4595Ea2d4d76e067D6701552b8A66743f048A38b",
        "ERC20",
        "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75",
        null,
        "SuperToken",
        "Controller"
      ),
      new Token(
        "FOMO",
        "0xB501045c286E2e499D761106Da367B7b9D72De9e",
        "ERC20",
        "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB",
        null,
        "SuperToken",
        "Controller"
      ),
      new Token(
        "ALPHA",
        "0x73e49fa294e6198400cA693a856816E23D0968Ee",
        "ERC20",
        "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16",
        null,
        "SuperToken",
        "Controller"
      ),
      new Token(
        "KEK",
        "0x59c98408F27517937D2065d61862eBF129B07FD9",
        "ERC20",
        "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460",
        null,
        "SuperToken",
        "Controller"
      ),
      new Token(
        "GLTR",
        "0x2D400eB3beee681471F59da5B1a0d61A18Dee743",
        "ERC20",
        "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d",
        null,
        "SuperToken",
        "Controller"
      ),
    ];
  } else if (chainId === ChainId.GEIST) {
    return [
      new Token(
        "GHST",
        "0x78860E9be983caBCdA2C101cbc185B23Efd1F4Cc",
        "ERC20",
        "0x8C1e6969Ca76Ca73a9B002fE8085F6A45B3679e5",
        null,
        "SuperToken",
        "Controller"
      ),
      new Token(
        "USDC",
        "0xCFa0bC1ED6135166e9163211b4Ca566a0EE81e35",
        "ERC20",
        "0xfa17Cc60d20E973E6EC1731C9544B285F779fEb9",
        null,
        "SuperToken",
        "Controller"
      ),
    ];
  } else if (chainId === ChainId.POLTER) {
    return [
      new Token(
        "GHST",
        "0xCef3AdFaE288d3304e42582a0786e0276181Acf2",
        "ERC20",
        "0x49017f31dB018eAD84E67A382B5f3f796695aAc3",
        null,
        "SuperToken",
        "Controller"
      ),
      new Token(
        "USDC",
        "0x6cF5c0342c98E9D344aFd44A8AE399DbF4E018fC",
        "ERC20",
        "0x0c8a0818B0816fB5E41073f8715Bae058E5e6C07",
        null,
        "SuperToken",
        "Controller"
      ),
    ];
  } else if (chainId === ChainId.BASE_SEPOLIA) {
    return [
      new Token(
        "GOTCHI",
        "0x87C969d083189927049f8fF3747703FB9f7a8AEd",
        "ERC721",
        null,
        "0x110A646276961C2d8a54b951bbC8B169E0F573c4",
        "NonMintableToken",
        "Vault"
      ),
      new Token(
        "GOTCHI_ITEM",
        "0x87C969d083189927049f8fF3747703FB9f7a8AEd",
        "ERC1155",
        null,
        "0x130119B300049A80C20B2D3bfdFCfd021373E5e7",
        "NonMintableToken",
        "Vault"
      ),
    ];
  } else return null;
}
