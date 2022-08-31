import { IContract } from "../types/IContract";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
import { IContractModel } from "../types/IContractModel";
import { IContractBodyModel } from "@models/toplevels/contractBody/types/IContractBodyModel";
import { IInheritsModel } from "@models/toplevels/inherits/types/IInheritsModel";
import { IFallbackModel } from "@models/definitions/fallback/types/IFallbackModel";
import { IReceiveModel } from "@models/definitions/receive/types/IReceiveModel";
declare class ContractModel implements IContractModel {
    private functionModel;
    private inheritsModel;
    private contractBodyModel;
    private fallbackModel;
    private receiveModel;
    constructor(functionModel: IFunctionModel, inheritsModel: IInheritsModel, contractBodyModel: IContractBodyModel, fallbackModel: IFallbackModel, receiveModel: IReceiveModel);
    execute(contractName: string): IContract;
}
export default ContractModel;
