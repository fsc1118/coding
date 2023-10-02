// project/src/aws/sqsService.test.ts

import sendSQSMessage from "../../src/aws/sqs/sendSQSMessage"

jest.mock("@aws-sdk/client-sqs")

describe("sendSQSMessage", () => {
    it("should resolve when sending succeeds", async () => {
        const result = await sendSQSMessage("success")
        expect(result).toBeUndefined()
    })

    it("should reject when sending fails", async () => {
        try {
            await sendSQSMessage("failure")
            // If it doesn"t throw an error, fail the test
            fail("Expected an error to be thrown")
        } catch (error) {
            expect((error as Error).message).toBe("Sending failed")
        }
    })
})
