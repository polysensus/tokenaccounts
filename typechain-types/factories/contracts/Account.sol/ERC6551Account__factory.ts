/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ERC6551Account,
  ERC6551AccountInterface,
} from "../../../contracts/Account.sol/ERC6551Account";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "isValidSigner",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611388806100206000396000f3fe6080604052600436106100745760003560e01c8063523e32601161004e578063523e32601461012a5780638da5cb5b14610167578063c19d93fb14610192578063fc0c546a146101bd5761007b565b806301ffc9a7146100805780631626ba7e146100bd57806351945447146100fa5761007b565b3661007b57005b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a291906109a0565b6101ea565b6040516100b491906109e8565b60405180910390f35b3480156100c957600080fd5b506100e460048036038101906100df9190610b7f565b610324565b6040516100f19190610bea565b60405180910390f35b610114600480360381019061010f9190610d32565b610360565b6040516101219190610e42565b60405180910390f35b34801561013657600080fd5b50610151600480360381019061014c9190610e64565b610491565b60405161015e9190610bea565b60405180910390f35b34801561017357600080fd5b5061017c6104bf565b6040516101899190610ed3565b60405180910390f35b34801561019e57600080fd5b506101a7610569565b6040516101b49190610efd565b60405180910390f35b3480156101c957600080fd5b506101d261056f565b6040516101e193929190610f18565b60405180910390f35b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102b557507f6faff5f1000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061031d57507f51945447000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000806103396103326104bf565b85856105ef565b9050801561035157631626ba7e60e01b91505061035a565b600060e01b9150505b92915050565b606061036b3361067e565b6103aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a190610fac565b60405180910390fd5b60008260ff16146103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e79061103e565b60405180910390fd5b60008081546103fe9061108d565b9190508190555060008673ffffffffffffffffffffffffffffffffffffffff1686868660405161042f929190611105565b60006040518083038185875af1925050503d806000811461046c576040519150601f19603f3d011682016040523d82523d6000602084013e610471565b606091505b5080935081925050508061048757815160208301fd5b5095945050505050565b600061049c8461067e565b156104b05763523e326060e01b90506104b8565b600060e01b90505b9392505050565b6000806000806104cd61056f565b9250925092504683146104e65760009350505050610566565b8173ffffffffffffffffffffffffffffffffffffffff16636352211e826040518263ffffffff1660e01b815260040161051f9190610efd565b602060405180830381865afa15801561053c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105609190611133565b93505050505b90565b60005481565b600080600080606067ffffffffffffffff8111156105905761058f610a54565b5b6040519080825280601f01601f1916602001820160405280156105c25781602001600182028036833780820191505090505b5090506060604d60208301303c808060200190518101906105e391906111b3565b93509350935050909192565b60008060006105fe85856106bd565b915091506000600481111561061657610615611206565b5b81600481111561062957610628611206565b5b14801561066157508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b80610673575061067286868661070e565b5b925050509392505050565b60006106886104bf565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b60008060418351036106fe5760008060006020860151925060408601519150606086015160001a90506106f287828585610852565b94509450505050610707565b60006002915091505b9250929050565b60008060008573ffffffffffffffffffffffffffffffffffffffff16631626ba7e60e01b8686604051602401610745929190611244565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516107af91906112a5565b600060405180830381855afa9150503d80600081146107ea576040519150601f19603f3d011682016040523d82523d6000602084013e6107ef565b606091505b509150915081801561080357506020815110155b80156108475750631626ba7e60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168180602001905181019061084591906112d1565b145b925050509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561088d57600060039150915061092b565b6000600187878787604051600081526020016040526040516108b2949392919061130d565b6020604051602081039080840390855afa1580156108d4573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109225760006001925092505061092b565b80600092509250505b94509492505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61097d81610948565b811461098857600080fd5b50565b60008135905061099a81610974565b92915050565b6000602082840312156109b6576109b561093e565b5b60006109c48482850161098b565b91505092915050565b60008115159050919050565b6109e2816109cd565b82525050565b60006020820190506109fd60008301846109d9565b92915050565b6000819050919050565b610a1681610a03565b8114610a2157600080fd5b50565b600081359050610a3381610a0d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a8c82610a43565b810181811067ffffffffffffffff82111715610aab57610aaa610a54565b5b80604052505050565b6000610abe610934565b9050610aca8282610a83565b919050565b600067ffffffffffffffff821115610aea57610ae9610a54565b5b610af382610a43565b9050602081019050919050565b82818337600083830152505050565b6000610b22610b1d84610acf565b610ab4565b905082815260208101848484011115610b3e57610b3d610a3e565b5b610b49848285610b00565b509392505050565b600082601f830112610b6657610b65610a39565b5b8135610b76848260208601610b0f565b91505092915050565b60008060408385031215610b9657610b9561093e565b5b6000610ba485828601610a24565b925050602083013567ffffffffffffffff811115610bc557610bc4610943565b5b610bd185828601610b51565b9150509250929050565b610be481610948565b82525050565b6000602082019050610bff6000830184610bdb565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c3082610c05565b9050919050565b610c4081610c25565b8114610c4b57600080fd5b50565b600081359050610c5d81610c37565b92915050565b6000819050919050565b610c7681610c63565b8114610c8157600080fd5b50565b600081359050610c9381610c6d565b92915050565b600080fd5b600080fd5b60008083601f840112610cb957610cb8610a39565b5b8235905067ffffffffffffffff811115610cd657610cd5610c99565b5b602083019150836001820283011115610cf257610cf1610c9e565b5b9250929050565b600060ff82169050919050565b610d0f81610cf9565b8114610d1a57600080fd5b50565b600081359050610d2c81610d06565b92915050565b600080600080600060808688031215610d4e57610d4d61093e565b5b6000610d5c88828901610c4e565b9550506020610d6d88828901610c84565b945050604086013567ffffffffffffffff811115610d8e57610d8d610943565b5b610d9a88828901610ca3565b93509350506060610dad88828901610d1d565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b60005b83811015610df4578082015181840152602081019050610dd9565b83811115610e03576000848401525b50505050565b6000610e1482610dba565b610e1e8185610dc5565b9350610e2e818560208601610dd6565b610e3781610a43565b840191505092915050565b60006020820190508181036000830152610e5c8184610e09565b905092915050565b600080600060408486031215610e7d57610e7c61093e565b5b6000610e8b86828701610c4e565b935050602084013567ffffffffffffffff811115610eac57610eab610943565b5b610eb886828701610ca3565b92509250509250925092565b610ecd81610c25565b82525050565b6000602082019050610ee86000830184610ec4565b92915050565b610ef781610c63565b82525050565b6000602082019050610f126000830184610eee565b92915050565b6000606082019050610f2d6000830186610eee565b610f3a6020830185610ec4565b610f476040830184610eee565b949350505050565b600082825260208201905092915050565b7f496e76616c6964207369676e6572000000000000000000000000000000000000600082015250565b6000610f96600e83610f4f565b9150610fa182610f60565b602082019050919050565b60006020820190508181036000830152610fc581610f89565b9050919050565b7f4f6e6c792063616c6c206f7065726174696f6e732061726520737570706f727460008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b6000611028602283610f4f565b915061103382610fcc565b604082019050919050565b600060208201905081810360008301526110578161101b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061109882610c63565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036110ca576110c961105e565b5b600182019050919050565b600081905092915050565b60006110ec83856110d5565b93506110f9838584610b00565b82840190509392505050565b60006111128284866110e0565b91508190509392505050565b60008151905061112d81610c37565b92915050565b6000602082840312156111495761114861093e565b5b60006111578482850161111e565b91505092915050565b60008151905061116f81610c6d565b92915050565b600061118082610c05565b9050919050565b61119081611175565b811461119b57600080fd5b50565b6000815190506111ad81611187565b92915050565b6000806000606084860312156111cc576111cb61093e565b5b60006111da86828701611160565b93505060206111eb8682870161119e565b92505060406111fc86828701611160565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61123e81610a03565b82525050565b60006040820190506112596000830185611235565b818103602083015261126b8184610e09565b90509392505050565b600061127f82610dba565b61128981856110d5565b9350611299818560208601610dd6565b80840191505092915050565b60006112b18284611274565b915081905092915050565b6000815190506112cb81610a0d565b92915050565b6000602082840312156112e7576112e661093e565b5b60006112f5848285016112bc565b91505092915050565b61130781610cf9565b82525050565b60006080820190506113226000830187611235565b61132f60208301866112fe565b61133c6040830185611235565b6113496060830184611235565b9594505050505056fea26469706673582212203c8accb1bc4a62e485b49747172459395d9c00e7215a8806252ae1e872e080fd64736f6c634300080d0033";

type ERC6551AccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC6551AccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC6551Account__factory extends ContractFactory {
  constructor(...args: ERC6551AccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ERC6551Account & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC6551Account__factory {
    return super.connect(runner) as ERC6551Account__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC6551AccountInterface {
    return new Interface(_abi) as ERC6551AccountInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC6551Account {
    return new Contract(address, _abi, runner) as unknown as ERC6551Account;
  }
}
