import { TypedMap } from "@graphprotocol/graph-ts";

export const TX_BRIDGING = "BRIDGING";
export const TX_BRIDGED = "BRIDGED";

export function polygonBridgeAddresses(): Array<TypedMap<string, string>> {
  let polygonBridgeAddresses: Array<TypedMap<string, string>> = new Array<
    TypedMap<string, string>
  >();

  let fudAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  fudAddressParams.set("Symbol", "FUD");
  fudAddressParams.set(
    "NonMintableToken",
    "0x403e967b044d4be25170310157cb1a4bf10bdd0f"
  );
  fudAddressParams.set("Vault", "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75");
  fudAddressParams.set("Type", "ERC20");

  let fomoAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  fomoAddressParams.set("Symbol", "FOMO");
  fomoAddressParams.set(
    "NonMintableToken",
    "0x44A6e0BE76e1D9620A7F76588e4509fE4fa8E8C8"
  );
  fomoAddressParams.set("Vault", "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB");
  fomoAddressParams.set("Type", "ERC20");

  let alphaAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  alphaAddressParams.set("Symbol", "ALPHA");
  alphaAddressParams.set(
    "NonMintableToken",
    "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2"
  );
  alphaAddressParams.set("Vault", "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16");
  alphaAddressParams.set("Type", "ERC20");

  let kekAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  kekAddressParams.set("Symbol", "KEK");
  kekAddressParams.set(
    "NonMintableToken",
    "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C"
  );
  kekAddressParams.set("Vault", "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460");
  kekAddressParams.set("Type", "ERC20");

  let gltrAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  gltrAddressParams.set("Symbol", "GLTR");
  gltrAddressParams.set(
    "NonMintableToken",
    "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc"
  );
  gltrAddressParams.set("Vault", "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d");
  gltrAddressParams.set("Type", "ERC20");

  let ghstAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  ghstAddressParams.set("Symbol", "GHST");
  ghstAddressParams.set(
    "NonMintableToken",
    "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7"
  );
  ghstAddressParams.set("Vault", "0x2a9e7A2A9FeD4A83F59125cFf72761E467cEa419");
  ghstAddressParams.set("Type", "ERC20");

  let usdcAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  usdcAddressParams.set("Symbol", "USDC");
  usdcAddressParams.set(
    "NonMintableToken",
    "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
  );
  usdcAddressParams.set("Vault", "0x2CFFb0B0361838A9889Db3F5Ac7984B23D4988E9");
  usdcAddressParams.set("Type", "ERC20");

  polygonBridgeAddresses.push(fudAddressParams);
  polygonBridgeAddresses.push(fomoAddressParams);
  polygonBridgeAddresses.push(alphaAddressParams);
  polygonBridgeAddresses.push(kekAddressParams);
  polygonBridgeAddresses.push(gltrAddressParams);
  polygonBridgeAddresses.push(ghstAddressParams);
  polygonBridgeAddresses.push(usdcAddressParams);

  return polygonBridgeAddresses;
}

export function baseBridgeAddresses(): Array<TypedMap<string, string>> {
  let baseBridgeAddresses: Array<TypedMap<string, string>> = new Array<
    TypedMap<string, string>
  >();

  let fudAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  fudAddressParams.set("Symbol", "FUD");
  fudAddressParams.set(
    "SuperToken",
    "0x4595Ea2d4d76e067D6701552b8A66743f048A38b"
  );
  fudAddressParams.set(
    "Controller",
    "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75"
  );
  fudAddressParams.set("Type", "ERC20");

  let fomoAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  fomoAddressParams.set("Symbol", "FOMO");
  fomoAddressParams.set(
    "SuperToken",
    "0xB501045c286E2e499D761106Da367B7b9D72De9e"
  );
  fomoAddressParams.set(
    "Controller",
    "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB"
  );
  fomoAddressParams.set("Type", "ERC20");

  let alphaAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  alphaAddressParams.set("Symbol", "ALPHA");
  alphaAddressParams.set(
    "SuperToken",
    "0x73e49fa294e6198400cA693a856816E23D0968Ee"
  );
  alphaAddressParams.set(
    "Controller",
    "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16"
  );
  alphaAddressParams.set("Type", "ERC20");

  let kekAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  kekAddressParams.set("Symbol", "KEK");
  kekAddressParams.set(
    "SuperToken",
    "0x59c98408F27517937D2065d61862eBF129B07FD9"
  );
  kekAddressParams.set(
    "Controller",
    "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460"
  );
  kekAddressParams.set("Type", "ERC20");

  let gltrAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  gltrAddressParams.set("Symbol", "GLTR");
  gltrAddressParams.set(
    "SuperToken",
    "0x2D400eB3beee681471F59da5B1a0d61A18Dee743"
  );
  gltrAddressParams.set(
    "Controller",
    "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d"
  );
  gltrAddressParams.set("Type", "ERC20");

  baseBridgeAddresses.push(fudAddressParams);
  baseBridgeAddresses.push(fomoAddressParams);
  baseBridgeAddresses.push(alphaAddressParams);
  baseBridgeAddresses.push(kekAddressParams);
  baseBridgeAddresses.push(gltrAddressParams);

  return baseBridgeAddresses;
}

export function geistBridgeAddresses(): Array<TypedMap<string, string>> {
  let geistBridgeAddresses: Array<TypedMap<string, string>> = new Array<
    TypedMap<string, string>
  >();

  let ghstAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  ghstAddressParams.set("Symbol", "GHST");
  ghstAddressParams.set(
    "SuperToken",
    "0x78860E9be983caBCdA2C101cbc185B23Efd1F4Cc"
  );
  ghstAddressParams.set(
    "Controller",
    "0x8C1e6969Ca76Ca73a9B002fE8085F6A45B3679e5"
  );
  ghstAddressParams.set("Type", "ERC20");

  let usdcAddressParams: TypedMap<string, string> = new TypedMap<
    string,
    string
  >();
  usdcAddressParams.set("Symbol", "USDC");
  usdcAddressParams.set(
    "SuperToken",
    "0xCFa0bC1ED6135166e9163211b4Ca566a0EE81e35"
  );
  usdcAddressParams.set(
    "Controller",
    "0xfa17Cc60d20E973E6EC1731C9544B285F779fEb9"
  );
  usdcAddressParams.set("Type", "ERC20");

  geistBridgeAddresses.push(ghstAddressParams);
  geistBridgeAddresses.push(usdcAddressParams);

  return geistBridgeAddresses;
}
