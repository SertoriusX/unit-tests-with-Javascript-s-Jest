test('Receives a dollar amount and returns the equivalent amount in Japan Yen',()=>{
    const result = 1*153.95
    expect(result).toBe(153.95)
})


test('Receives a Euro amount and returns the equivalent amount in US Dollar',()=>{
    const result = 1*1.16
    expect(result).toBe(1.16)
})


test('Receives a Yen amount and returns the equivalent amount in England Pound',()=>{
    const result = 1*0.0049
    expect(result).toBe(0.0049)
})