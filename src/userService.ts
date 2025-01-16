interface User {
  id: string;
  name: string;
  email: string;
}

interface CreateUserDTO {
  name: string;
  email: string;
}

export class UserService {
  async createUser(data: CreateUserDTO): Promise<User> {
    // 実際のアプリケーションではDBアクセスなどが入る
    return {
        id: Math.random().toString(),
        ...data
    };
  }
}
