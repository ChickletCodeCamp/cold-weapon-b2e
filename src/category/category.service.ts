import { Injectable } from '@nestjs/common';
import { CategoryServiceInterface } from './interfaces';
import { CategoryDto, CreateCategoryDto, UpdateCategoryDto } from './dtos';

@Injectable()
export class CategoryService implements CategoryServiceInterface {
    async getCategoryById(id: string): Promise<CategoryDto> {
        throw new Error('Method not implemented.');
    }
    async createCategory(createCatDto: CreateCategoryDto): Promise<CategoryDto[]> {
        throw new Error('Method not implemented.');
    }
    async updaterCategory(id: string, updateCatDto: UpdateCategoryDto): Promise<CategoryDto[]> {
        throw new Error('Method not implemented.');
    }
    async deleteCategory(id: string): Promise<CategoryDto> {
        throw new Error('Method not implemented.');
    }
}
