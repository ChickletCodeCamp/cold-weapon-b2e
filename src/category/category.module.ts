import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [{
    provide: 'CategoryServiceInterface',
    useClass: CategoryService
  }]
})
export class CategoryModule { }
