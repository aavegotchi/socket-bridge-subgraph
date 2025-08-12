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
  BASE_SEPOLIA = 845,
  POLYGON_AMOY = 80002,
}

const TOKEN_TYPE_NON_MINTABLE = "NonMintableToken";
const TOKEN_TYPE_SUPER = "SuperToken";
const CONTROLLER_TYPE_VAULT = "Vault";
const CONTROLLER_TYPE_CONTROLLER = "Controller";
const TOKEN_TYPE_ERC20 = "ERC20";

//erc20
const TOKEN_SYMBOL_FUD = "FUD";
const TOKEN_SYMBOL_FOMO = "FOMO";
const TOKEN_SYMBOL_ALPHA = "ALPHA";
const TOKEN_SYMBOL_KEK = "KEK";
const TOKEN_SYMBOL_GLTR = "GLTR";
const TOKEN_SYMBOL_GHST = "GHST";
const TOKEN_SYMBOL_USDC = "USDC";

export function getTokensForNetwork(chainId: ChainId): Token[] | null {
  if (chainId === ChainId.POLYGON) {
    return [
      //Alchemica to Base
      {
        symbol: TOKEN_SYMBOL_FUD,
        address: "0x403e967b044d4be25170310157cb1a4bf10bdd0f",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x9eC95a86ACc3412d340211D77260aa14cE00b394",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_FOMO,
        address: "0x44A6e0BE76e1D9620A7F76588e4509fE4fa8E8C8",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0xeec6E2e315A4c2477d65dd3325f14D03408a2357",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_ALPHA,
        address: "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x39392d61CD746869A1C87C06c22A9371C3C28825",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_KEK,
        address: "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0xBD638B054848409d1321070C22876cCE2c4b1608",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_GLTR,
        address: "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0xE992bA3b6357754d3A956Cc3B581903369324089",
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

      {
        symbol: TOKEN_SYMBOL_FUD,
        address: "0xaa1C59f2B45EF192B71De7d0CB5d95b664749d9c",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x662DAE22aBeCc858dDb8ce9dE4d8ac2b478C97ad",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_FOMO,
        address: "0x616d6Df54A9754B81aa43971794D86B3C229fA8B",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0xd789D074156ad17EDC6CC237652079126182E0CE",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_ALPHA,
        address: "0x44bca9B7C2C5F9f47D4da5B72deCdcF3a42535d8",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0xf077EB43513167c43814160153A4781B61C13857",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_KEK,
        address: "0x9b39452041aCe85C03D3Ae76D0D5ccFf3a86dEc9",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x0dcd89CBcf350B4CE7266B94389c9796E5e14819",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
      {
        symbol: TOKEN_SYMBOL_GLTR,
        address: "0x7E4CB2bc361898bB17C8D847032676A7Fd23D625",
        type: TOKEN_TYPE_ERC20,
        controller: null,
        vault: "0x41D59970D8548262E6F85a269F4E6101aF5Bf0E8",
        tokenType: TOKEN_TYPE_NON_MINTABLE,
        controllerType: CONTROLLER_TYPE_VAULT,
      },
    ];
  } else if (chainId === ChainId.BASE) {
    return [
      {
        symbol: TOKEN_SYMBOL_FUD,
        address: "0x2028b4043e6722Ea164946c82fe806c4a43a0fF4",
        type: TOKEN_TYPE_ERC20,
        controller: "0x596A75D94d1Bf0b63af9F4a67Ce5Eeb427EeDdcE",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_FOMO,
        address: "0xA32137bfb57d2b6A9Fd2956Ba4B54741a6D54b58",
        type: TOKEN_TYPE_ERC20,
        controller: "0x21F842dAb0E1FF3D39E4E8db8510303c80327f61",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_ALPHA,
        address: "0x15e7CaC885e3730ce6389447BC0f7AC032f31947",
        type: TOKEN_TYPE_ERC20,
        controller: "0x32D54F4a89e905EF3af4bd617EfF09CCab32401a",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_KEK,
        address: "0xE52b9170fF4ece4C35E796Ffd74B57Dec68Ca0e5",
        type: TOKEN_TYPE_ERC20,
        controller: "0x5e294A13E01e78fbE02C17d966BdA39bd1Ccf6c4",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
      {
        symbol: TOKEN_SYMBOL_GLTR,
        address: "0x4D140CE792bEdc430498c2d219AfBC33e2992c9D",
        type: TOKEN_TYPE_ERC20,
        controller: "0x02135A3D139A5375d30e22Ef5f6945c896aeae65",
        vault: null,
        tokenType: TOKEN_TYPE_SUPER,
        controllerType: CONTROLLER_TYPE_CONTROLLER,
      },
    ];
  } else return null;
}
