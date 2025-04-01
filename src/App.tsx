import WormholeConnect, {
  WormholeConnectConfig,
  nttRoutes,
  WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";

const wormholeConfig: WormholeConnectConfig = {
  network: "Testnet",
  chains: [
    "Solana",
    "BaseSepolia",
    "ArbitrumSepolia",
    "OptimismSepolia",
    "Sepolia",
  ],
  tokens: ["WCT"],
  ui: {
    title: "Wormhole NTT UI",
    defaultInputs: {
      fromChain: "Solana",
      toChain: "BaseSepolia",
    },
  },
  rpcs: {
    Solana: "https://api.devnet.solana.com",
    BaseSepolia: "https://sepolia.base.org",
    ArbitrumSepolia: "https://sepolia-rollup.arbitrum.io/rpc",
    OptimismSepolia: "https://sepolia.optimism.io",
    Sepolia: "https://ethereum-sepolia-rpc.publicnode.com",
  },
  routes: [
    ...nttRoutes({
      tokens: {
        WCT_NTT: [
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
        ],
      },
    }),
  ],
  tokensConfig: {
    WCT: {
      symbol: "WCT",
      tokenId: {
        chain: "Solana",
        address: "3yMEocAjGL1W1Qvq1sAwdXsMTvmANRYP6ULpuWAEQxXg",
      },
      icon: "https://wormhole.com/token.png",
      decimals: 9,
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
