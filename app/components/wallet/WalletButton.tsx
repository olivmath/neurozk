interface WalletButtonProps {
  isConnected: boolean;
  onClick: () => void;
}

export const WalletButton = ({ isConnected, onClick }: WalletButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isConnected
          ? "bg-red-500 hover:bg-red-700"
          : "bg-blue-500 hover:bg-blue-700"
      } text-white font-bold py-2 px-4 rounded`}
    >
      {isConnected ? "Disconnect Wallet" : "Connect TON Wallet"}
    </button>
  );
};
