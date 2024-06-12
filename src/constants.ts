import {TypedMap} from "@graphprotocol/graph-ts";

export function polygonBridgeAddresses(): Array<TypedMap<string, string>> {
    let polygonBridgeAddresses: Array<TypedMap<string, string>> = new Array<TypedMap<string, string>>();

    let fudAddressParams: TypedMap<string, string> = new TypedMap<string, string>();
    fudAddressParams.set("Symbol", "FUD");
    fudAddressParams.set("NonMintableToken", "0x403e967b044d4be25170310157cb1a4bf10bdd0f");
    fudAddressParams.set("Vault", "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75");
    fudAddressParams.set("Type", "ERC20");

    let fomoAddressParams: TypedMap<string, string> = new TypedMap<string, string>();
    fomoAddressParams.set("Symbol", "FOMO");
    fomoAddressParams.set("NonMintableToken", "0x44A6e0BE76e1D9620A7F76588e4509fE4fa8E8C8");
    fomoAddressParams.set("Vault", "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB");
    fomoAddressParams.set("Type", "ERC20");

    let alphaAddressParams: TypedMap<string, string> = new TypedMap<string, string>();
    alphaAddressParams.set("Symbol", "ALPHA");
    alphaAddressParams.set("NonMintableToken", "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2");
    alphaAddressParams.set("Vault", "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16");
    alphaAddressParams.set("Type", "ERC20");

    let kekAddressParams: TypedMap<string, string> = new TypedMap<string, string>();
    kekAddressParams.set("Symbol", "KEK");
    kekAddressParams.set("NonMintableToken", "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C");
    kekAddressParams.set("Vault", "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460");
    kekAddressParams.set("Type", "ERC20");

    let gltrAddressParams: TypedMap<string, string> = new TypedMap<string, string>();
    gltrAddressParams.set("Symbol", "GLTR");
    gltrAddressParams.set("NonMintableToken", "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc");
    gltrAddressParams.set("Vault", "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d");
    gltrAddressParams.set("Type", "ERC20");

    polygonBridgeAddresses.push(fudAddressParams);
    polygonBridgeAddresses.push(fomoAddressParams);
    polygonBridgeAddresses.push(alphaAddressParams);
    polygonBridgeAddresses.push(kekAddressParams);
    polygonBridgeAddresses.push(gltrAddressParams);

    return polygonBridgeAddresses;
}
//
// export const POLYGON_BRIDGE_ADDRESSES = {
//     FUD: {
//         NonMintableToken: "0x403e967b044d4be25170310157cb1a4bf10bdd0f",
//         Vault: "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75",
//         LimitHook: "0x6F0265143A2A20D7eD61953A134255396aE66113",
//         connectors: {
//             "8453": {
//                 FAST: "0x2Da6f1DD5Bc4d456Da29a1138c2646Ad6E56F6d6",
//             },
//         },
//     },
//     FOMO: {
//         NonMintableToken: "0x44a6e0be76e1d9620a7f76588e450fe4fa8e8c8",
//         Vault: "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB",
//         LimitHook: "0x480e5C74F86a6948EA8972fc00FD65a405d7028F",
//         connectors: {
//             "8453": {
//                 FAST: "0xE8E9341ec9f2Fb97F794bE3505b76e0685cd5D3B",
//             },
//         },
//     },
//     ALPHA: {
//         NonMintableToken: "0x6a3E7C3c6EF65Ee26975b12293cA1AAD7e1dAeD2",
//         Vault: "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16",
//         LimitHook: "0xF0FE22c3795764a3CEFd21518c8d0fE5515C9AA1",
//         connectors: {
//             "8453": {
//                 FAST: "0x13A2714aEfeBBee8D2F73B65396ADCa556C6b0Cc",
//             },
//         },
//     },
//     KEK: {
//         NonMintableToken: "0x42E5E06EF5b90Fe15F853F59299Fc96259209c5C",
//         Vault: "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460",
//         LimitHook: "0xEeeF79d797fd4e10508153EbA204080F4B3bbb0F",
//         connectors: {
//             "8453": {
//                 FAST: "0x3E7D7F9E3C3B5610711fe2Fc777F22dB464C37c3",
//             },
//         },
//     },
//     GLTR: {
//         NonMintableToken: "0x3801C3B3B5c98F88a9c9005966AA96aa440B9Afc",
//         Vault: "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d",
//         LimitHook: "0x3e12C3593A0fAc10a56A4e7857fdfaB22b76A678",
//         connectors: {
//             "8453": {
//                 FAST: "0x4B10af24DbcfFA13208Ccaa9E0FB17bb547a20bd",
//             },
//         },
//     },
// };
//
// export const BASE_BRIDGE_ADDRESSES = {
//     FUD: {
//         SuperToken: "0x4595Ea2d4d76e067D6701552b8A66743f048A38b",
//         Controller: "0xBdc2420b1E7F1f97d45b55a2ea9d3b4eB2675B75",
//         LimitHook: "0x6F0265143A2A20D7eD61953A134255396aE66113",
//         connectors: {
//             "137": {
//                 FAST: "0x2Da6f1DD5Bc4d456Da29a1138c2646Ad6E56F6d6",
//             },
//         },
//     },
//     FOMO: {
//         SuperToken: "0xB501045c286E2e499D761106Da367B7b9D72De9e",
//         Controller: "0x321fCfC2cc0d45d2eb252A11bBA8274543819feB",
//         LimitHook: "0x480e5C74F86a6948EA8972fc00FD65a405d7028F",
//         connectors: {
//             "137": {
//                 FAST: "0xE8E9341ec9f2Fb97F794bE3505b76e0685cd5D3B",
//             },
//         },
//     },
//     ALPHA: {
//         SuperToken: "0x73e49fa294e6198400cA693a856816E23D0968Ee",
//         Controller: "0xc87653358D5EDc7716057c865b8cD9ac5eB44A16",
//         LimitHook: "0xF0FE22c3795764a3CEFd21518c8d0fE5515C9AA1",
//         connectors: {
//             "137": {
//                 FAST: "0x13A2714aEfeBBee8D2F73B65396ADCa556C6b0Cc",
//             },
//         },
//     },
//     KEK: {
//         SuperToken: "0x59c98408F27517937D2065d61862eBF129B07FD9",
//         Controller: "0x3D57A1a3429825C35B7C432F8885fA1D0Eede460",
//         LimitHook: "0xEeeF79d797fd4e10508153EbA204080F4B3bbb0F",
//         connectors: {
//             "137": {
//                 FAST: "0x3E7D7F9E3C3B5610711fe2Fc777F22dB464C37c3",
//             },
//         },
//     },
//     GLTR: {
//         SuperToken: "0x2D400eB3beee681471F59da5B1a0d61A18Dee743",
//         Controller: "0x8B2D15F61B99De5Fd53dfCFFf8AF995f17f9536d",
//         LimitHook: "0x3e12C3593A0fAc10a56A4e7857fdfaB22b76A678",
//         connectors: {
//             "137": {
//                 FAST: "0x4B10af24DbcfFA13208Ccaa9E0FB17bb547a20bd",
//             },
//         },
//     },
// };
