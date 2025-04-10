import WormholeConnect, {
  WormholeConnectConfig,
  nttRoutes,
  WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";

const wormholeConfig: WormholeConnectConfig = {
  network: "Mainnet",
  chains: ["Optimism", "Ethereum"],
  tokens: ["WCTeth", "WCTopt"],
  ui: {
    title: "Wormhole NTT UI",
    defaultInputs: {
      fromChain: "Optimism",
      toChain: "Ethereum",
    },
    showHamburgerMenu: false,
  },
  rpcs: {
    Optimism: "https://optimism-rpc.publicnode.com",
    Ethereum: "https://ethereum-rpc.publicnode.com",
  },
  coinGeckoApiKey: process.env.REACT_APP_COINGECKO_API_KEY,
  routes: [
    ...nttRoutes({
      tokens: {
        WCT_NTT: [
          {
            chain: "Optimism",
            manager: "0x164Be303480f542336bE0bBe0432A13b85e6FD1b",
            token: "0xeF4461891DfB3AC8572cCf7C794664A8DD927945",
            transceiver: [
              {
                address: "0x3cB1d3A449a868dd8BF8F8928408836543Fe2A68",
                type: "wormhole",
              },
            ],
          },
          {
            chain: "Ethereum",
            manager: "0x164Be303480f542336bE0bBe0432A13b85e6FD1b",
            token: "0xeF4461891DfB3AC8572cCf7C794664A8DD927945",
            transceiver: [
              {
                address: "0x3cB1d3A449a868dd8BF8F8928408836543Fe2A68",
                type: "wormhole",
              },
            ],
          },
        ],
      },
    }),
  ],
  tokensConfig: {
    WCTeth: {
      key: "WCTeth",
      symbol: "WCT",
      nativeChain: "Ethereum",
      displayName: "WCT",
      tokenId: {
        chain: "Ethereum",
        address: "0xeF4461891DfB3AC8572cCf7C794664A8DD927945",
      },
      coinGeckoId: "wormhole",
      icon: "https://wormhole.com/token.png",
      decimals: 18,
    },
    WCTopt: {
      key: "WCTopt",
      symbol: "WCT",
      nativeChain: "Optimism",
      displayName: "WCT",
      tokenId: {
        chain: "Optimism",
        address: "0xeF4461891DfB3AC8572cCf7C794664A8DD927945",
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
