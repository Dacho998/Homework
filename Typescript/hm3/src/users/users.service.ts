import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
    name: string;
    email: string;
    role: string;
}
@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 1, name: 'John Doe', email: 'jhon@gmail.com', role: 'admin' },
        { id: 2, name: 'Jane Doe', email: 'jane@gmail.com', role: 'user' }, 
    ]
    findAll(): User[] {
        return this.users;
    };
    findOne(id: number): User | null {
        const user = this.users.find(user => user.id === id);
        return user || null;
    };
    create(user: User): User {
        this.users.push(user);
        return user;
    };
    update(id: number, user: User): User | null {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = user;
            return user;
        }
        return null;
    };
    delete(id: number): User | null {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            const deletedUser = this.users[index];
            this.users.splice(index, 1);
            return deletedUser;
        }
        return null;
    };
}

