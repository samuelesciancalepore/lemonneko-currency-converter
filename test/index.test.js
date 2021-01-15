const {converter} = require("../src/index.js");

test("USDtoCNY", () => {
    return converter.convert({
        to: "CNY",
        from: "USD",
        amount: 1
    }).then((data) => {
        console.log(data)
        expect(data === undefined).toBe(false)
    }).catch((err) => {
        console.log(err)
        expect(err === undefined).toBe(true)
    })
})

test("CurrencyNotSupport", () => {
    return converter.convert({
        to: "CNY",
        from: "UNKNOWN",
        amount: 1
    }).then((data) => {
        expect(data === undefined).toBe(true)
    }).catch((err) => {
        expect(err === undefined).toBe(false)
        expect(err.message).toBe("unsupported currency: UNKNOWN")
    })
})

test("GetCurrencyList", () => {
    return converter.convert({
        to: "CNY",
        from: "UNKNOWN",
        amount: 1
    }).then((data) => {
        expect(data === undefined).toBe(true)
    }).catch((err) => {
        expect(err === undefined).toBe(false)
        expect(err.message).toBe("unsupported currency: UNKNOWN")
    })
})
