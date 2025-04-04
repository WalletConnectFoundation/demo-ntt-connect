import WormholeConnect, {
  WormholeConnectConfig,
  nttRoutes,
  WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";

const wormholeConfig: WormholeConnectConfig = {
  network: "Testnet",
  chains: [
    "Sepolia",
    "Solana",
    "BaseSepolia",
    "ArbitrumSepolia",
    "OptimismSepolia",
  ],
  tokens: ["WCTsep", "WCTsol", "WCTbase", "WCTarb", "WCTopt"],
  ui: {
    title: "Wormhole NTT UI",
    defaultInputs: {
      fromChain: "Sepolia",
      toChain: "Solana",
    },
    showHamburgerMenu: false,
  },
  rpcs: {
    Solana: "https://api.devnet.solana.com",
    Sepolia: "https://ethereum-sepolia.publicnode.com",
    BaseSepolia: "https://base-sepolia.publicnode.com",
    OptimismSepolia: "https://optimism-sepolia.publicnode.com",
    ArbitrumSepolia: "https://arbitrum-sepolia.publicnode.com",
  },
  coingecko: {
    apiKey: process.env.REACT_APP_COINGECKO_API_KEY,
  },
  routes: [
    ...nttRoutes({
      tokens: {
        WCT_NTT: [
          {
            chain: "Sepolia",
            manager: "0x4625B04f88A9398C87B67D9deeea4A9c0fF7be7c",
            token: "0x75bb6dcA2cD6F9a0189c478bBb8F7EE2fEF07C78",
            transceiver: [
              {
                address: "0x18Db27bCDb3aC28600a6a6460051427E3cb81C66",
                type: "wormhole",
              },
            ],
          },
          {
            chain: "Solana",
            manager: "NttZ3MkLkpWtDPuof7GAQtxzhN3dcCfZe9kAPyMDKCL",
            token: "3yMEocAjGL1W1Qvq1sAwdXsMTvmANRYP6ULpuWAEQxXg",
            transceiver: [
              {
                address: "DwE5jnjbMuihqHzZECXRDnexyMtZAYBxzsbVgPoNAVmc",
                type: "wormhole",
              },
            ],
          },
          {
            chain: "BaseSepolia",
            manager: "0x0DBEC6188f75bdFadCa3472cFD5C66F9FAcF6131",
            token: "0x75bb6dcA2cD6F9a0189c478bBb8F7EE2fEF07C78",
            transceiver: [
              {
                address: "0xda865D3f0207119823793300C0B941a4B4D190FA",
                type: "wormhole",
              },
            ],
          },
          {
            chain: "ArbitrumSepolia",
            manager: "0x96b2D025B3b35E1C3557a736357dFb3ca11D1a8C",
            token: "0x75bb6dcA2cD6F9a0189c478bBb8F7EE2fEF07C78",
            transceiver: [
              {
                address: "0x4BC0D604983C62dc37408f75f14470Bc5d3dD770",
                type: "wormhole",
              },
            ],
          },
          {
            chain: "OptimismSepolia",
            manager: "0x1B033577f00c0E016386f14D286FaEDAa7f70df4",
            token: "0x75bb6dcA2cD6F9a0189c478bBb8F7EE2fEF07C78",
            transceiver: [
              {
                address: "0xF04D74d5d53EfD7c2AF01A1C93B7F0F165e1b544",
                type: "wormhole",
              },
            ],
          },
        ],
      },
    }),
  ],
  tokensConfig: {
    WCTsep: {
      key: "WCTsep",
      symbol: "WCT",
      nativeChain: "Sepolia",
      displayName: "WCT",
      tokenId: {
        chain: "Sepolia",
        address: "0x75bb6dcA2cD6F9a0189c478bBb8F7EE2fEF07C78",
      },
      coinGeckoId: "wormhole",
      icon: "https://wormhole.com/token.png",
      decimals: 18,
    },
    WCTsol: {
      key: "WCTsol",
      symbol: "WCT",
      nativeChain: "Solana",
      displayName: "WCT",
      tokenId: {
        chain: "Solana",
        address: "3yMEocAjGL1W1Qvq1sAwdXsMTvmANRYP6ULpuWAEQxXg",
      },
      coinGeckoId: "wormhole",
      icon: "https://wormhole.com/token.png",
      decimals: 9,
    },
    WCTbase: {
      key: "WCTbase",
      symbol: "WCT",
      nativeChain: "BaseSepolia",
      displayName: "WCT",
      tokenId: {
        chain: "BaseSepolia",
        address: "0x75bb6dcA2cD6F9a0189c478bBb8F7EE2fEF07C78",
      },
      coinGeckoId: "wormhole",
      icon: "https://wormhole.com/token.png",
      decimals: 18,
    },
    WCTarb: {
      key: "WCTarb",
      symbol: "WCT",
      nativeChain: "ArbitrumSepolia",
      displayName: "WCT",
      tokenId: {
        chain: "ArbitrumSepolia",
        address: "0x75bb6dcA2cD6F9a0189c478bBb8F7EE2fEF07C78",
      },
      coinGeckoId: "wormhole",
      icon: "https://wormhole.com/token.png",
      decimals: 18,
    },
    WCTopt: {
      key: "WCTopt",
      symbol: "WCT",
      nativeChain: "OptimismSepolia",
      displayName: "WCT",
      tokenId: {
        chain: "OptimismSepolia",
        address: "0x75bb6dcA2cD6F9a0189c478bBb8F7EE2fEF07C78",
      },
      coinGeckoId: "wormhole",
      icon: "https://wormhole.com/token.png",
      decimals: 18,
    },
  },
};

function App() {
  const theme: WormholeConnectTheme = {
    mode: "dark",
    primary: "#78c4b6",
  };

  return (
    <div>
      <WormholeConnect config={wormholeConfig} theme={theme} />
    </div>
  );
}
export default App;
