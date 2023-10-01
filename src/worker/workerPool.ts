import workerPool from "workerpool"
import logger from "../logger/logger"
export class WorkerPool {
    name: string
    pool: workerPool.WorkerPool
    constructor(
        size: number,
        name: string,
        workerScript: string,
    ) {
        this.name = name
        const pool = workerPool.pool(
            workerScript,
            {
                minWorkers: size,
                maxWorkers: size,
                workerType: "thread"
            }
        )
        logger.info(`Worker pool ${name} created with ${size} workers`)
        this.pool = pool
    }
}

