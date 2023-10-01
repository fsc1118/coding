export const config = {
    java: {
        compile: {
            command: "javac",
            args: ["-encoding", "UTF-8", "-d", "bin", "Solution.java"],
            cwd: "src/execute/java"
        },
        run: {
            command: "java",
            args: ["-classpath", "bin", "Main"],
            cwd: "src/execute/java"
        }
    },
}
}