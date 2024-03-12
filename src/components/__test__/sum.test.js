import { sum } from "../sum"

test("Desc of test",()=>{
    const result = sum(3,4);
    //assertion
    expect(result).toBe(7);
})