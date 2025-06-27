'use client';

import dynamic from 'next/dynamic';

const WormholeBridge = dynamic(
  () => import('../components/WormholeBridge'),
  { 
    ssr: false,
    loading: () => (
      <div style={{ 
        color: '#78c4b6', 
        textAlign: 'center', 
        padding: '50px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Loading bridge...
      </div>
    )
  }
);

export default function Home() {
  return <WormholeBridge />;
}