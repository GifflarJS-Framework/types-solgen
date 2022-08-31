import { IContractBodyItem } from "@models/toplevels/contractBody/types/IContractBodyItem";
import { ICustomErrorWriter } from "@writers/definitions/customErrorWriter/types/ICustomErrorWriter";
import { IEnumWriter } from "@writers/definitions/enumWriter/types/IEnumWriter";
import { IEventWriter } from "@writers/definitions/eventWriter/types/IEventWriter";
import { IFunctionWriter } from "@writers/definitions/functionWriter/types/IFunctionWriter";
import { IModifierWriter } from "@writers/definitions/modifierWriter/types/IModifierWriter";
import { IStateMappingWriter } from "@writers/definitions/stateMappingWriter/types/IStateMappingWriter";
import { IStateVariableWriter } from "@writers/definitions/stateVariableWriter/types/IStateVariableWriter";
import { IUsingWriter } from "@writers/definitions/usingWriter/types/IUsingWriter";
import { IContractBodyWriter } from "../types/IContractBodyWriter";
declare class ContractBodyWriter implements IContractBodyWriter {
    private eventWriter;
    private functionWriter;
    private stateVariableWriter;
    private modifierWriter;
    private customErrorWriter;
    private stateMappingWriter;
    private usingWriter;
    private enumWriter;
    constructor(eventWriter: IEventWriter, functionWriter: IFunctionWriter, stateVariableWriter: IStateVariableWriter, modifierWriter: IModifierWriter, customErrorWriter: ICustomErrorWriter, stateMappingWriter: IStateMappingWriter, usingWriter: IUsingWriter, enumWriter: IEnumWriter);
    write(bodyItem: IContractBodyItem): string;
}
export default ContractBodyWriter;
