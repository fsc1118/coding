import { SQS } from "@aws-sdk/client-sqs"
import { config } from "../../config/Config"
import logger from "../../logger/logger"

const ackSQSMessage = (receiptHandle: string): Promise<void> => {
    const sqs = new SQS({ region: config.aws.region })
    return new Promise<void>((resolve, reject) => {
        const params = {
            QueueUrl: config.aws.sqs.queueURL,
            ReceiptHandle: receiptHandle
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sqs.deleteMessage(params, (err: any) => {
            if (err) {
                logger.error(err)
                reject(err)
            } else {
                logger.info(`Message deleted for receipt ${receiptHandle}`)
                resolve()
            }
        })
    })
}

export default ackSQSMessage