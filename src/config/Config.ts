export const config = {
    aws: {
        region: "us-east-2",
        sqs: {
            queueURL: "https://sqs.us-east-2.amazonaws.com/390924664773/workerMessage",
            visibilityTimeout: 10
        }
    },
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