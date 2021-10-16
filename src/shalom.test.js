const shalom = require("./shalom")
// @ponicode
describe("shalom.default", () => {
    test("0", () => {
        let callFunction = () => {
            shalom.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
