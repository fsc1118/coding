import {
    get, set
} from "../../src/cache/cache"

test("get from memcache", () => {
    expect(get("test")).rejects.toThrow()
})

test("set to memcache", () => {
    expect(set("test", "test", 100)).rejects.toThrow()
})

