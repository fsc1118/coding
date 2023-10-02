import Language from "./Language"

/**
 * 
 * @param language The language of the source code
 * @param userCode The user code
 * @param driverCodePath The path of the driver code
 * @description The source code before driver code has been embedded into the user code
 */
type SourceCodePreAssembled = {
    language: Language,
    userCode: string,
    driverCodePath: string /* The path of the driver code */
}

/**
 * 
 * @param language The language of the source code
 * @param code The source code
 * 
 * @description The source code after driver code has been embedded into the user code. This is the code that will be executed or compiled.
 */
type SourceCodeAfterAssembled = {
    language: Language,
    code: string
}

export { SourceCodePreAssembled, SourceCodeAfterAssembled }