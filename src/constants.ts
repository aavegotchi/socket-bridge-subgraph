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
}

export enum ChainId {
  POLYGON = 137,
  BASE = 8453,
  GEIST = 63157,
  POLTER = 631571,
  BASE_SEPOLIA = 845,
  POLYGON_AMOY = 80002,
}

const TOKEN_TYPE_NON_MINTABLE = "NonMintableToken";
const TOKEN_TYPE_SUPER = "SuperToken";
const CONTROLLER_TYPE_VAULT = "Vault";
const CONTROLLER_TYPE_CONTROLLER = "Controller";
const TOKEN_TYPE_ERC721 = "ERC721";
const TOKEN_TYPE_ERC1155 = "ERC1155";
const TOKEN_TYPE_ERC20 = "ERC20";

//erc20
const TOKEN_SYMBOL_FUD = "FUD";
const TOKEN_SYMBOL_FOMO = "FOMO";
const TOKEN_SYMBOL_ALPHA = "ALPHA";
const TOKEN_SYMBOL_KEK = "KEK";
const TOKEN_SYMBOL_GLTR = "GLTR";
const TOKEN_SYMBOL_GHST = "GHST";
const TOKEN_SYMBOL_USDC = "USDC";

//erc721
const TOKEN_SYMBOL_GOTCHI = "GOTCHI";

//erc1155
const TOKEN_SYMBOL_GOTCHI_ITEM = "GOTCHI_ITEM";

export function getTokensForNetwork(chainId: ChainId): Token[] | null {
  if (chainId === ChainId.POLYGON) {
    return [
      {
        symbol: TOKEN_SYMBOL_FUD,
        address: "0x403e967b044d4be25170310157cb1a4bf10bdd0f",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_FOMO,
        address: "0x44A6e0BE76e1D9620A7F76588e4509fE4fa8E8C8",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_ALPHA,
        address: "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_KEK,
        address: "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_GLTR,
        address: "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_GHST,
        address: "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x2a9e7A2A9FeD4A83F59125cFf72761E467cEa419",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_USDC,
        address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x2CFFb0B0361838A9889Db3F5Ac7984B23D4988E9",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
    ];
  } else if (chainId === ChainId.POLYGON_AMOY) {
    return [
      {
        symbol: TOKEN_SYMBOL_GHST,
        address: "0xF679b8D109b2d23931237Ce948a7D784727c0897",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x3aa86893F04dd7fbaa63Dacc8E6bd887521E3BaE",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_USDC,
        address: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x89165bCD984995FA5e5E0C23B1460bdc6102701B",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
    ];
  } else if (chainId === ChainId.BASE) {
    return [
      {
        symbol: TOKEN_SYMBOL_FUD,
        address: "0x4595Ea2d4d76e067D6701552b8A66743f048A38b",
        type: TOKEN_TYPE_ERC20,
        controller: "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_FOMO,
        address: "0xB501045c286E2e499D761106Da367B7b9D72De9e",
        type: TOKEN_TYPE_ERC20,
        controller: "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_ALPHA,
        address: "0x73e49fa294e6198400cA693a856816E23D0968Ee",
        type: TOKEN_TYPE_ERC20,
        controller: "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_KEK,
        address: "0x59c98408F27517937D2065d61862eBF129B07FD9",
        type: TOKEN_TYPE_ERC20,
        controller: "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_GLTR,
        address: "0x2D400eB3beee681471F59da5B1a0d61A18Dee743",
        type: TOKEN_TYPE_ERC20,
        controller: "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
    ];
  } else if (chainId === ChainId.GEIST) {
    return [
      {
        symbol: TOKEN_SYMBOL_GHST,
        address: "0x78860E9be983caBCdA2C101cbc185B23Efd1F4Cc",
        type: TOKEN_TYPE_ERC20,
        controller: "0x8C1e6969Ca76Ca73a9B002fE8085F6A45B3679e5",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_USDC,
        address: "0xCFa0bC1ED6135166e9163211b4Ca566a0EE81e35",
        type: TOKEN_TYPE_ERC20,
        controller: "0xfa17Cc60d20E973E6EC1731C9544B285F779fEb9",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
    ];
  } else if (chainId === ChainId.POLTER) {
    return [
      {
        symbol: TOKEN_SYMBOL_GHST,
        address: "0xCef3AdFaE288d3304e42582a0786e0276181Acf2",
        type: TOKEN_TYPE_ERC20,
        controller: "0x49017f31dB018eAD84E67A382B5f3f796695aAc3",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_USDC,
        address: "0x6cF5c0342c98E9D344aFd44A8AE399DbF4E018fC",
        type: TOKEN_TYPE_ERC20,
        controller: "0x0c8a0818B0816fB5E41073f8715Bae058E5e6C07",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
    ];
  } else if (chainId === ChainId.BASE_SEPOLIA) {
    return [
      {
        symbol: TOKEN_SYMBOL_GOTCHI,
        address: "0x87C969d083189927049f8fF3747703FB9f7a8AEd",
        type: TOKEN_TYPE_ERC721,
        controller: null,
        vault: "0x110A646276961C2d8a54b951bbC8B169E0F573c4",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_GOTCHI_ITEM,
        address: "0x87C969d083189927049f8fF3747703FB9f7a8AEd",
        type: TOKEN_TYPE_ERC1155,
        controller: null,
        vault: "0x130119B300049A80C20B2D3bfdFCfd021373E5e7",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
    ];
  } else return null;
}
