import ackSQSMessage from "./sqs/ackSQSMessage"
import getSQSMessage from "./sqs/getSQSMessage"
import sendSQSMessage from "./sqs/sendSQSMessage"

const run = async () => {
    await sendSQSMessage("Hello world")
    try {
        const output = await getSQSMessage()

        console.log(output)

        await ackSQSMessage(output.receiptHandle)
    } catch (e) {
        console.log(e)
    }

}

run()