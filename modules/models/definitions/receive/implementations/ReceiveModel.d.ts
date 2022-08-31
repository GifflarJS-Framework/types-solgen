import { IContentModel } from "@models/definitions/content/types/IContentModel";
import { ICreateReceiveDTO } from "../types/ICreateReceiveDTO";
import { IReceive } from "../types/IReceive";
import { IReceiveModel } from "../types/IReceiveModel";
declare class ReceiveModel implements IReceiveModel {
    private contentModel;
    constructor(contentModel: IContentModel);
    execute({ stateVars }: ICreateReceiveDTO): IReceive;
}
export default ReceiveModel;