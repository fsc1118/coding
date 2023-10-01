import { ReceiveMessageCommandOutput, SQS } from "@aws-sdk/client-sqs"
import { config } from "../config/Config"
import logger from "../logger/logger"
const getSQSMessage = async (): Promise<{
    message: string,
    messageID: string,
    receiptHandle: string
}> => {
    return new Promise<{
        message: string,
        messageID: string,
        receiptHandle: string
    }>((resolve, reject) => {
        const sqs = new SQS({ region: config.aws.region })
        const params = {
            QueueUrl: config.aws.sqs.queueURL,
            VisibilityTimeout: config.aws.sqs.visibilityTimeout
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sqs.receiveMessage(params, (err: any, data: ReceiveMessageCommandOutput | undefined) => {
            if (err) {
                reject(err)
            } else if (data?.Messages === undefined) {
                reject("No messages in queue")
            } else {
                const message = data.Messages[0]
                if (message.Body === undefined || message.MessageId === undefined || message.ReceiptHandle === undefined) {
                    logger.error("Message body is undefined")
                    reject("Message body is undefined")
                } else {
                    logger.info(`Message with id: ${message.MessageId} received: `)
                    resolve({
                        message: message.Body,
                        messageID: message.MessageId,
                        receiptHandle: message.ReceiptHandle
                    })
                }
            }
        })
    })
}

export default getSQSMessage