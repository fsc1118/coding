/* eslint-disable no-unused-vars */
export const LanguageExtensionMapping = {
    c: "c",
    cpp: "cpp",
    java: "java",
    python: "py",
    javascript: "js"
}

export const LanguageExecutionCommandMapping = {
    c: "./",
    cpp: "./",
    java: "java",
    python: "python",
    javascript: "node"
}

export const LanguageCompilationCommandMapping = {
    c: "gcc",
    cpp: "g++",
    java: "javac",
    // Python and Javascript do not need compilation
}

export const isLanguageCompilationRequired = {
    c: true,
    cpp: true,
    java: true,
    python: false,
    javascript: false
}

export type LanguageType = "java" | "c" | "cpp" | "python" | "javascript"