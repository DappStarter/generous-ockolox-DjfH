require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember unaware hidden kiwi bridge valid'; 
let testAccounts = [
"0x0dc49f02a1cba3911a51ca8997eb6ed1de12ce116112200ce2789b4e13aa0af3",
"0x3a100124fb543828cd2c8b71b2cfe07d9351f68bbbdb93371075fd8dccb4983a",
"0x24fe1c800614b0f9298a3ae9105284320c06479cbb821f90bdbb7e91830bf46b",
"0xbe90432786232038f97b755f9f869bdcc9e35b0162accf7d5113f198f1f48acb",
"0x60089d133ef7f71e5c2b28e3d70a337430e3d806854a6474045a3f48f6bcaf6d",
"0x289eae18c8c7d9807d8271d4ccb1f8dcd8c547d2dbc7cf21823d669606dc6710",
"0x73c17d0975cae3bcd6163815e1d7c108d14aaee550b9eaaee073ed21bba888b1",
"0x881a84f3618359286b3f762f350308f02d5e43ba9d1cf40d5daeb99f32a96763",
"0x1ece6b9cac3a759e4a629e87cbf497d802501b56002c802a89265c1652f260bd",
"0x6d3307b894848f7bd52121edeae92d816e5b1f0886bfca8ac7c133b9f9165e29"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

