'use client'

import { useWalletConnection } from '@/app/hooks/useWalletConnection';
import { Loading } from '@/app/components/ui/Loading';
import { WalletButton } from '@/app/components/wallet/WalletButton';
import { WalletInfo } from '@/app/components/wallet/WalletInfo';

export const WalletProvider = () => {
  const { tonWalletAddress, isLoading, handleWalletAction } = useWalletConnection();

  if (isLoading) {
    return <Loading />;
  }

  return tonWalletAddress ? (
    <>
      <WalletInfo address={tonWalletAddress} />
      <WalletButton isConnected={true} onClick={handleWalletAction} />
    </>
  ) : (
    <WalletButton isConnected={false} onClick={handleWalletAction} />
  );
}; 