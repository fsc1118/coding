import { Executable } from "./execute"

class JavaExecutable extends Executable {
    execute(text: string, config: CodeConfig): ExecutionResult {
        return {
            output: "Hello, World!",
            error: null
        }
    }
}
export { JavaExecutable }