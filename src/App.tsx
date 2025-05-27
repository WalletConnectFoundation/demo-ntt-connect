import WormholeConnect, {
  WormholeConnectConfig,
  nttRoutes,
  WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";

const wormholeConfig: WormholeConnectConfig = {
  network: "Mainnet",
  chains: ["Optimism", "Ethereum", "Solana"],
  tokens: ["WCTeth", "WCTopt", "WCTsol"],
  ui: {
    title: "Wormhole NTT UI",
    defaultInputs: {
      fromChain: "Optimism",
      toChain: "Solana",
    },
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  },
  rpcs: {
    Optimism: "https://optimism-rpc.publicnode.com",
    Ethereum: "https://ethereum-rpc.publicnode.com",
    Solana: "https://solana-rpc.publicnode.com",
  },
  coinGeckoApiKey: import.meta.env.VITE_COIN_GECKO_API_KEY,
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
          {
            chain: "Solana",
            manager: "nttLq3ZsKu9uAFWuBGksdZTPAjkMRyPkxp61CJPsntA",
            token: "WCTk5xWdn5SYg56twGj32sUF3W4WFQ48ogezLBuYTBY",
            transceiver: [
              {
                address: "5FksLs44iw5TPZ1yngyxKxZyvBXeUCgQM7VQfiRZVK45",
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
      coinGeckoId: "connect-token-wct",
      icon: "https://arweave.net/zBO8_CRB3aQrPmMA_F6GP4QnfRVbHYJLyKPtnZPTCwQ",
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
      coinGeckoId: "connect-token-wct",
      icon: "https://arweave.net/zBO8_CRB3aQrPmMA_F6GP4QnfRVbHYJLyKPtnZPTCwQ",
      decimals: 18,
    },
    WCTsol: {
      key: "WCTsol",
      symbol: "WCT",
      nativeChain: "Solana",
      displayName: "WCT",
      tokenId: {
        chain: "Solana",
        address: "WCTk5xWdn5SYg56twGj32sUF3W4WFQ48ogezLBuYTBY",
      },
      icon: "https://arweave.net/zBO8_CRB3aQrPmMA_F6GP4QnfRVbHYJLyKPtnZPTCwQ",
      coinGeckoId: "connect-token-wct",
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
