////////////////////////////////////////////////////////////////////
'use client'

import { ClientOnly } from '@/app/components/ClientOnly';
import { WalletProvider } from '@/app/components/wallet/WalletProvider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">TON Connect Demo</h1>
      <ClientOnly>
        <WalletProvider />
      </ClientOnly>
    </main>
  );
}