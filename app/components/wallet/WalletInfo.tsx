import { formatAddress } from '@/app/utils/formatAddress';

interface WalletInfoProps {
  address: string;
}

export const WalletInfo = ({ address }: WalletInfoProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-4">Connected: {formatAddress(address)}</p>
    </div>
  );
}; 