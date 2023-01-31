import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Get()
    findAll() {
        try {
            [].find((v) => v.ask).name;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.FORBIDDEN,
                    error: 'This is a custom message',
                },
                HttpStatus.FORBIDDEN,
                {
                    cause: error,
                },
            );
        }
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.catsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return this.catsService.update(+id, updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.catsService.remove(+id);
    }
}
