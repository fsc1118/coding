import { CodeConfig, ExecutionResult } from "../type/type"

const execute = (
    text: string, /* The code to execute */
    config: CodeConfig /* The configuration of the code */
): string => {
    return text + config.language + config.question
}

abstract class Executable {
    // eslint-disable-next-line no-unused-vars
    abstract execute(text: string, config: CodeConfig): ExecutionResult
}

export { execute, Executable }