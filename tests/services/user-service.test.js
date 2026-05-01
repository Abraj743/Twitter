import UserService from '../../src/services/user-service.js'
import UserRepository from '../../src/repository/user-repository.js'

jest.mock('../../src/repository/user-repository.js')

describe('user service sign up test',() =>{
    test('should sucessfully create a user',async() =>{
        const data = {
            email:'abc@gmail.com',
            password:"123456"
        };
        (UserRepository.prototype.create).mockReturnValue({...data});
        const service = new UserService();
        const response = await service.signup(data);
        expect(response.email).toBe(data.email);

    })
})