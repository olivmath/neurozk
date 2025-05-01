import { Address } from "@ton/core";

export const formatAddress = (address: string): string => {
  const tempAddress = Address.parse(address).toString();
  return `${tempAddress.slice(0, 4)}...${tempAddress.slice(-4)}`;
}; 