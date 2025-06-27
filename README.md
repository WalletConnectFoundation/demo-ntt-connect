# Wormhole NTT Connect demo

This project sets up a Next.js React TypeScript application and integrates it with the Wormhole Connect SDK.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** & **TypeScript**
- **npm** or **yarn**

## Setup

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/wormhole-foundation/demo-ntt-connect.git
cd demo-ntt-connect
```

### 2. Setup Environment Variables

Copy the example environment file and add your API keys:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual API keys:
- `NEXT_PUBLIC_COIN_GECKO_API_KEY` - Get from [CoinGecko](https://www.coingecko.com/en/api)
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` - Get from [WalletConnect Cloud](https://cloud.walletconnect.com/)

### 3. Download Dependencies

Install all required dependencies using npm or yarn:

```bash
# Using npm
npm install

# Or using yarn
yarn
```

### 4. Adjust WormholeConnectConfig

Adjust the `WormholeConnectConfig` in `app/page.tsx` based on the `deployment.json` file from your NTT deployment. This configuration is essential to ensure proper integration with your deployment environment.

### 5. Run the App

Start the development server:

```bash
yarn dev
```

or, if using npm:

```bash
npm run dev
```

### 6. Important Notes
   - Use a private RPC for mainnet, to prevent timeouts