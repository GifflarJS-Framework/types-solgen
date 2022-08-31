declare module "@types/gifflar-library/modules/compiler/types/ICompiler" {
  export interface ICompiler {
    compile(code: string): any;
  }
}
declare module "@types/gifflar-library/modules/deployer/types/IAbiItem" {
  import { AbiItem } from "web3-utils";
  export type IAbiItem = AbiItem;
}
declare module "@types/gifflar-library/modules/deployer/types/IDeployerInputs" {
  import { AbiItem } from "web3-utils";
  export interface IDeployerInputs {
    abi: AbiItem;
    bytecode: string;
    args: any[];
    from?: string;
    gas?: number;
    gasPrice?: string;
    nonce?: number;
  }
}
declare module "@types/gifflar-library/modules/deployer/types/IWeb3" {
  import Web3 from "web3";
  export type IWeb3 = Web3;
}
declare module "@types/gifflar-library/modules/deployer/types/INetworkConfig" {
  export interface INetworkConfig {
    key: string;
    networkId: number;
    gas: number;
    gasPrice?: string;
    nodeLink: string;
  }
}
declare module "@types/gifflar-library/modules/deployer/types/IDeployer" {
  import { AbiItem } from "web3-utils";
  import { Contract } from "web3-eth-contract";
  import { IDeployerInputs } from "@types/gifflar-library/modules/deployer/types/IDeployerInputs";
  import { IWeb3 } from "@types/gifflar-library/modules/deployer/types/IWeb3";
  import { INetworkConfig } from "@types/gifflar-library/modules/deployer/types/INetworkConfig";
  import { Account } from "web3-core";
  export interface IDeployer {
    setWeb3(newWeb3: IWeb3): IWeb3;
    getWeb3(): IWeb3 | undefined | null;
    setNetworkConfig(networkConfig: INetworkConfig): void;
    createWeb3(networkConfig: INetworkConfig): IWeb3;
    addSigner(accountPrivateKey: string): Account;
    deploy(
      inputs: IDeployerInputs,
      accountPrivateKey?: string
    ): Promise<Contract>;
    retrieve(abi: AbiItem, address: string): Promise<Contract>;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/import/types/IImport" {
  export interface IImport {
    identifierPath: string;
    alias?: string;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/function/types/IInput" {
  export interface IInput {
    name: string;
    type: string;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/event/types/IEvent" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  export interface IEvent {
    name: string;
    inputs: Array<IInput>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/revert/types/ICustomErrorCall" {
  export interface ICustomErrorcall {
    customErrorName: string;
    args?: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/methodcall/types/ICreateMethodCallDTO" {
  export interface ICreateMethodCallDTO {
    variable: string;
    method: string;
    value: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/newcontract/types/ICreateNewContract" {
  export interface ICreateNewContractDTO {
    contractName: string;
    args: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/try/types/ITryExpression" {
  import { ICreateMethodCallDTO } from "@types/gifflar-library/modules/models/statements/methodcall/types/ICreateMethodCallDTO";
  import { ICreateNewContractDTO } from "@types/gifflar-library/modules/models/statements/newcontract/types/ICreateNewContract";
  export interface ITryExpression {
    newContract?: ICreateNewContractDTO;
    methodCall?: ICreateMethodCallDTO;
  }
}
declare module "@types/gifflar-library/modules/types/IDataLocation" {
  export type IDataLocation = "memory" | "storage" | "calldata";
}
declare module "@types/gifflar-library/modules/types/IFixedBytes" {
  export type IFixedBytes =
    | "bytes1"
    | "bytes2"
    | "bytes3"
    | "bytes4"
    | "bytes5"
    | "bytes6"
    | "bytes7"
    | "bytes8"
    | "bytes9"
    | "bytes10"
    | "bytes11"
    | "bytes12"
    | "bytes13"
    | "bytes14"
    | "bytes15"
    | "bytes16"
    | "bytes17"
    | "bytes18"
    | "bytes19"
    | "bytes20"
    | "bytes21"
    | "bytes22"
    | "bytes23"
    | "bytes24"
    | "bytes25"
    | "bytes26"
    | "bytes27"
    | "bytes28"
    | "bytes29"
    | "bytes30"
    | "bytes31"
    | "bytes32";
}
declare module "@types/gifflar-library/modules/types/ISignedIntegerType" {
  export type ISignedIntegerType =
    | "int"
    | "int8"
    | "int16"
    | "int24"
    | "int32"
    | "int40"
    | "int48"
    | "int56"
    | "int64"
    | "int72"
    | "int80"
    | "int88"
    | "int96"
    | "int104"
    | "int112"
    | "int120"
    | "int128"
    | "int136"
    | "int144"
    | "int152"
    | "int160"
    | "int168"
    | "int176"
    | "int184"
    | "int192"
    | "int200"
    | "int208"
    | "int216"
    | "int224"
    | "int232"
    | "int240"
    | "int248"
    | "int256";
}
declare module "@types/gifflar-library/modules/types/IUnsignedIntegerType" {
  export type IUnsignedIntegerType =
    | "uint"
    | "uint8"
    | "uint16"
    | "uint24"
    | "uint32"
    | "uint40"
    | "uint48"
    | "uint56"
    | "uint64"
    | "uint72"
    | "uint80"
    | "uint88"
    | "uint96"
    | "uint104"
    | "uint112"
    | "uint120"
    | "uint128"
    | "uint136"
    | "uint144"
    | "uint152"
    | "uint160"
    | "uint168"
    | "uint176"
    | "uint184"
    | "uint192"
    | "uint200"
    | "uint208"
    | "uint216"
    | "uint224"
    | "uint232"
    | "uint240"
    | "uint248"
    | "uint256";
}
declare module "@types/gifflar-library/modules/types/IElementaryTypeName" {
  import { IFixedBytes } from "@types/gifflar-library/modules/types/IFixedBytes";
  import { ISignedIntegerType } from "@types/gifflar-library/modules/types/ISignedIntegerType";
  import { IUnsignedIntegerType } from "@types/gifflar-library/modules/types/IUnsignedIntegerType";
  export type IElementaryTypeName =
    | "address"
    | "address payable"
    | "bool"
    | "string"
    | "bytes"
    | ISignedIntegerType
    | IUnsignedIntegerType
    | IFixedBytes
    | "fixed"
    | "unfixed";
}
declare module "@types/gifflar-library/modules/types/IMappingKeyType" {
  import { IElementaryTypeName } from "@types/gifflar-library/modules/types/IElementaryTypeName";
  export interface IMappingKeyType {
    regularType?: IElementaryTypeName;
    customType?: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/mapping/types/ICreateNestedMapping" {
  import { IMappingKeyType } from "@types/gifflar-library/modules/types/IMappingKeyType";
  import { IMappingTypeName } from "@types/gifflar-library/modules/types/IMappingTypeName";
  export interface ICreateNestedMapping {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
  }
}
declare module "@types/gifflar-library/modules/types/IArrayType" {
  import { IElementaryTypeName } from "@types/gifflar-library/modules/types/IElementaryTypeName";
  export interface IArrayType {
    arrayType: IElementaryTypeName;
    arraySize?: number;
  }
}
declare module "@types/gifflar-library/modules/types/ITypeName" {
  import { IArrayType } from "@types/gifflar-library/modules/types/IArrayType";
  import { IElementaryTypeName } from "@types/gifflar-library/modules/types/IElementaryTypeName";
  export interface ITypeName {
    regularType?: IElementaryTypeName;
    array?: IArrayType;
    customType?: string;
  }
}
declare module "@types/gifflar-library/modules/types/IMappingTypeName" {
  import { ICreateNestedMapping } from "@types/gifflar-library/modules/models/statements/mapping/types/ICreateNestedMapping";
  import { ITypeName } from "@types/gifflar-library/modules/types/ITypeName";
  export interface IMappingTypeName extends ITypeName {
    nestedMapping?: ICreateNestedMapping;
  }
}
declare module "@types/gifflar-library/modules/models/statements/expression/types/IExpression" {
  export interface IExpression {
    statement: "expression";
    value: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/assignment/types/IAssignment" {
  import { IExpression } from "@types/gifflar-library/modules/models/statements/expression/types/IExpression";
  export interface IAssignment {
    statement: "assignment";
    variable: string;
    value: IExpression;
  }
}
declare module "@types/gifflar-library/modules/models/statements/eventCall/types/IEventCall" {
  export interface IEventCall {
    statement: "event_call";
    name: string;
    variables: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/if/types/IIf" {
  import { IStackItem } from "@types/gifflar-library/modules/models/definitions/content/types/IStackItem";
  export interface IIf extends IStackItem {
    statement: "if";
    else: boolean;
    condition: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/methodcall/types/IMethodCall" {
  export interface IMethodCall {
    statement: "method_call";
    variable: string;
    method: string;
    value: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/newcontract/types/INewContract" {
  export interface INewContract {
    statement: "newcontract";
    contractName: string;
    args: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/stateVariable/types/IVariable" {
  import { INewContract } from "@types/gifflar-library/modules/models/statements/newcontract/types/INewContract";
  export interface IVariable {
    type: string;
    name: string;
    value?: string | INewContract;
  }
}
declare module "@types/gifflar-library/modules/models/statements/variable/types/ILocalVariable" {
  import { IVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IVariable";
  import { IDataLocation } from "@types/gifflar-library/modules/types/IDataLocation";
  export interface ILocalVariable extends IVariable {
    statement: "variable";
    dataLocation?: IDataLocation;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/content/types/IContents" {
  import { IAssignment } from "@types/gifflar-library/modules/models/statements/assignment/types/IAssignment";
  import { IEventCall } from "@types/gifflar-library/modules/models/statements/eventCall/types/IEventCall";
  import { IIf } from "@types/gifflar-library/modules/models/statements/if/types/IIf";
  import { IMethodCall } from "@types/gifflar-library/modules/models/statements/methodcall/types/IMethodCall";
  import { ILocalVariable } from "@types/gifflar-library/modules/models/statements/variable/types/ILocalVariable";
  export type IContents =
    | IAssignment
    | IEventCall
    | IIf
    | ILocalVariable
    | IMethodCall;
}
declare module "@types/gifflar-library/modules/models/definitions/content/types/IStackItem" {
  import { IContents } from "@types/gifflar-library/modules/models/definitions/content/types/IContents";
  export interface IStackItem {
    content: Array<IContents>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/content/types/IContent" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { ICustomErrorcall } from "@types/gifflar-library/modules/models/statements/revert/types/ICustomErrorCall";
  import { ITryExpression } from "@types/gifflar-library/modules/models/statements/try/types/ITryExpression";
  import { IDataLocation } from "@types/gifflar-library/modules/types/IDataLocation";
  import { IMappingKeyType } from "@types/gifflar-library/modules/types/IMappingKeyType";
  import { IMappingTypeName } from "@types/gifflar-library/modules/types/IMappingTypeName";
  import { ITypeName } from "@types/gifflar-library/modules/types/ITypeName";
  import { IStackItem } from "@types/gifflar-library/modules/models/definitions/content/types/IStackItem";
  export interface IContent extends IStackItem {
    setAssert(condition: string): IContent;
    setBreak(): IContent;
    setVariable(type: ITypeName, name: string, value?: string): IContent;
    setMethodCall(variable: string, method: string, value: string): IContent;
    setAssignment(variable: string, expression: string | undefined): IContent;
    setEventCall(name: string, inputNames: Array<string>): IContent;
    setContractVariable(
      variable: string,
      contractName: string,
      args: Array<string>
    ): IContent;
    setReturn(expressions: Array<string>): IContent;
    setContinue(): IContent;
    setMapping(
      type: IMappingKeyType,
      typeName: IMappingTypeName,
      name: string
    ): IContent;
    setCatch(parameters: Array<IInput>, identifier?: string): IContent;
    setRequire(condition: string, errorMessage?: string): IContent;
    setRevert(errorDefinition: {
      message?: string;
      customErrorCall?: ICustomErrorcall;
    }): IContent;
    setTry(parameters: Array<IInput>, expression: ITryExpression): IContent;
    /**
     * Remember to use the "endIf" function when finishing "if" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginIf(condition: string, onElse?: boolean): IContent;
    /**
     * Remember to use the "endElseIf" function when finishing "elseIf" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginElseIf(condition: string): IContent;
    /**
     * Remember to use the "endElse" function when finishing "else" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginElse(): IContent;
    /**
     * Remember to use the "endDoWhile" function when finishing "doWhile" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginDoWhile(condition: string): IContent;
    /**
     * Remember to use the "endWhile" function when finishing "while" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginWhile(condition: string): IContent;
    /**
     * Remember to use the "endFor" function when finishing "for" conditions actions,
     * or else all the conditions made will have any effect.
     *  */
    beginFor(
      variable: {
        type: string;
        name: string;
        value: string;
        dataLocation: IDataLocation;
      },
      condition: string,
      expression: string
    ): IContent;
    endIf(): IContent;
    endElseIf(): IContent;
    endElse(): IContent;
    endDoWhile(): IContent;
    endWhile(): IContent;
    endFor(): IContent;
  }
}
declare module "@types/gifflar-library/modules/types/IFunctionStateMutabilityType" {
  export type IFunctionStateMutabilityType = "view" | "pure" | "payable";
}
declare module "@types/gifflar-library/modules/models/definitions/function/types/IOutput" {
  export interface IOutput {
    name?: string;
    type: string;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/function/types/IFunctionJson" {
  import { IStackItem } from "@types/gifflar-library/modules/models/definitions/content/types/IStackItem";
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { IFunctionStateMutabilityType } from "@types/gifflar-library/modules/types/IFunctionStateMutabilityType";
  import { IOutput } from "@types/gifflar-library/modules/models/definitions/function/types/IOutput";
  export interface IFunctionJson extends IStackItem {
    name: string;
    scope: string;
    isConstructor: boolean;
    stateMutability?: IFunctionStateMutabilityType;
    inputs: Array<IInput>;
    outputs: Array<IOutput>;
    modifiers: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/function/types/IFunction" {
  import { IContent } from "@types/gifflar-library/modules/models/definitions/content/types/IContent";
  import { ITypeName } from "@types/gifflar-library/modules/types/ITypeName";
  import { IFunctionJson } from "@types/gifflar-library/modules/models/definitions/function/types/IFunctionJson";
  export interface IFunction extends IFunctionJson, IContent {
    json: () => IFunctionJson;
    toString: () => string;
    setInput: (type: ITypeName, variable: string) => IFunction;
    setOutput: (type: ITypeName, variable?: string) => IFunction;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/inherits/types/IInherits" {
  export interface IInherits {
    identifier: string;
    args?: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/customError/types/ICustomError" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  export interface ICustomError {
    name: string;
    args: Array<IInput>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/modifier/types/IModifier" {
  import { IContent } from "@types/gifflar-library/modules/models/definitions/content/types/IContent";
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  export interface IModifier extends IContent {
    title: string;
    args: Array<IInput>;
    isVirtual: boolean;
    isOverriding: boolean;
    toString(): string;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/enum/types/IEnum" {
  export interface IEnum {
    identifier: string;
    identifiersOptions: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/interface/types/IInterfaceItem" {
  import { ICustomError } from "@types/gifflar-library/modules/models/definitions/customError/types/ICustomError";
  import { IEvent } from "@types/gifflar-library/modules/models/definitions/event/types/IEvent";
  import { IFunction } from "@types/gifflar-library/modules/models/definitions/function/types/IFunction";
  import { IInherits } from "@types/gifflar-library/modules/models/toplevels/inherits/types/IInherits";
  import { IModifier } from "@types/gifflar-library/modules/models/definitions/modifier/types/IModifier";
  import { IEnum } from "@types/gifflar-library/modules/models/definitions/enum/types/IEnum";
  export interface IInterfaceItem {
    name: string;
    enums?: Array<IEnum>;
    inherits?: Array<IInherits>;
    events?: Array<IEvent>;
    modifiers?: Array<IModifier>;
    customErrors?: Array<ICustomError>;
    functions?: Array<IFunction>;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/interface/types/IInterfaceJson" {
  import { IInterfaceItem } from "@types/gifflar-library/modules/models/toplevels/interface/types/IInterfaceItem";
  export interface IInterfaceJson {
    interface: IInterfaceItem;
    code: string;
    json: any;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/interface/types/IInterface" {
  import { IEvent } from "@types/gifflar-library/modules/models/definitions/event/types/IEvent";
  import { IFunction } from "@types/gifflar-library/modules/models/definitions/function/types/IFunction";
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { IOutput } from "@types/gifflar-library/modules/models/definitions/function/types/IOutput";
  import { IInherits } from "@types/gifflar-library/modules/models/toplevels/inherits/types/IInherits";
  import { IFunctionStateMutabilityType } from "@types/gifflar-library/modules/types/IFunctionStateMutabilityType";
  import { IInterfaceJson } from "@types/gifflar-library/modules/models/toplevels/interface/types/IInterfaceJson";
  export interface IInterface extends IInterfaceJson {
    setInheritance(identifier: string, args?: Array<string>): IInherits;
    createEvent(name: string, inputs: Array<IInput>): IEvent;
    createFunction(
      name: string,
      inputs?: Array<IInput>,
      outputs?: Array<IOutput>,
      stateMutability?: IFunctionStateMutabilityType
    ): IFunction;
    toJson(): IInterfaceJson;
    toString(): string;
  }
}
declare module "@types/gifflar-library/modules/managing/GifflarInterface/types/IGifflarInterface" {
  import { IImport } from "@types/gifflar-library/modules/models/toplevels/import/types/IImport";
  import { IInterface } from "@types/gifflar-library/modules/models/toplevels/interface/types/IInterface";
  import { IInterfaceJson } from "@types/gifflar-library/modules/models/toplevels/interface/types/IInterfaceJson";
  export interface IGifflarInterface extends IInterface {
    setName(newName: string): void;
    getName(): string;
    setImport(identifierPath: string, alias?: string): IImport;
    write(contracts?: Array<IInterfaceJson>): string;
    compile(callback: (errors: any) => void): any;
    written(): string | undefined;
    compiled(): any | undefined;
  }
}
declare module "@types/gifflar-library/modules/managing/GifflarInterface/types/IGifflarInterfaceModel" {
  import { IGifflarInterface } from "@types/gifflar-library/modules/managing/GifflarInterface/types/IGifflarInterface";
  export interface IGifflarInterfaceModel {
    execute(interfaceName: string): IGifflarInterface;
  }
}
declare module "@types/gifflar-library/modules/managing/gifflarContract/types/IContractDeployDTO" {
  export interface IContractDeployDTO {
    args: any[];
    from: string;
    gas: number;
  }
}
declare module "@types/gifflar-library/modules/types/IVisibility" {
  export type IVisibility = "internal" | "external" | "private" | "public";
}
declare module "@types/gifflar-library/modules/models/definitions/stateMapping/types/IStateMapping" {
  import { IMappingKeyType } from "@types/gifflar-library/modules/types/IMappingKeyType";
  import { IMappingTypeName } from "@types/gifflar-library/modules/types/IMappingTypeName";
  import { IVisibility } from "@types/gifflar-library/modules/types/IVisibility";
  export interface IStateMapping {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
    scope?: IVisibility;
  }
}
declare module "@types/gifflar-library/modules/types/IVariableStateMutabilityType" {
  export type IVariableStateMutabilityType = "constant" | "immutable";
}
declare module "@types/gifflar-library/modules/models/definitions/stateVariable/types/IStateVariable" {
  import { IVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IVariable";
  import { IVariableStateMutabilityType } from "@types/gifflar-library/modules/types/IVariableStateMutabilityType";
  export interface IStateVariable extends IVariable {
    stateMutability?: IVariableStateMutabilityType;
    scope: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/mapping/types/ICreateMappingDTO" {
  import { IMappingKeyType } from "@types/gifflar-library/modules/types/IMappingKeyType";
  import { IMappingTypeName } from "@types/gifflar-library/modules/types/IMappingTypeName";
  export interface ICreateMappingDTO {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/variable/types/ICreateVariableDTO" {
  import { INewContract } from "@types/gifflar-library/modules/models/statements/newcontract/types/INewContract";
  import { IDataLocation } from "@types/gifflar-library/modules/types/IDataLocation";
  export interface ICreateVariableDTO {
    type: string;
    dataLocation?: IDataLocation;
    name: string;
    value?: string | INewContract;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/struct/types/IStruct" {
  import { ICreateMappingDTO } from "@types/gifflar-library/modules/models/statements/mapping/types/ICreateMappingDTO";
  import { ICreateVariableDTO } from "@types/gifflar-library/modules/models/statements/variable/types/ICreateVariableDTO";
  export interface IStruct {
    identifier: string;
    variables: Array<ICreateVariableDTO>;
    mappings: Array<ICreateMappingDTO>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/using/types/IUsing" {
  export interface IUsing {
    identifier: string;
    type: string;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBodyItem" {
  import { ICustomError } from "@types/gifflar-library/modules/models/definitions/customError/types/ICustomError";
  import { IEnum } from "@types/gifflar-library/modules/models/definitions/enum/types/IEnum";
  import { IEvent } from "@types/gifflar-library/modules/models/definitions/event/types/IEvent";
  import { IFunction } from "@types/gifflar-library/modules/models/definitions/function/types/IFunction";
  import { IModifier } from "@types/gifflar-library/modules/models/definitions/modifier/types/IModifier";
  import { IStateMapping } from "@types/gifflar-library/modules/models/definitions/stateMapping/types/IStateMapping";
  import { IStateVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IStateVariable";
  import { IStruct } from "@types/gifflar-library/modules/models/definitions/struct/types/IStruct";
  import { IUsing } from "@types/gifflar-library/modules/models/definitions/using/types/IUsing";
  export interface IContractBodyItem {
    usings?: Array<IUsing>;
    structs?: Array<IStruct>;
    enums?: Array<IEnum>;
    variables?: Array<IStateVariable>;
    mappings?: Array<IStateMapping>;
    events?: Array<IEvent>;
    modifiers?: Array<IModifier>;
    customErrors?: Array<ICustomError>;
    functions?: Array<IFunction>;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBody" {
  import { ICustomError } from "@types/gifflar-library/modules/models/definitions/customError/types/ICustomError";
  import { IEnum } from "@types/gifflar-library/modules/models/definitions/enum/types/IEnum";
  import { IEvent } from "@types/gifflar-library/modules/models/definitions/event/types/IEvent";
  import { IFunction } from "@types/gifflar-library/modules/models/definitions/function/types/IFunction";
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { IOutput } from "@types/gifflar-library/modules/models/definitions/function/types/IOutput";
  import { IModifier } from "@types/gifflar-library/modules/models/definitions/modifier/types/IModifier";
  import { IStateMapping } from "@types/gifflar-library/modules/models/definitions/stateMapping/types/IStateMapping";
  import { IStateVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IStateVariable";
  import { IStruct } from "@types/gifflar-library/modules/models/definitions/struct/types/IStruct";
  import { IUsing } from "@types/gifflar-library/modules/models/definitions/using/types/IUsing";
  import { ICreateMappingDTO } from "@types/gifflar-library/modules/models/statements/mapping/types/ICreateMappingDTO";
  import { ICreateVariableDTO } from "@types/gifflar-library/modules/models/statements/variable/types/ICreateVariableDTO";
  import { IMappingKeyType } from "@types/gifflar-library/modules/types/IMappingKeyType";
  import { IMappingTypeName } from "@types/gifflar-library/modules/types/IMappingTypeName";
  import { ITypeName } from "@types/gifflar-library/modules/types/ITypeName";
  import { IVisibility } from "@types/gifflar-library/modules/types/IVisibility";
  import { IContractBodyItem } from "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBodyItem";
  export interface IContractBody {
    body: IContractBodyItem;
    createUsing(identifier: string, type: ITypeName): IUsing;
    createEvent(name: string, inputs: Array<IInput>): IEvent;
    createModifier(
      title: string,
      args: Array<IInput>,
      options: {
        isOverriding?: boolean;
        isVirtual?: boolean;
      }
    ): IModifier;
    createCustomError(name: string, args: Array<IInput>): ICustomError;
    createEnum(identifier: string, identifiersOptions: string[]): IEnum;
    createMapping(
      type: IMappingKeyType,
      typeName: IMappingTypeName,
      name: string,
      scope?: IVisibility
    ): IStateMapping;
    createVariable(
      type: ITypeName,
      name: string,
      scope: string,
      value?: string
    ): IStateVariable;
    createFunction(
      name: string,
      scope: string,
      inputs?: Array<IInput>,
      outputs?: Array<IOutput>
    ): IFunction;
    createStruct(
      identifier: string,
      variables: Array<ICreateVariableDTO>,
      mappings: Array<ICreateMappingDTO>
    ): IStruct;
  }
}
declare module "@types/gifflar-library/modules/types/IVariableOptions" {
  export interface IVariableOptions {
    customType?: string;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/fallback/types/IFallback" {
  import { IContent } from "@types/gifflar-library/modules/models/definitions/content/types/IContent";
  export interface IFallback extends IContent {
    isPayable: boolean;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/receive/types/IReceive" {
  import { IContent } from "@types/gifflar-library/modules/models/definitions/content/types/IContent";
  export interface IReceive extends IContent {}
}
declare module "@types/gifflar-library/modules/models/toplevels/contract/types/IContractItem" {
  import { IInherits } from "@types/gifflar-library/modules/models/toplevels/inherits/types/IInherits";
  import { IContractBodyItem } from "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBodyItem";
  import { IFallback } from "@types/gifflar-library/modules/models/definitions/fallback/types/IFallback";
  import { IReceive } from "@types/gifflar-library/modules/models/definitions/receive/types/IReceive";
  export interface IContractItem extends IContractBodyItem {
    name: string;
    inherits?: Array<IInherits>;
    fallback?: IFallback;
    receive?: IReceive;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/contract/types/IContractJson" {
  import { Contract } from "web3-eth-contract";
  import { IContractItem } from "@types/gifflar-library/modules/models/toplevels/contract/types/IContractItem";
  export interface IContractJson {
    contract: IContractItem;
    code?: string;
    json?: any;
    instance?: Contract | undefined;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/contract/types/IContract" {
  import { IContractBody } from "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBody";
  import { IEvent } from "@types/gifflar-library/modules/models/definitions/event/types/IEvent";
  import { IFunction } from "@types/gifflar-library/modules/models/definitions/function/types/IFunction";
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { IOutput } from "@types/gifflar-library/modules/models/definitions/function/types/IOutput";
  import { IInherits } from "@types/gifflar-library/modules/models/toplevels/inherits/types/IInherits";
  import { IStateVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IStateVariable";
  import { ITypeName } from "@types/gifflar-library/modules/types/ITypeName";
  import { IVariableOptions } from "@types/gifflar-library/modules/types/IVariableOptions";
  import { IContractJson } from "@types/gifflar-library/modules/models/toplevels/contract/types/IContractJson";
  import { IFallback } from "@types/gifflar-library/modules/models/definitions/fallback/types/IFallback";
  import { IReceive } from "@types/gifflar-library/modules/models/definitions/receive/types/IReceive";
  export interface IContract extends IContractJson, IContractBody {
    toJson(): IContractJson;
    setInheritance(identifier: string, args?: Array<string>): IInherits;
    createEvent(name: string, inputs: Array<IInput>): IEvent;
    createVariable(
      type: ITypeName,
      name: string,
      scope: string,
      value?: string,
      options?: IVariableOptions
    ): IStateVariable;
    createConstructor(
      scope: string,
      inputs?: Array<IInput>,
      outputs?: Array<IOutput>
    ): IFunction;
    createFunction(
      name: string,
      scope: string,
      inputs?: Array<IInput>,
      outputs?: Array<IOutput>
    ): IFunction;
    createFallback(isPayable?: boolean): IFallback;
    createReceive(): IReceive;
    toString(): string;
  }
}
declare module "@types/gifflar-library/modules/managing/gifflarContract/types/IGifflarContract" {
  import { INetworkConfig } from "@types/gifflar-library/modules/deployer/types/INetworkConfig";
  import { IWeb3 } from "@types/gifflar-library/modules/deployer/types/IWeb3";
  import { IContract } from "@types/gifflar-library/modules/models/toplevels/contract/types/IContract";
  import { IContractJson } from "@types/gifflar-library/modules/models/toplevels/contract/types/IContractJson";
  import { IImport } from "@types/gifflar-library/modules/models/toplevels/import/types/IImport";
  import Web3 from "web3";
  import { Account } from "web3-core";
  import { Contract } from "web3-eth-contract";
  import { IContractDeployDTO } from "@types/gifflar-library/modules/managing/gifflarContract/types/IContractDeployDTO";
  export interface IGifflarContract extends IContract {
    setName(newName: string): void;
    getName(): string;
    setImport(identifierPath: string, alias?: string): IImport;
    write(contracts?: Array<IContractJson>): string;
    compile(callback: (errors: any) => void): any;
    deploy(
      inputs: IContractDeployDTO,
      accountPrivateKey?: string,
      web3?: IWeb3
    ): Promise<Contract>;
    written(): string | undefined;
    compiled(): any | undefined;
    setWeb3(web3: IWeb3): void;
    getWeb3(): Web3 | null | undefined;
    setDeployConfig(networkConfig: INetworkConfig): Web3 | undefined;
    addSigner(accountPrivateKey: string): Account;
    deployed(): Contract | undefined;
  }
}
declare module "@types/gifflar-library/modules/managing/gifflarContract/types/IGifflarContractModel" {
  import { IGifflarContract } from "@types/gifflar-library/modules/managing/gifflarContract/types/IGifflarContract";
  export interface IGifflarContractModel {
    execute(contractName: string): IGifflarContract;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/library/types/ILibraryItem" {
  import { IContractBodyItem } from "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBodyItem";
  export interface ILibraryItem extends IContractBodyItem {
    name: string;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/library/types/ILibraryJson" {
  import { ILibraryItem } from "@types/gifflar-library/modules/models/toplevels/library/types/ILibraryItem";
  export interface ILibraryJson {
    library: ILibraryItem;
    code: string;
    json: any;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/library/types/ILibrary" {
  import { IContractBody } from "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBody";
  import { ILibraryJson } from "@types/gifflar-library/modules/models/toplevels/library/types/ILibraryJson";
  export interface ILibrary extends ILibraryJson, IContractBody {
    toJson(): ILibraryJson;
    toString(): string;
  }
}
declare module "@types/gifflar-library/modules/managing/gifflarLibrary/types/IGifflarLibrary" {
  import { IImport } from "@types/gifflar-library/modules/models/toplevels/import/types/IImport";
  import { ILibrary } from "@types/gifflar-library/modules/models/toplevels/library/types/ILibrary";
  import { ILibraryJson } from "@types/gifflar-library/modules/models/toplevels/library/types/ILibraryJson";
  export interface IGifflarLibrary extends ILibrary {
    setName(newName: string): void;
    getName(): string;
    setImport(identifierPath: string, alias?: string): IImport;
    write(contracts?: Array<ILibraryJson>): string;
    compile(callback: (errors: any) => void): any;
    written(): string | undefined;
    compiled(): any | undefined;
  }
}
declare module "@types/gifflar-library/modules/managing/gifflarLibrary/types/IGifflarLibraryModel" {
  import { IGifflarLibrary } from "@types/gifflar-library/modules/managing/gifflarLibrary/types/IGifflarLibrary";
  export interface IGifflarLibraryModel {
    execute(libraryName: string): IGifflarLibrary;
  }
}
declare module "@types/gifflar-library/modules/managing/gifflarManager/types/ITopLevel" {
  import { IContractItem } from "@types/gifflar-library/modules/models/toplevels/contract/types/IContractItem";
  import { IInterfaceItem } from "@types/gifflar-library/modules/models/toplevels/interface/types/IInterfaceItem";
  import { ILibraryItem } from "@types/gifflar-library/modules/models/toplevels/library/types/ILibraryItem";
  export interface ITopLevel {
    contract?: IContractItem;
    library?: ILibraryItem;
    interface?: IInterfaceItem;
    json?: any;
    code?: string;
    getName(): string;
    compile(callback: (errors: any) => void): any;
    write(): string;
  }
}
declare module "@types/gifflar-library/modules/managing/gifflarManager/types/IManagerDeployDTO" {
  export interface IManagerDeployDTO {
    args: any[];
    from?: string;
    gas?: number;
    gasPrice?: number;
    nonce?: number;
  }
}
declare module "@types/gifflar-library/modules/managing/gifflarManager/types/IGifflarManager" {
  import { IWeb3 } from "@types/gifflar-library/modules/deployer/types/IWeb3";
  import { IGifflarContract } from "@types/gifflar-library/modules/managing/gifflarContract/types/IGifflarContract";
  import { IImport } from "@types/gifflar-library/modules/models/toplevels/import/types/IImport";
  import { Contract } from "web3-eth-contract";
  import { ITopLevel } from "@types/gifflar-library/modules/managing/gifflarManager/types/ITopLevel";
  import { IManagerDeployDTO } from "@types/gifflar-library/modules/managing/gifflarManager/types/IManagerDeployDTO";
  import Web3 from "web3";
  import { INetworkConfig } from "@types/gifflar-library/modules/deployer/types/INetworkConfig";
  import { Account } from "web3-core";
  export interface IGifflarManager {
    getCode(): string;
    getCompiledJson(): any;
    newImport(identifierPath: string, alias?: string): IImport;
    newContract(name: string): IGifflarContract;
    getContract(name: string): IGifflarContract;
    getImports(): Array<IImport>;
    getAllModels(): Array<ITopLevel>;
    writeAll(): string;
    write(topLevelModels: Array<ITopLevel>): string;
    written(): string | undefined;
    compileAll(callback: (errors: Array<any>) => void): any;
    compile(contractName: string, callback: (errors: Array<any>) => void): void;
    deploy(
      contractName: string,
      inputs: IManagerDeployDTO,
      accountPrivateKey?: string
    ): Promise<Contract>;
    setWeb3(newWeb3: IWeb3): IWeb3;
    getWeb3(): IWeb3 | undefined | null;
    addSigner(accountPrivateKey: string): Account;
    setDeployConfig(networkConfig: INetworkConfig): Web3 | undefined;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/content/types/ICreateContentDTO" {
  import { IVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IVariable";
  export interface ICreateContentDTO {
    stateVars: Array<IVariable>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/content/types/IContentModel" {
  import { IContent } from "@types/gifflar-library/modules/models/definitions/content/types/IContent";
  import { ICreateContentDTO } from "@types/gifflar-library/modules/models/definitions/content/types/ICreateContentDTO";
  export interface IContentModel {
    execute({ stateVars }: ICreateContentDTO): IContent;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/customError/types/ICreateCustomErrorDTO" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  export interface ICreateCustomErrorDTO {
    name: string;
    args?: Array<IInput>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/customError/types/ICustomErrorModel" {
  import { ICreateCustomErrorDTO } from "@types/gifflar-library/modules/models/definitions/customError/types/ICreateCustomErrorDTO";
  import { ICustomError } from "@types/gifflar-library/modules/models/definitions/customError/types/ICustomError";
  export interface ICustomErrorModel {
    execute({ name, args }: ICreateCustomErrorDTO): ICustomError;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/enum/types/ICreateEnumDTO" {
  export interface ICreateEnumDTO {
    identifier: string;
    identifiersOptions: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/enum/types/IEnumModel" {
  import { ICreateEnumDTO } from "@types/gifflar-library/modules/models/definitions/enum/types/ICreateEnumDTO";
  import { IEnum } from "@types/gifflar-library/modules/models/definitions/enum/types/IEnum";
  export interface IEnumModel {
    execute(data: ICreateEnumDTO): IEnum;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/event/types/ICreateEventDTO" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  export interface ICreateEventDTO {
    name: string;
    inputs: Array<IInput>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/event/types/IEventModel" {
  import { ICreateEventDTO } from "@types/gifflar-library/modules/models/definitions/event/types/ICreateEventDTO";
  import { IEvent } from "@types/gifflar-library/modules/models/definitions/event/types/IEvent";
  export default interface IEventModel {
    execute({ name, inputs }: ICreateEventDTO): IEvent;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/fallback/types/ICreateFallbackDTO" {
  import { IVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IVariable";
  export interface ICreateFallbackDTO {
    stateVars: Array<IVariable>;
    isPayable?: boolean;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/fallback/types/IFallbackModel" {
  import { ICreateFallbackDTO } from "@types/gifflar-library/modules/models/definitions/fallback/types/ICreateFallbackDTO";
  import { IFallback } from "@types/gifflar-library/modules/models/definitions/fallback/types/IFallback";
  export interface IFallbackModel {
    execute({ stateVars }: ICreateFallbackDTO): IFallback;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/function/types/ICreateFunctionDTO" {
  import { IVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IVariable";
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { IFunctionStateMutabilityType } from "@types/gifflar-library/modules/types/IFunctionStateMutabilityType";
  import { IOutput } from "@types/gifflar-library/modules/models/definitions/function/types/IOutput";
  export interface ICreateFunctionDTO {
    name: string;
    scope: string;
    isConstructor?: boolean;
    stateMutability?: IFunctionStateMutabilityType;
    inputs?: Array<IInput>;
    outputs?: Array<IOutput>;
    stateVars?: Array<IVariable>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/function/types/IFunctionModel" {
  import { ICreateFunctionDTO } from "@types/gifflar-library/modules/models/definitions/function/types/ICreateFunctionDTO";
  import { IFunction } from "@types/gifflar-library/modules/models/definitions/function/types/IFunction";
  export interface IFunctionModel {
    execute({
      name,
      scope,
      isConstructor,
      inputs,
      outputs,
      stateVars,
      stateMutability,
    }: ICreateFunctionDTO): IFunction;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/modifier/types/ICreateModifierDTO" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { IVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IVariable";
  export interface ICreateModifierDTO {
    title: string;
    args: Array<IInput>;
    stateVars?: Array<IVariable>;
    isVirtual?: boolean;
    isOverriding?: boolean;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/modifier/types/IModifierModel" {
  import { ICreateModifierDTO } from "@types/gifflar-library/modules/models/definitions/modifier/types/ICreateModifierDTO";
  import { IModifier } from "@types/gifflar-library/modules/models/definitions/modifier/types/IModifier";
  export interface IModifierModel {
    execute({ title, args, stateVars }: ICreateModifierDTO): IModifier;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/receive/types/ICreateReceiveDTO" {
  import { IVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IVariable";
  export interface ICreateReceiveDTO {
    stateVars: Array<IVariable>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/receive/types/IReceiveModel" {
  import { ICreateReceiveDTO } from "@types/gifflar-library/modules/models/definitions/receive/types/ICreateReceiveDTO";
  import { IReceive } from "@types/gifflar-library/modules/models/definitions/receive/types/IReceive";
  export interface IReceiveModel {
    execute(data: ICreateReceiveDTO): IReceive;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/stateMapping/types/ICreateStateMappingDTO" {
  import { IMappingKeyType } from "@types/gifflar-library/modules/types/IMappingKeyType";
  import { IMappingTypeName } from "@types/gifflar-library/modules/types/IMappingTypeName";
  import { IVisibility } from "@types/gifflar-library/modules/types/IVisibility";
  export interface ICreateStateMappingDTO {
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
    scope?: IVisibility;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/stateMapping/types/IStateMappingModel" {
  import { ICreateStateMappingDTO } from "@types/gifflar-library/modules/models/definitions/stateMapping/types/ICreateStateMappingDTO";
  import { IStateMapping } from "@types/gifflar-library/modules/models/definitions/stateMapping/types/IStateMapping";
  export interface IStateMappingModel {
    execute(data: ICreateStateMappingDTO): IStateMapping;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/stateVariable/types/ICreateStateVariableDTO" {
  import { INewContract } from "@types/gifflar-library/modules/models/statements/newcontract/types/INewContract";
  import { IVariableStateMutabilityType } from "@types/gifflar-library/modules/types/IVariableStateMutabilityType";
  import { IVisibility } from "@types/gifflar-library/modules/types/IVisibility";
  export interface ICreateStateVariableDTO {
    type: string;
    name: string;
    scope: IVisibility | undefined;
    stateMutability?: IVariableStateMutabilityType;
    value?: string | INewContract;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/stateVariable/types/IStateVariableModel" {
  import { ICreateStateVariableDTO } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/ICreateStateVariableDTO";
  import { IStateVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IStateVariable";
  export interface IStateVariableModel {
    execute({
      type,
      name,
      scope,
      value,
    }: ICreateStateVariableDTO): IStateVariable;
  }
}
declare module "@types/gifflar-library/modules/models/statements/mapping/types/IMapping" {
  import { IMappingKeyType } from "@types/gifflar-library/modules/types/IMappingKeyType";
  import { IMappingTypeName } from "@types/gifflar-library/modules/types/IMappingTypeName";
  export interface IMapping {
    statement: "mapping";
    type: IMappingKeyType;
    typeName: IMappingTypeName;
    name: string;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/struct/types/ICreateStructDTO" {
  import { ICreateMappingDTO } from "@types/gifflar-library/modules/models/statements/mapping/types/ICreateMappingDTO";
  import { ICreateVariableDTO } from "@types/gifflar-library/modules/models/statements/variable/types/ICreateVariableDTO";
  export interface ICreateStructDTO {
    identifier: string;
    variables: Array<ICreateVariableDTO>;
    mappings: Array<ICreateMappingDTO>;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/struct/types/IStructModel" {
  import { ICreateStructDTO } from "@types/gifflar-library/modules/models/definitions/struct/types/ICreateStructDTO";
  import { IStruct } from "@types/gifflar-library/modules/models/definitions/struct/types/IStruct";
  export interface IStructModel {
    execute(data: ICreateStructDTO): IStruct;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/type/types/ICreateTypeDTO" {
  import { IElementaryTypeName } from "@types/gifflar-library/modules/types/IElementaryTypeName";
  export interface ICreateType {
    identifier: string;
    type: IElementaryTypeName;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/type/types/IType" {
  import { IElementaryTypeName } from "@types/gifflar-library/modules/types/IElementaryTypeName";
  export interface IType {
    identifier: string;
    type: IElementaryTypeName;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/type/types/ITypeModel" {
  import { ICreateType } from "@types/gifflar-library/modules/models/definitions/type/types/ICreateTypeDTO";
  import { IType } from "@types/gifflar-library/modules/models/definitions/type/types/IType";
  export interface ITypeModel {
    execute(data: ICreateType): IType;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/using/types/IUsingType" {
  import { IArrayType } from "@types/gifflar-library/modules/types/IArrayType";
  import { IElementaryTypeName } from "@types/gifflar-library/modules/types/IElementaryTypeName";
  export interface IUsingType {
    regularType?: IElementaryTypeName;
    array?: IArrayType;
    customType?: string;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/using/types/ICreateUsingDTO" {
  export interface ICreateUsingDTO {
    identifier: string;
    type: string;
  }
}
declare module "@types/gifflar-library/modules/models/definitions/using/types/IUsingModel" {
  import { ICreateUsingDTO } from "@types/gifflar-library/modules/models/definitions/using/types/ICreateUsingDTO";
  import { IUsing } from "@types/gifflar-library/modules/models/definitions/using/types/IUsing";
  export interface IUsingModel {
    execute(data: ICreateUsingDTO): IUsing;
  }
}
declare module "@types/gifflar-library/modules/models/statements/assert/types/IAssert" {
  export interface IAssert {
    statement: "assert";
    condition: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/assert/types/ICreateAssertDTO" {
  export interface ICreateAssertDTO {
    condition: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/assert/types/IAssertModel" {
  import { IAssert } from "@types/gifflar-library/modules/models/statements/assert/types/IAssert";
  import { ICreateAssertDTO } from "@types/gifflar-library/modules/models/statements/assert/types/ICreateAssertDTO";
  export interface IAssertModel {
    execute({ condition }: ICreateAssertDTO): IAssert;
  }
}
declare module "@types/gifflar-library/modules/models/statements/assignment/types/IAssignmentDTO" {
  import { IExpression } from "@types/gifflar-library/modules/models/statements/expression/types/IExpression";
  export interface IAssignmentDTO {
    variable: string;
    value: IExpression;
  }
}
declare module "@types/gifflar-library/modules/models/statements/assignment/types/IAssignmentModel" {
  import { IAssignment } from "@types/gifflar-library/modules/models/statements/assignment/types/IAssignment";
  import { IAssignmentDTO } from "@types/gifflar-library/modules/models/statements/assignment/types/IAssignmentDTO";
  export interface IAssignmentModel {
    execute({ variable, value }: IAssignmentDTO): IAssignment;
  }
}
declare module "@types/gifflar-library/modules/models/statements/break/types/IBreak" {
  export interface IBreak {
    statement: "break";
  }
}
declare module "@types/gifflar-library/modules/models/statements/break/types/IBreakModel" {
  import { IBreak } from "@types/gifflar-library/modules/models/statements/break/types/IBreak";
  export interface IBreakModel {
    execute(): IBreak;
  }
}
declare module "@types/gifflar-library/modules/models/statements/catch/types/ICatch" {
  import { IStackItem } from "@types/gifflar-library/modules/models/definitions/content/types/IStackItem";
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  export interface ICatch extends IStackItem {
    statement: "catch";
    identifier?: string;
    parameters: Array<IInput>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/catch/types/ICreateCatchDTO" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  export interface ICreateCatchDTO {
    identifier?: string;
    parameters: Array<IInput>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/catch/types/ICatchModel" {
  import { ICatch } from "@types/gifflar-library/modules/models/statements/catch/types/ICatch";
  import { ICreateCatchDTO } from "@types/gifflar-library/modules/models/statements/catch/types/ICreateCatchDTO";
  export interface ICatchModel {
    execute(data: ICreateCatchDTO): ICatch;
  }
}
declare module "@types/gifflar-library/modules/models/statements/continue/types/IContinue" {
  export interface IContinue {
    statement: "continue";
  }
}
declare module "@types/gifflar-library/modules/models/statements/continue/types/IContinueModel" {
  import { IContinue } from "@types/gifflar-library/modules/models/statements/continue/types/IContinue";
  export interface IContinueModel {
    execute(): IContinue;
  }
}
declare module "@types/gifflar-library/modules/models/statements/dowhile/types/ICreateDoWhileDTO" {
  export interface ICreateDoWhileDTO {
    condition: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/dowhile/types/IDoWhile" {
  import { IStackItem } from "@types/gifflar-library/modules/models/definitions/content/types/IStackItem";
  export interface IDoWhile extends IStackItem {
    statement: "do_while";
    condition: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/dowhile/types/IDoWhileModel" {
  import { ICreateDoWhileDTO } from "@types/gifflar-library/modules/models/statements/dowhile/types/ICreateDoWhileDTO";
  import { IDoWhile } from "@types/gifflar-library/modules/models/statements/dowhile/types/IDoWhile";
  export interface IDoWhileModel {
    execute({ condition }: ICreateDoWhileDTO): IDoWhile;
  }
}
declare module "@types/gifflar-library/modules/models/statements/eventCall/types/ICreateEventCallDTO" {
  export interface ICreateEventCallDTO {
    name: string;
    variables: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/eventCall/types/IEventCallModel" {
  import { ICreateEventCallDTO } from "@types/gifflar-library/modules/models/statements/eventCall/types/ICreateEventCallDTO";
  import { IEventCall } from "@types/gifflar-library/modules/models/statements/eventCall/types/IEventCall";
  export interface IEventCallModel {
    execute({ name, variables }: ICreateEventCallDTO): IEventCall;
  }
}
declare module "@types/gifflar-library/modules/models/statements/expression/types/ICreateExpressionDTO" {
  export interface ICreateExpressionDTO {
    value: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/expression/types/IExpressionModel" {
  import { ICreateExpressionDTO } from "@types/gifflar-library/modules/models/statements/expression/types/ICreateExpressionDTO";
  import { IExpression } from "@types/gifflar-library/modules/models/statements/expression/types/IExpression";
  export interface IExpressionModel {
    execute({ value }: ICreateExpressionDTO): IExpression;
  }
}
declare module "@types/gifflar-library/modules/models/statements/for/types/ICreateForDTO" {
  import { IExpression } from "@types/gifflar-library/modules/models/statements/expression/types/IExpression";
  import { ILocalVariable } from "@types/gifflar-library/modules/models/statements/variable/types/ILocalVariable";
  export interface ICreateForDTO {
    variable?: ILocalVariable;
    condition?: string;
    expression?: IExpression;
  }
}
declare module "@types/gifflar-library/modules/models/statements/for/types/IFor" {
  import { IStackItem } from "@types/gifflar-library/modules/models/definitions/content/types/IStackItem";
  import { IExpression } from "@types/gifflar-library/modules/models/statements/expression/types/IExpression";
  import { ILocalVariable } from "@types/gifflar-library/modules/models/statements/variable/types/ILocalVariable";
  export interface IFor extends IStackItem {
    statement: "for";
    variable?: ILocalVariable;
    condition?: string;
    expression?: IExpression;
  }
}
declare module "@types/gifflar-library/modules/models/statements/for/types/IForModel" {
  import { ICreateForDTO } from "@types/gifflar-library/modules/models/statements/for/types/ICreateForDTO";
  import { IFor } from "@types/gifflar-library/modules/models/statements/for/types/IFor";
  export interface IForModel {
    execute({ variable, condition, expression }: ICreateForDTO): IFor;
  }
}
declare module "@types/gifflar-library/modules/models/statements/if/types/ICreateIfDTO" {
  export interface ICreateIfDTO {
    condition: string;
    onElse?: boolean;
  }
}
declare module "@types/gifflar-library/modules/models/statements/if/types/IIfModel" {
  import { ICreateIfDTO } from "@types/gifflar-library/modules/models/statements/if/types/ICreateIfDTO";
  import { IIf } from "@types/gifflar-library/modules/models/statements/if/types/IIf";
  export interface IIfModel {
    execute({ condition, onElse }: ICreateIfDTO): IIf;
  }
}
declare module "@types/gifflar-library/modules/models/statements/mapping/types/IMappingModel" {
  import { ICreateMappingDTO } from "@types/gifflar-library/modules/models/statements/mapping/types/ICreateMappingDTO";
  import { IMapping } from "@types/gifflar-library/modules/models/statements/mapping/types/IMapping";
  export interface IMappingModel {
    execute(data: ICreateMappingDTO): IMapping;
  }
}
declare module "@types/gifflar-library/modules/models/statements/mapping/types/INestedMapping" {
  import { IMappingKeyType } from "@types/gifflar-library/modules/types/IMappingKeyType";
  import { IMappingTypeName } from "@types/gifflar-library/modules/types/IMappingTypeName";
  export interface INestedMapping {
    statement: "nested_mapping";
    type: IMappingKeyType;
    typeName: IMappingTypeName;
  }
}
declare module "@types/gifflar-library/modules/models/statements/methodcall/types/IMethodCallModel" {
  import { ICreateMethodCallDTO } from "@types/gifflar-library/modules/models/statements/methodcall/types/ICreateMethodCallDTO";
  import { IMethodCall } from "@types/gifflar-library/modules/models/statements/methodcall/types/IMethodCall";
  export interface IMethodCallModel {
    execute({ variable, method, value }: ICreateMethodCallDTO): IMethodCall;
  }
}
declare module "@types/gifflar-library/modules/models/statements/newcontract/types/INewContractModel" {
  import { ICreateNewContractDTO } from "@types/gifflar-library/modules/models/statements/newcontract/types/ICreateNewContract";
  import { INewContract } from "@types/gifflar-library/modules/models/statements/newcontract/types/INewContract";
  export interface INewContractModel {
    execute({ contractName, args }: ICreateNewContractDTO): INewContract;
  }
}
declare module "@types/gifflar-library/modules/models/statements/require/types/ICreateRequireDTO" {
  export interface ICreateRequireDTO {
    condition: string;
    errorMessage?: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/require/types/IRequire" {
  export interface IRequire {
    statement: "require";
    condition: string;
    errorMessage?: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/require/types/IRequireModel" {
  import { ICreateRequireDTO } from "@types/gifflar-library/modules/models/statements/require/types/ICreateRequireDTO";
  import { IRequire } from "@types/gifflar-library/modules/models/statements/require/types/IRequire";
  export interface IRequireModel {
    execute({ condition, errorMessage }: ICreateRequireDTO): IRequire;
  }
}
declare module "@types/gifflar-library/modules/models/statements/return/types/ICreateReturnDTO" {
  export interface ICreateReturnDTO {
    expressions: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/return/types/IReturn" {
  export interface IReturn {
    statement: "return";
    expressions: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/return/types/IReturnModel" {
  import { ICreateReturnDTO } from "@types/gifflar-library/modules/models/statements/return/types/ICreateReturnDTO";
  import { IReturn } from "@types/gifflar-library/modules/models/statements/return/types/IReturn";
  export interface IReturnModel {
    execute(data: ICreateReturnDTO): IReturn;
  }
}
declare module "@types/gifflar-library/modules/models/statements/revert/types/ICreateRevertDTO" {
  import { ICustomErrorcall } from "@types/gifflar-library/modules/models/statements/revert/types/ICustomErrorCall";
  export interface ICreateRevertDTO {
    message?: string;
    customErrorCall?: ICustomErrorcall;
  }
}
declare module "@types/gifflar-library/modules/models/statements/revert/types/IRevert" {
  export interface IRevert {
    statement: "revert";
    message?: string;
    customErrorCall?: {
      customErrorName: string;
      args: Array<string>;
    };
  }
}
declare module "@types/gifflar-library/modules/models/statements/revert/types/IRevertModel" {
  import { ICreateRevertDTO } from "@types/gifflar-library/modules/models/statements/revert/types/ICreateRevertDTO";
  import { IRevert } from "@types/gifflar-library/modules/models/statements/revert/types/IRevert";
  export interface IRevertModel {
    execute(data?: ICreateRevertDTO): IRevert;
  }
}
declare module "@types/gifflar-library/modules/models/statements/try/types/ICreateTryDTO" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { ITryExpression } from "@types/gifflar-library/modules/models/statements/try/types/ITryExpression";
  export interface ICreateTryDTO {
    expression: ITryExpression;
    parameters: Array<IInput>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/try/types/ITry" {
  import { IStackItem } from "@types/gifflar-library/modules/models/definitions/content/types/IStackItem";
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  import { ITryExpression } from "@types/gifflar-library/modules/models/statements/try/types/ITryExpression";
  export interface ITry extends IStackItem {
    statement: "try";
    /** Try can only be used with external function calls and contract creation calls */
    expression: ITryExpression;
    parameters: Array<IInput>;
  }
}
declare module "@types/gifflar-library/modules/models/statements/try/types/ITryModel" {
  import { ICreateTryDTO } from "@types/gifflar-library/modules/models/statements/try/types/ICreateTryDTO";
  import { ITry } from "@types/gifflar-library/modules/models/statements/try/types/ITry";
  export interface ITryModel {
    execute(data: ICreateTryDTO): ITry;
  }
}
declare module "@types/gifflar-library/modules/models/statements/variable/types/IVariableModel" {
  import { ICreateVariableDTO } from "@types/gifflar-library/modules/models/statements/variable/types/ICreateVariableDTO";
  import { ILocalVariable } from "@types/gifflar-library/modules/models/statements/variable/types/ILocalVariable";
  export interface IVariableModel {
    execute({ type, name, value }: ICreateVariableDTO): ILocalVariable;
  }
}
declare module "@types/gifflar-library/modules/models/statements/while/types/ICreateWhileDTO" {
  export interface ICreateWhileDTO {
    condition: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/while/types/IWhile" {
  import { IStackItem } from "@types/gifflar-library/modules/models/definitions/content/types/IStackItem";
  export interface IWhile extends IStackItem {
    statement: "while";
    condition: string;
  }
}
declare module "@types/gifflar-library/modules/models/statements/while/types/IWhileModel" {
  import { ICreateWhileDTO } from "@types/gifflar-library/modules/models/statements/while/types/ICreateWhileDTO";
  import { IWhile } from "@types/gifflar-library/modules/models/statements/while/types/IWhile";
  export interface IWhileModel {
    execute({ condition }: ICreateWhileDTO): IWhile;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/contract/types/IContractModel" {
  import { IContract } from "@types/gifflar-library/modules/models/toplevels/contract/types/IContract";
  export interface IContractModel {
    execute(contractName: string): IContract;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/contract/types/ICreateContractDTO" {
  export interface ICreateContractDTO {
    contractName: string;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBodyModel" {
  import { IContractBody } from "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBody";
  export interface IContractBodyModel {
    execute(): IContractBody;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/import/types/ICreateImportDTO" {
  export interface ICreateImportDTO {
    identifierPath: string;
    alias?: string;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/import/types/IImportModel" {
  import { ICreateImportDTO } from "@types/gifflar-library/modules/models/toplevels/import/types/ICreateImportDTO";
  import { IImport } from "@types/gifflar-library/modules/models/toplevels/import/types/IImport";
  export interface IImportModel {
    execute(data: ICreateImportDTO): IImport;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/inherits/types/ICreateInheritsDTO" {
  export interface ICreateInheritsDTO {
    identifier: string;
    args?: Array<string>;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/inherits/types/IInheritsModel" {
  import { ICreateInheritsDTO } from "@types/gifflar-library/modules/models/toplevels/inherits/types/ICreateInheritsDTO";
  import { IInherits } from "@types/gifflar-library/modules/models/toplevels/inherits/types/IInherits";
  export interface IInheritsModel {
    execute(data: ICreateInheritsDTO): IInherits;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/interface/types/ICreateInterfaceDTO" {
  export interface ICreateInterfaceDTO {
    interfaceName: string;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/interface/types/IInterfaceModel" {
  import { IInterface } from "@types/gifflar-library/modules/models/toplevels/interface/types/IInterface";
  export interface IInterfaceModel {
    execute(interfaceName: string): IInterface;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/library/types/ICreateLibraryDTO" {
  export interface ICreateLibraryDTO {
    libraryName: string;
  }
}
declare module "@types/gifflar-library/modules/models/toplevels/library/types/ILibraryModel" {
  import { ILibrary } from "@types/gifflar-library/modules/models/toplevels/library/types/ILibrary";
  export interface ILibraryModel {
    execute(libraryName: string): ILibrary;
  }
}
declare module "@types/gifflar-library/modules/types/ElementaryTypes" {
  export type ADDRESS_TYPE = "address";
  export type ADDRESS_PAYABLE_TYPE = "address payable";
  export type BOOL_TYPE = "bool";
  export type STRING_TYPE = "string";
  export type BYTES_TYPE = "bytes";
  export type FIXED_TYPE = "fixed";
  export type UNFIXED_TYPE = "unfixed";
  export type INT = "int";
  export type INT8 = "int8";
  export type INT16 = "int16";
  export type INT24 = "int24";
  export type INT32 = "int32";
  export type INT40 = "int40";
  export type INT48 = "int48";
  export type INT56 = "int56";
  export type INT64 = "int64";
  export type INT72 = "int72";
  export type INT80 = "int80";
  export type INT88 = "int88";
  export type INT96 = "int96";
  export type INT104 = "int104";
  export type INT112 = "int112";
  export type INT120 = "int120";
  export type INT128 = "int128";
  export type INT136 = "int136";
  export type INT144 = "int144";
  export type INT152 = "int152";
  export type INT160 = "int160";
  export type INT168 = "int168";
  export type INT176 = "int176";
  export type INT184 = "int184";
  export type INT192 = "int192";
  export type INT200 = "int200";
  export type INT208 = "int208";
  export type INT216 = "int216";
  export type INT224 = "int224";
  export type INT232 = "int232";
  export type INT240 = "int240";
  export type INT248 = "int248";
  export type INT256 = "int256";
  export type UINT = "uint";
  export type UINT8 = "uint8";
  export type UINT16 = "uint16";
  export type UINT24 = "uint24";
  export type UINT32 = "uint32";
  export type UINT40 = "uint40";
  export type UINT48 = "uint48";
  export type UINT56 = "uint56";
  export type UINT64 = "uint64";
  export type UINT72 = "uint72";
  export type UINT80 = "uint80";
  export type UINT88 = "uint88";
  export type UINT96 = "uint96";
  export type UINT104 = "uint104";
  export type UINT112 = "uint112";
  export type UINT120 = "uint120";
  export type UINT128 = "uint128";
  export type UINT136 = "uint136";
  export type UINT144 = "uint144";
  export type UINT152 = "uint152";
  export type UINT160 = "uint160";
  export type UINT168 = "uint168";
  export type UINT176 = "uint176";
  export type UINT184 = "uint184";
  export type UINT192 = "uint192";
  export type UINT200 = "uint200";
  export type UINT208 = "uint208";
  export type UINT216 = "uint216";
  export type UINT224 = "uint224";
  export type UINT232 = "uint232";
  export type UINT240 = "uint240";
  export type UINT248 = "uint248";
  export type UINT256 = "uint256";
  export type BYTES1 = "bytes1";
  export type BYTES2 = "bytes2";
  export type BYTES3 = "bytes3";
  export type BYTES4 = "bytes4";
  export type BYTES5 = "bytes5";
  export type BYTES6 = "bytes6";
  export type BYTES7 = "bytes7";
  export type BYTES8 = "bytes8";
  export type BYTES9 = "bytes9";
  export type BYTES10 = "bytes10";
  export type BYTES11 = "bytes11";
  export type BYTES12 = "bytes12";
  export type BYTES13 = "bytes13";
  export type BYTES14 = "bytes14";
  export type BYTES15 = "bytes15";
  export type BYTES16 = "bytes16";
  export type BYTES17 = "bytes17";
  export type BYTES18 = "bytes18";
  export type BYTES19 = "bytes19";
  export type BYTES20 = "bytes20";
  export type BYTES21 = "bytes21";
  export type BYTES22 = "bytes22";
  export type BYTES23 = "bytes23";
  export type BYTES24 = "bytes24";
  export type BYTES25 = "bytes25";
  export type BYTES26 = "bytes26";
  export type BYTES27 = "bytes27";
  export type BYTES28 = "bytes28";
  export type BYTES29 = "bytes29";
  export type BYTES30 = "bytes30";
  export type BYTES31 = "bytes31";
  export type BYTES32 = "bytes32";
}
declare module "@types/gifflar-library/modules/types/IBooleanLiteral" {
  export type IBooleanLiteral = "true" | "false";
}
declare module "@types/gifflar-library/modules/types/INumberUnit" {
  export type INumberUnit =
    | "wei"
    | "gwei"
    | "ether"
    | "seconds"
    | "minutes"
    | "hours"
    | "days"
    | "weeks"
    | "years";
}
declare module "@types/gifflar-library/modules/writers/definitions/contentWriter/types/IContentWriter" {
  import { IContents } from "@types/gifflar-library/modules/models/definitions/content/types/IContents";
  export interface IContentWriter {
    write(content: Array<IContents>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/customErrorWriter/types/ICustomErrorWriter" {
  import { ICustomError } from "@types/gifflar-library/modules/models/definitions/customError/types/ICustomError";
  export interface ICustomErrorWriter {
    write(customError: Array<ICustomError>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/enumWriter/types/IEnumWriter" {
  import { IEnum } from "@types/gifflar-library/modules/models/definitions/enum/types/IEnum";
  export interface IEnumWriter {
    write(_enums: Array<IEnum>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/eventWriter/types/IEventWriter" {
  import { IEvent } from "@types/gifflar-library/modules/models/definitions/event/types/IEvent";
  export interface IEventWriter {
    write(events: Array<IEvent>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/fallbackWriter/types/IFallbackWriter" {
  import { IFallback } from "@types/gifflar-library/modules/models/definitions/fallback/types/IFallback";
  export interface IFallbackWriter {
    write(fallback: IFallback): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/functionWriter/types/IFunctionWriterOptions" {
  export interface IFunctionWriterOptions {
    onlyPrototype?: boolean;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/functionWriter/types/IFunctionWriter" {
  import { IFunctionJson } from "@types/gifflar-library/modules/models/definitions/function/types/IFunctionJson";
  import { IFunctionWriterOptions } from "@types/gifflar-library/modules/writers/definitions/functionWriter/types/IFunctionWriterOptions";
  export interface IFunctionWriter {
    write(
      functions: Array<IFunctionJson>,
      options?: IFunctionWriterOptions
    ): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/modifierWriter/types/IModifierWriter" {
  import { IModifier } from "@types/gifflar-library/modules/models/definitions/modifier/types/IModifier";
  export interface IModifierWriter {
    write(modifiers: Array<IModifier>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/receiveWriter/types/IReceiveWriter" {
  import { IReceive } from "@types/gifflar-library/modules/models/definitions/receive/types/IReceive";
  export interface IReceiveWriter {
    write(receive: IReceive): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/stateMappingWriter/types/IStateMappingWriter" {
  import { IStateMapping } from "@types/gifflar-library/modules/models/definitions/stateMapping/types/IStateMapping";
  export interface IStateMappingWriter {
    write(mapping: Array<IStateMapping>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/stateVariableWriter/types/IStateVariableWriter" {
  import { IStateVariable } from "@types/gifflar-library/modules/models/definitions/stateVariable/types/IStateVariable";
  export interface IStateVariableWriter {
    write(variables: Array<IStateVariable>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/structWriter/types/IStructWriter" {
  import { IStruct } from "@types/gifflar-library/modules/models/definitions/struct/types/IStruct";
  export interface IStructWriter {
    write(struct: IStruct): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/typeWriter/types/ITypeWriter" {
  import { IType } from "@types/gifflar-library/modules/models/definitions/type/types/IType";
  export interface ITypeWriter {
    write(types: Array<IType>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/definitions/usingWriter/types/IUsingWriter" {
  import { IUsing } from "@types/gifflar-library/modules/models/definitions/using/types/IUsing";
  export interface IUsingWriter {
    write(usings: Array<IUsing>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/assertWriter/types/IAssertWriter" {
  import { IAssert } from "@types/gifflar-library/modules/models/statements/assert/types/IAssert";
  export interface IAssertWriter {
    write(assert: IAssert): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/assignmentWriter/types/IAssignmentWriter" {
  import { IAssignment } from "@types/gifflar-library/modules/models/statements/assignment/types/IAssignment";
  export interface IAssignmentWriter {
    write(json: IAssignment): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/breakWriter/types/IBreakWriter" {
  import { IBreak } from "@types/gifflar-library/modules/models/statements/break/types/IBreak";
  export interface IBreakWriter {
    write(_break: IBreak): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/catchWriter/types/ICatchWriter" {
  import { ICatch } from "@types/gifflar-library/modules/models/statements/catch/types/ICatch";
  import { IContentWriter } from "@types/gifflar-library/modules/writers/definitions/contentWriter/types/IContentWriter";
  export interface ICatchWriter {
    _init(contentWriter: IContentWriter): void;
    write(_catch: ICatch): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/continueWriter/types/IContinueWriter" {
  import { IContinue } from "@types/gifflar-library/modules/models/statements/continue/types/IContinue";
  export interface IContinueWriter {
    write(_continue: IContinue): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/doWhileWriter/types/IDoWhileWriter" {
  import { IDoWhile } from "@types/gifflar-library/modules/models/statements/dowhile/types/IDoWhile";
  import { IContentWriter } from "@types/gifflar-library/modules/writers/definitions/contentWriter/types/IContentWriter";
  export interface IDoWhileWriter {
    _init(contentWriter: IContentWriter): void;
    write(_doWhile: IDoWhile): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/eventCallWriter/types/IEventCallWriter" {
  import { IEventCall } from "@types/gifflar-library/modules/models/statements/eventCall/types/IEventCall";
  export interface IEventCallWriter {
    write(event: IEventCall): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/expressionWriter/types/IExpressionWriter" {
  import { IExpression } from "@types/gifflar-library/modules/models/statements/expression/types/IExpression";
  export interface IExpressionWriter {
    write(json_expression: IExpression): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/forWriter/types/IForWriter" {
  import { IFor } from "@types/gifflar-library/modules/models/statements/for/types/IFor";
  import { IContentWriter } from "@types/gifflar-library/modules/writers/definitions/contentWriter/types/IContentWriter";
  export interface IForWriter {
    _init(contentWriter: IContentWriter): void;
    write: (json: IFor) => string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/ifWriter/types/IIfWriter" {
  import { IIf } from "@types/gifflar-library/modules/models/statements/if/types/IIf";
  import { IContentWriter } from "@types/gifflar-library/modules/writers/definitions/contentWriter/types/IContentWriter";
  export interface IIfWriter {
    _init(contentWriter: IContentWriter): void;
    write(json: IIf): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/inputWriter/types/IInputWriter" {
  import { IInput } from "@types/gifflar-library/modules/models/definitions/function/types/IInput";
  export interface IInputWriter {
    write(inputs: Array<IInput>, typeon?: boolean): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/mappingWriter/types/IMappingWriter" {
  import { IMapping } from "@types/gifflar-library/modules/models/statements/mapping/types/IMapping";
  export interface IMappingWriter {
    write(mapping: IMapping): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/methodCallWriter/types/IMethodCallWriter" {
  import { IMethodCall } from "@types/gifflar-library/modules/models/statements/methodcall/types/IMethodCall";
  export interface IMethodCallWriter {
    write(json: IMethodCall): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/newContractWriter/types/INewContractWriter" {
  import { INewContract } from "@types/gifflar-library/modules/models/statements/newcontract/types/INewContract";
  export interface INewContractWriter {
    write(json: INewContract): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/outputWriter/types/IOutputWriter" {
  import { IOutput } from "@types/gifflar-library/modules/models/definitions/function/types/IOutput";
  export interface IOutputWriter {
    write(outputs: Array<IOutput>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/outputWriter/types/IOutputWriterCallbackObject" {
  export interface IOutputWriterCallbackObject {
    text_returns: string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/requireWriter/types/IRequireWriter" {
  import { IRequire } from "@types/gifflar-library/modules/models/statements/require/types/IRequire";
  export interface IRequireWriter {
    write(require: IRequire): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/returnWriter/types/IReturnWriter" {
  import { IReturn } from "@types/gifflar-library/modules/models/statements/return/types/IReturn";
  export interface IReturnWriter {
    write(_return: IReturn): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/revertWriter/types/IRevertWriter" {
  import { IRevert } from "@types/gifflar-library/modules/models/statements/revert/types/IRevert";
  export interface IRevertWriter {
    write(revert: IRevert): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/tryWriter/types/ITryWriter" {
  import { ITry } from "@types/gifflar-library/modules/models/statements/try/types/ITry";
  import { IContentWriter } from "@types/gifflar-library/modules/writers/definitions/contentWriter/types/IContentWriter";
  export interface ITryWriter {
    _init(contentWriter: IContentWriter): void;
    write(_try: ITry): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/variableWriter/types/IVariableStatements" {
  import { INewContract } from "@types/gifflar-library/modules/models/statements/newcontract/types/INewContract";
  export interface IVariableStatements {
    newcontract: (json: INewContract) => string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/variableWriter/types/IVariableWriter" {
  import { ILocalVariable } from "@types/gifflar-library/modules/models/statements/variable/types/ILocalVariable";
  export interface IVariableWriter {
    write(variables: ILocalVariable): string;
  }
}
declare module "@types/gifflar-library/modules/writers/statements/whileWriter/types/IWhileWriter" {
  import { IWhile } from "@types/gifflar-library/modules/models/statements/while/types/IWhile";
  import { IContentWriter } from "@types/gifflar-library/modules/writers/definitions/contentWriter/types/IContentWriter";
  export interface IWhileWriter {
    _init(contentWriter: IContentWriter): void;
    write(_while: IWhile): string;
  }
}
declare module "@types/gifflar-library/modules/writers/toplevels/contractBodyWriter/types/IContractBodyWriter" {
  import { IContractBodyItem } from "@types/gifflar-library/modules/models/toplevels/contractBody/types/IContractBodyItem";
  export interface IContractBodyWriter {
    write(bodyItems: IContractBodyItem): string;
  }
}
declare module "@types/gifflar-library/modules/writers/toplevels/contractWriter/types/IContractWriter" {
  import { IContractJson } from "@types/gifflar-library/modules/models/toplevels/contract/types/IContractJson";
  export interface IContractWriter {
    write(
      contracts: Array<IContractJson>,
      callback?: (versionPlusContractText: string, index: number) => void
    ): string;
  }
}
declare module "@types/gifflar-library/modules/writers/toplevels/importWriter/types/IImportWriter" {
  import { IImport } from "@types/gifflar-library/modules/models/toplevels/import/types/IImport";
  export interface IImportWriter {
    write(_import: Array<IImport>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/toplevels/inheritsWriter/types/IInheritsWriter" {
  import { IInherits } from "@types/gifflar-library/modules/models/toplevels/inherits/types/IInherits";
  export interface IInheritsWriter {
    write(inheritances: Array<IInherits>): string;
  }
}
declare module "@types/gifflar-library/modules/writers/toplevels/interfaceWriter/types/IInterfaceWriter" {
  import { IInterfaceJson } from "@types/gifflar-library/modules/models/toplevels/interface/types/IInterfaceJson";
  export interface IInterfaceWriter {
    write(
      interfaces: Array<IInterfaceJson>,
      /** To get every interface text individually. */
      callback?: (individualInterfaceText: string, index: number) => void
    ): string;
  }
}
declare module "@types/gifflar-library/modules/writers/toplevels/libraryWriter/types/ILibraryWriter" {
  import { ILibraryJson } from "@types/gifflar-library/modules/models/toplevels/library/types/ILibraryJson";
  export interface ILibraryWriter {
    write(
      libraries: Array<ILibraryJson>,
      callback?: (individualLibraryText: string, index: number) => void
    ): string;
  }
}
