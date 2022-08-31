import { ICustomErrorModel } from "@models/definitions/customError/types/ICustomErrorModel";
import { IEnumModel } from "@models/definitions/enum/types/IEnumModel";
import IEventModel from "@models/definitions/event/types/IEventModel";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
import { IModifierModel } from "@models/definitions/modifier/types/IModifierModel";
import { IStateMappingModel } from "@models/definitions/stateMapping/types/IStateMappingModel";
import { IStateVariableModel } from "@models/definitions/stateVariable/types/IStateVariableModel";
import { IStructModel } from "@models/definitions/struct/types/IStructModel";
import { IUsingModel } from "@models/definitions/using/types/IUsingModel";
import { IContractBody } from "../types/IContractBody";
import { IContractBodyModel } from "../types/IContractBodyModel";
declare class ContractBodyModel implements IContractBodyModel {
    private stateVariableModel;
    private functionModel;
    private eventModel;
    private usingModel;
    private modifierModel;
    private customErrorModel;
    private stateMappingModel;
    private enumModel;
    private structModel;
    constructor(stateVariableModel: IStateVariableModel, functionModel: IFunctionModel, eventModel: IEventModel, usingModel: IUsingModel, modifierModel: IModifierModel, customErrorModel: ICustomErrorModel, stateMappingModel: IStateMappingModel, enumModel: IEnumModel, structModel: IStructModel);
    execute(): IContractBody;
}
export default ContractBodyModel;
