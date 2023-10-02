/* eslint-disable @typescript-eslint/no-unused-vars */

export default abstract class SourceCodeGenerator {
    /**
     * 
     * @param userCode User code
     * @param driverCodePath The path of the driver code
     * 
     * @returns The source code after driver code has been embed
     * @throws If driver code does not exist or cannot be read or the generated source code is too long > 256KB
     */
    abstract generate(
        // eslint-disable-next-line no-unused-vars
        userCode: string, driverCodePath: string,
    ): string | never
}