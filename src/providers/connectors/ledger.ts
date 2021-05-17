import { IAbstractConnectorOptions } from "../../helpers";

interface ILedgerConnectorOptions extends IAbstractConnectorOptions {
  rpcUrl: string;
  chainId: number;
}

const ConnectToLedger = async (
  LedgerProvider: any,
  opts: ILedgerConnectorOptions
) => {
  const provider = new LedgerProvider(opts);

  return provider;
};

export default ConnectToLedger;