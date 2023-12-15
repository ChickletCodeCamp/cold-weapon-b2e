import { CategoryDto, CreateCategoryDto, UpdateCategoryDto } from "../dtos";

export interface CategoryServiceInterface {

    /**使用 類別 id 查詢 類別
     * 
     * @param id 
     */
    getCategoryById(id: string): Promise<CategoryDto>;

    /**新增類別
     * 
     * @param createCatDto 
     */
    createCategory(createCatDto: CreateCategoryDto): Promise<CategoryDto>;

    /**更新類別
     * 
     * @param id 類別 id
     * @param updateCatDto 類別物件
     */
    updaterCategory(
        id: string,
        updateCatDto: UpdateCategoryDto
    ): Promise<CategoryDto>;

    /**刪除類別
     *
     * @param id 類別 id
     */
    deleteCategory(id: string): Promise<CategoryDto>;
}
