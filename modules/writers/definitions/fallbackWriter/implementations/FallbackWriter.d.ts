import { IFallback } from "@models/definitions/fallback/types/IFallback";
import { IContentWriter } from "@writers/definitions/contentWriter/types/IContentWriter";
import { IFallbackWriter } from "../types/IFallbackWriter";
declare class FallbackWriter implements IFallbackWriter {
    private contentWriter;
    constructor(contentWriter: IContentWriter);
    write(fallback: IFallback): string;
}
export default FallbackWriter;
