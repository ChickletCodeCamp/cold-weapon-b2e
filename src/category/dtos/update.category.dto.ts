import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoryDto {

    @ApiProperty({
        description: '類別名稱',
    })
    name: string;

    @ApiProperty({
        description: '類別代號',
    })
    code: string;

    @ApiProperty({
        description: '排序',
    })
    seq: number;

    @ApiProperty({
        description: '店家代號,唯讀,不可更改',
    })
    storeId: string;
}