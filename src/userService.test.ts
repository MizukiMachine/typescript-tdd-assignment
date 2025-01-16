import { UserService } from './userService';

describe('UserService', () => {
    test('creates user successfully', async () => {
        const service = new UserService();
        const user = await service.createUser({
            name: 'John Doe',
            email: 'john@example.com'
        });

        expect(user.id).toBeDefined();
        expect(user.name).toBe('John Doe');
    });
});

test('validates email format', async () => {
    const service = new UserService();
    
    await expect(
        service.createUser({
            name: 'John',
            email: 'invalid-email'
        })
    ).rejects.toThrow('Invalid email format');
});

test('prevents duplicate emails', async () => {
    const service = new UserService();
    
    await service.createUser({
        name: 'John',
        email: 'john@example.com'
    });

    await expect(
        service.createUser({
            name: 'Another John',
            email: 'john@example.com'
        })
    ).rejects.toThrow('Email already exists');
});
