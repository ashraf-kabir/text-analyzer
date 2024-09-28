import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TextAnalyzerService } from './text-analyzer.service';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';

@Controller('text-analyzer')
@UseGuards(AuthorizationGuard)
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

  @Get('count-sentences/:id')
  countSentences(@Param('id') id: number) {
    return this.textAnalyzerService.countSentencesById(id);
  }

  @Get('count-paragraphs/:id')
  countParagraphs(@Param('id') id: number) {
    return this.textAnalyzerService.countParagraphsById(id);
  }

  @Get('longest-word/:id')
  longestWord(@Param('id') id: number) {
    return this.textAnalyzerService.longestWordById(id);
  }
}
