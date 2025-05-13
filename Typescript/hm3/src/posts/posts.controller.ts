import {  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put,
  Post, } from '@nestjs/common';
import { PostsService, PostEntity } from './posts.service';  

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): PostEntity | null {
    return this.postsService.findOne(id);
  }

  @Post()
  create(@Body() post: Omit<PostEntity, 'id'>): PostEntity {
    return this.postsService.create(post);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() post: PostEntity) {
    return this.postsService.update(id, post);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
