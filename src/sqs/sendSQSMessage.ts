import { SQS, SendMessageCommandOutput } from "@aws-sdk/client-sqs"
import { config } from "../config/Config"
import logger from "../logger/logger"
const sendSQSMessage = async (message: string): Promise<void> => {
    const sqs = new SQS({ region: config.aws.region })

    const params = {
        MessageBody: message,
        QueueUrl: config.aws.sqs.queueURL
    }
    return await new Promise<void>((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sqs.sendMessage(params, function (err: any, data: SendMessageCommandOutput | undefined) {
            if (err) {
                logger.error("Error", err)
                reject(err)
            } else {
                logger.info(`Success, message ID: ${data?.MessageId}`)
                resolve()
            }
        })
    })
}

export default sendSQSMessage