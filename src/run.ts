import ackSQSMessage from "./aws/sqs/ackSQSMessage"
import getSQSMessage from "./aws/sqs/getSQSMessage"
import sendSQSMessage from "./aws/sqs/sendSQSMessage"

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