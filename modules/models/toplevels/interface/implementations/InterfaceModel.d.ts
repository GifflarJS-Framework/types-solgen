import { IContractBodyModel } from "@models/toplevels/contractBody/types/IContractBodyModel";
import { IFunctionModel } from "@models/definitions/function/types/IFunctionModel";
import { IInheritsModel } from "@models/toplevels/inherits/types/IInheritsModel";
import { IInterface } from "../types/IInterface";
import { IInterfaceModel } from "../types/IInterfaceModel";
declare class InterfaceModel implements IInterfaceModel {
    private contractBodyModel;
    private inheritsModel;
    private functionModel;
    constructor(contractBodyModel: IContractBodyModel, inheritsModel: IInheritsModel, functionModel: IFunctionModel);
    execute(interfaceName: string): IInterface;
}
export default InterfaceModel;
