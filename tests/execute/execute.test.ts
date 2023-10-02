import { execute } from "../../src/execute/execute"
import { CodeConfig } from "../../src/constant/constants"
test("execute", () => {
    expect(execute(
        "Hello, World!",
        {
            language: "TypeScript",
            question: 1
        } as CodeConfig
    )).toBe("Hello, World!TypeScript1")
})