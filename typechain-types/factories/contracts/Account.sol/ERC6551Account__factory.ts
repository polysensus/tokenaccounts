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
  "0x608060405234801561001057600080fd5b5061137d806100206000396000f3fe6080604052600436106100745760003560e01c8063523e32601161004e578063523e32601461012a5780638da5cb5b14610167578063c19d93fb14610192578063fc0c546a146101bd5761007b565b806301ffc9a7146100805780631626ba7e146100bd57806351945447146100fa5761007b565b3661007b57005b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a2919061099e565b6101ea565b6040516100b491906109e6565b60405180910390f35b3480156100c957600080fd5b506100e460048036038101906100df9190610b7d565b610324565b6040516100f19190610be8565b60405180910390f35b610114600480360381019061010f9190610d30565b610360565b6040516101219190610e37565b60405180910390f35b34801561013657600080fd5b50610151600480360381019061014c9190610e59565b610491565b60405161015e9190610be8565b60405180910390f35b34801561017357600080fd5b5061017c6104bf565b6040516101899190610ec8565b60405180910390f35b34801561019e57600080fd5b506101a7610569565b6040516101b49190610ef2565b60405180910390f35b3480156101c957600080fd5b506101d261056f565b6040516101e193929190610f0d565b60405180910390f35b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102b557507f6faff5f1000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061031d57507f51945447000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000806103396103326104bf565b85856105ef565b9050801561035157631626ba7e60e01b91505061035a565b600060e01b9150505b92915050565b606061036b3361067f565b6103aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a190610fa1565b60405180910390fd5b60008260ff16146103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e790611033565b60405180910390fd5b60008081546103fe90611082565b9190508190555060008673ffffffffffffffffffffffffffffffffffffffff1686868660405161042f9291906110fa565b60006040518083038185875af1925050503d806000811461046c576040519150601f19603f3d011682016040523d82523d6000602084013e610471565b606091505b5080935081925050508061048757815160208301fd5b5095945050505050565b600061049c8461067f565b156104b05763523e326060e01b90506104b8565b600060e01b90505b9392505050565b6000806000806104cd61056f565b9250925092504683146104e65760009350505050610566565b8173ffffffffffffffffffffffffffffffffffffffff16636352211e826040518263ffffffff1660e01b815260040161051f9190610ef2565b602060405180830381865afa15801561053c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105609190611128565b93505050505b90565b60005481565b600080600080606067ffffffffffffffff8111156105905761058f610a52565b5b6040519080825280601f01601f1916602001820160405280156105c25781602001600182028036833780820191505090505b5090506060604d60208301303c808060200190518101906105e391906111a8565b93509350935050909192565b60008060006105fe85856106be565b509150915060006003811115610617576106166111fb565b5b81600381111561062a576106296111fb565b5b14801561066257508573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b80610674575061067386868661071a565b5b925050509392505050565b60006106896104bf565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b600080600060418451036107035760008060006020870151925060408701519150606087015160001a90506106f58882858561083e565b955095509550505050610713565b60006002855160001b9250925092505b9250925092565b60008060008573ffffffffffffffffffffffffffffffffffffffff168585604051602401610749929190611239565b604051602081830303815290604052631626ba7e60e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161079b919061129a565b600060405180830381855afa9150503d80600081146107d6576040519150601f19603f3d011682016040523d82523d6000602084013e6107db565b606091505b50915091508180156107ef57506020815110155b80156108335750631626ba7e60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168180602001905181019061083191906112c6565b145b925050509392505050565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c111561087e576000600385925092509250610928565b6000600188888888604051600081526020016040526040516108a39493929190611302565b6020604051602081039080840390855afa1580156108c5573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361091957600060016000801b93509350935050610928565b8060008060001b935093509350505b9450945094915050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61097b81610946565b811461098657600080fd5b50565b60008135905061099881610972565b92915050565b6000602082840312156109b4576109b361093c565b5b60006109c284828501610989565b91505092915050565b60008115159050919050565b6109e0816109cb565b82525050565b60006020820190506109fb60008301846109d7565b92915050565b6000819050919050565b610a1481610a01565b8114610a1f57600080fd5b50565b600081359050610a3181610a0b565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a8a82610a41565b810181811067ffffffffffffffff82111715610aa957610aa8610a52565b5b80604052505050565b6000610abc610932565b9050610ac88282610a81565b919050565b600067ffffffffffffffff821115610ae857610ae7610a52565b5b610af182610a41565b9050602081019050919050565b82818337600083830152505050565b6000610b20610b1b84610acd565b610ab2565b905082815260208101848484011115610b3c57610b3b610a3c565b5b610b47848285610afe565b509392505050565b600082601f830112610b6457610b63610a37565b5b8135610b74848260208601610b0d565b91505092915050565b60008060408385031215610b9457610b9361093c565b5b6000610ba285828601610a22565b925050602083013567ffffffffffffffff811115610bc357610bc2610941565b5b610bcf85828601610b4f565b9150509250929050565b610be281610946565b82525050565b6000602082019050610bfd6000830184610bd9565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c2e82610c03565b9050919050565b610c3e81610c23565b8114610c4957600080fd5b50565b600081359050610c5b81610c35565b92915050565b6000819050919050565b610c7481610c61565b8114610c7f57600080fd5b50565b600081359050610c9181610c6b565b92915050565b600080fd5b600080fd5b60008083601f840112610cb757610cb6610a37565b5b8235905067ffffffffffffffff811115610cd457610cd3610c97565b5b602083019150836001820283011115610cf057610cef610c9c565b5b9250929050565b600060ff82169050919050565b610d0d81610cf7565b8114610d1857600080fd5b50565b600081359050610d2a81610d04565b92915050565b600080600080600060808688031215610d4c57610d4b61093c565b5b6000610d5a88828901610c4c565b9550506020610d6b88828901610c82565b945050604086013567ffffffffffffffff811115610d8c57610d8b610941565b5b610d9888828901610ca1565b93509350506060610dab88828901610d1b565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b60005b83811015610df2578082015181840152602081019050610dd7565b60008484015250505050565b6000610e0982610db8565b610e138185610dc3565b9350610e23818560208601610dd4565b610e2c81610a41565b840191505092915050565b60006020820190508181036000830152610e518184610dfe565b905092915050565b600080600060408486031215610e7257610e7161093c565b5b6000610e8086828701610c4c565b935050602084013567ffffffffffffffff811115610ea157610ea0610941565b5b610ead86828701610ca1565b92509250509250925092565b610ec281610c23565b82525050565b6000602082019050610edd6000830184610eb9565b92915050565b610eec81610c61565b82525050565b6000602082019050610f076000830184610ee3565b92915050565b6000606082019050610f226000830186610ee3565b610f2f6020830185610eb9565b610f3c6040830184610ee3565b949350505050565b600082825260208201905092915050565b7f496e76616c6964207369676e6572000000000000000000000000000000000000600082015250565b6000610f8b600e83610f44565b9150610f9682610f55565b602082019050919050565b60006020820190508181036000830152610fba81610f7e565b9050919050565b7f4f6e6c792063616c6c206f7065726174696f6e732061726520737570706f727460008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b600061101d602283610f44565b915061102882610fc1565b604082019050919050565b6000602082019050818103600083015261104c81611010565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061108d82610c61565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036110bf576110be611053565b5b600182019050919050565b600081905092915050565b60006110e183856110ca565b93506110ee838584610afe565b82840190509392505050565b60006111078284866110d5565b91508190509392505050565b60008151905061112281610c35565b92915050565b60006020828403121561113e5761113d61093c565b5b600061114c84828501611113565b91505092915050565b60008151905061116481610c6b565b92915050565b600061117582610c03565b9050919050565b6111858161116a565b811461119057600080fd5b50565b6000815190506111a28161117c565b92915050565b6000806000606084860312156111c1576111c061093c565b5b60006111cf86828701611155565b93505060206111e086828701611193565b92505060406111f186828701611155565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61123381610a01565b82525050565b600060408201905061124e600083018561122a565b81810360208301526112608184610dfe565b90509392505050565b600061127482610db8565b61127e81856110ca565b935061128e818560208601610dd4565b80840191505092915050565b60006112a68284611269565b915081905092915050565b6000815190506112c081610a0b565b92915050565b6000602082840312156112dc576112db61093c565b5b60006112ea848285016112b1565b91505092915050565b6112fc81610cf7565b82525050565b6000608082019050611317600083018761122a565b61132460208301866112f3565b611331604083018561122a565b61133e606083018461122a565b9594505050505056fea2646970667358221220fe2ce0596d4c1a6fae85fe46cb3cb135a03a096b285810e8e3e6871a97c3d83264736f6c63430008140033";

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
