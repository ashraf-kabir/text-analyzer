import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TextAnalyzerService } from './text-analyzer.service';

@Controller('text-analyzer')
export class TextAnalyzerController {
  constructor(private readonly textAnalyzerService: TextAnalyzerService) {}

  @Post()
  async create(@Body('text') content: string) {
    return this.textAnalyzerService.create(content);
  }

  @Get()
  async findAll() {
    return this.textAnalyzerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.textAnalyzerService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body('text') content: string) {
    return this.textAnalyzerService.update(id, content);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.textAnalyzerService.delete(id);
  }

  @Get('count-words/:id')
  countWords(@Param('id') id: number) {
    return this.textAnalyzerService.countWordsById(id);
  }

  @Get('count-characters/:id')
  countCharacters(@Param('id') id: number) {
    return this.textAnalyzerService.countCharactersById(id);
  }
}
