import { ITry } from "@models/statements/try/types/ITry";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { IInputWriter } from "@writers/statements/inputWriter/types/IInputWriter";
import { IMethodCallWriter } from "@writers/statements/methodCallWriter/types/IMethodCallWriter";
import { INewContractWriter } from "@writers/statements/newContractWriter/types/INewContractWriter";
import { ITryWriter } from "../types/ITryWriter";
declare class TryWriter implements ITryWriter {
    private newContractWriter;
    private methodCallWriter;
    private inputWriter;
    private contentWriter;
    constructor(newContractWriter: INewContractWriter, methodCallWriter: IMethodCallWriter, inputWriter: IInputWriter);
    _init(contentWriter: IContentWriter): void;
    write(_try: ITry): string;
}
export default TryWriter;
