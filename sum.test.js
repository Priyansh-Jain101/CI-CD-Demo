import sum from "./sum.js";

// test("add 2 + 2 to equals 4", ()=>{
//     expect(sum(2, 2)).toBe(4);
// })

// test("add 2 + 2 to equals 4", ()=>{
//     expect(sum(2, 5)).toBe(7);
// })

describe("2nd way to Test for the sum function with multiple tests",()=>{
    test("add 2 + 2 to equals 4", ()=>{
    expect(sum(2, 2)).toBe(4);
})

test("add 2 + 2 to equals 4", ()=>{
    expect(sum(-2, -5)).toBe(-7);
})
})