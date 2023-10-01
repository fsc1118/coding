import { GetQueueUrlCommandOutput, SQS } from "@aws-sdk/client-sqs"
import { config } from "../config/Config"
import logger from "../logger/logger"
const getSQSQueue = async (): Promise<string> => {
    const sqs = new SQS({ region: config.aws.region })
    const params = {
        QueueName: "workerMessage"
    }
    return await new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        sqs.getQueueUrl(params, (err: any, data: GetQueueUrlCommandOutput | undefined) => {
            if (err) {
                logger.error(err)
                reject(err)
            } else {
                logger.info(`Get SQS Queue URL: ${data?.QueueUrl}`)
                if (data?.QueueUrl === undefined) {
                    reject("Queue URL is undefined")
                } else {
                    resolve(data.QueueUrl)
                }
            }
        })
    })
}

const pollSQS = async () => {
    console.log(await getSQSQueue())
}

export default pollSQS