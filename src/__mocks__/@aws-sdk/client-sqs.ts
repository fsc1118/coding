export class SQS {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
    sendMessage(params: any, callback: (error: Error | null, data: any) => void): void {
        if (params.MessageBody === "success") {
            callback(null, { MessageId: "12" })
        } else {
            callback(new Error("Sending failed"), null)
        }
    }
}
