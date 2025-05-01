'use client'

import { useWalletConnection } from '@/app/hooks/useWalletConnection';
import { Loading } from '@/app/components/ui/Loading';
import { WalletButton } from '@/app/components/wallet/WalletButton';
import { WalletInfo } from '@/app/components/wallet/WalletInfo';

export default function Home() {
  const { tonWalletAddress, isLoading, handleWalletAction } = useWalletConnection();

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Loading />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">TON Connect Demo</h1>
      {tonWalletAddress ? (
        <>
          <WalletInfo address={tonWalletAddress} />
          <WalletButton isConnected={true} onClick={handleWalletAction} />
        </>
      ) : (
        <WalletButton isConnected={false} onClick={handleWalletAction} />
      )}
    </main>
  );
}