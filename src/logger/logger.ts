import winston from "winston"

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level}: ${info.message}`
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "log/app.log" }),
    ],
})

export default logger