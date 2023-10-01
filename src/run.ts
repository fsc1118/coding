import {
    get, set
} from "./cache/cache"

async function main() {
    const res = await set("test", "test", 100)
    console.log(res)
    const data = await get("test")
    console.log(data)
}

main()