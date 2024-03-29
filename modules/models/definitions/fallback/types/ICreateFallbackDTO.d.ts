import { IVariable } from "../../stateVariable/types/IVariable";
import { IModifierInvocation } from "../../function/types/IModifierInvocation";
export interface ICreateFallbackDTO {
    stateVars: Array<IVariable>;
    isPayable?: boolean;
    modifiers?: Array<IModifierInvocation>;
    overrides?: boolean;
    virtual?: boolean;
}
