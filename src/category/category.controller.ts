import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    Inject,
} from '@nestjs/common';
import { CategoryDto, CreateCategoryDto, UpdateCategoryDto } from './dtos';
import { CategoryServiceInterface } from './interfaces';

@Controller('category')
export class CategoryController {
    constructor(
        @Inject('CategoryServiceInterface')
        private readonly categoryService: CategoryServiceInterface
    ) { }


    @Get(':id')
    async findOne(@Param('id') id: string): Promise<CategoryDto> {
        return await this.categoryService.getCategoryById(id);
    }

    @Post()
    async create(@Body() createCatDto: CreateCategoryDto): Promise<CategoryDto> {
        return await this.categoryService.createCategory(createCatDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCatDto: UpdateCategoryDto): Promise<CategoryDto> {
        return await this.categoryService.updaterCategory(id, updateCatDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.categoryService.deleteCategory(id);
    }
}
