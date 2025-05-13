import { Injectable } from '@nestjs/common';

export interface PostEntity {
  id: number;
  title: string;
  content: string;
  authorId: number; 
}

@Injectable()
export class PostsService {
  private posts: PostEntity[] = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1', authorId: 1 },
    { id: 2, title: 'Post 2', content: 'Content of Post 2', authorId: 2 },
  ];

  findAll(): PostEntity[] {
    return this.posts;
  }

  findOne(id: number): PostEntity | null {
    const post = this.posts.find(post => post.id === id);
    return post || null;
  }

  create(post: Omit<PostEntity, 'id'>): PostEntity {
    const newPost: PostEntity = { id: Date.now(), ...post }; 
    this.posts.push(newPost);
    return newPost;
  }

 update(id: number, post: Partial<PostEntity>): PostEntity | null {
  const index = this.posts.findIndex(p => p.id === id);
  if (index !== -1) {
    this.posts[index] = { ...this.posts[index], ...post }; 
    return this.posts[index];
  }
  return null;
}

 delete(id: number): PostEntity | null {
  const index = this.posts.findIndex(post => post.id === id);
  if (index !== -1) {
    const deletedPost = this.posts[index];
    this.posts.splice(index, 1); 
    return deletedPost;  
  }
  return null; 
}
}
