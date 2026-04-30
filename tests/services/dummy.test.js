import execute from "../../src/services/dummy-service.js"
import * as dummyHelper from "../../src/services/dummy-helper.js"

test('result is false and returns Learning React.js',()=>{
    const spy = jest.spyOn(dummyHelper,'helper').mockImplementation(()=> {
        return false
    })
    const result = execute();
    expect(result).toBe('Learning React.js');
})

test('result is true and returns Learning JS',()=>{
    const spy = jest.spyOn(dummyHelper,'helper').mockImplementation(()=> {
        return true
    })
    const result = execute();
    expect(result).toBe('Learning JS');
})