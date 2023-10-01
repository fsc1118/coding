const LanguageExtensionMapping = {
    c: "c",
    cpp: "cpp",
    java: "java",
    python: "py",
    javascript: "js"
}

type CodeConfig = {
    language: string
    question: number
}

type ExecutionResult = {
    time: number,
    memory: number,
    doesCompile: boolean,
    doesRun: boolean,
    output: string,
    error: string
}

export { CodeConfig, LanguageExtensionMapping, ExecutionResult }