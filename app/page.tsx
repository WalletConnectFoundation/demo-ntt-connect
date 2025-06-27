'use client';

import WormholeConnect, {
  WormholeConnectTheme,
  config,
} from '@wormhole-foundation/wormhole-connect';
import { nttRoutes } from '@wormhole-foundation/wormhole-connect/ntt';

const wormholeConfig: config.WormholeConnectConfig = {
  network: "Mainnet",
  chains: ["Optimism", "Ethereum", "Solana"],
  tokens: ["WCTeth", "WCTopt", "WCTsol"],
  ui: {
    title: "Wormhole NTT UI",
    defaultInputs: {
      fromChain: "Optimism",
      toChain: "Solana",
    },
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  },
  rpcs: {
    Optimism: "https://optimism-rpc.publicnode.com",
    Ethereum: "https://ethereum-rpc.publicnode.com",
    Solana: "https://solana-rpc.publicnode.com",
  },
  coingecko: {
    apiKey: process.env.NEXT_PUBLIC_COIN_GECKO_API_KEY,
  },
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
      symbol: "WCT",
      name: "WCT",
      tokenId: {
        chain: "Ethereum",
        address: "0xeF4461891DfB3AC8572cCf7C794664A8DD927945",
      },
      icon: "https://arweave.net/zBO8_CRB3aQrPmMA_F6GP4QnfRVbHYJLyKPtnZPTCwQ",
      decimals: 18,
    },
    WCTopt: {
      symbol: "WCT",
      name: "WCT",
      tokenId: {
        chain: "Optimism",
        address: "0xeF4461891DfB3AC8572cCf7C794664A8DD927945",
      },
      icon: "https://arweave.net/zBO8_CRB3aQrPmMA_F6GP4QnfRVbHYJLyKPtnZPTCwQ",
      decimals: 18,
    },
    WCTsol: {
      symbol: "WCT",
      name: "WCT",
      tokenId: {
        chain: "Solana",
        address: "WCTk5xWdn5SYg56twGj32sUF3W4WFQ48ogezLBuYTBY",
      },
      icon: "https://arweave.net/zBO8_CRB3aQrPmMA_F6GP4QnfRVbHYJLyKPtnZPTCwQ",
      decimals: 9,
    },
  },
};

export default function Home() {
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