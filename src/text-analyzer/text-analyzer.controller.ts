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
import { Throttle } from '@nestjs/throttler';
import { TextAnalyzerService } from './text-analyzer.service';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { CustomLogger } from 'src/logger/logger.service';

@Controller('text-analyzer')
@UseGuards(AuthorizationGuard)
export class TextAnalyzerController {
  constructor(
    private readonly textAnalyzerService: TextAnalyzerService,
    private readonly logger: CustomLogger,
  ) {}

  @Throttle({ default: { limit: 3, ttl: 60000 } })
  @Post()
  async create(@Body('text') content: string) {
    this.logger.log(`Creating text with content: ${content}`);
    return this.textAnalyzerService.create(content);
  }

  @Get()
  async findAll() {
    this.logger.log('Fetching all texts');
    return this.textAnalyzerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    this.logger.log(`Fetching text with ID: ${id}`);
    return this.textAnalyzerService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body('text') content: string) {
    this.logger.log(`Updating text with ID: ${id}, new content: ${content}`);
    return this.textAnalyzerService.update(id, content);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.logger.log(`Deleting text with ID: ${id}`);
    return this.textAnalyzerService.delete(id);
  }

  @Get('count-words/:id')
  countWords(@Param('id') id: number) {
    this.logger.log(`Counting words for text with ID: ${id}`);
    return this.textAnalyzerService.countWordsById(id);
  }

  @Get('count-characters/:id')
  countCharacters(@Param('id') id: number) {
    this.logger.log(`Counting characters for text with ID: ${id}`);
    return this.textAnalyzerService.countCharactersById(id);
  }

  @Get('count-sentences/:id')
  countSentences(@Param('id') id: number) {
    this.logger.log(`Counting sentences for text with ID: ${id}`);
    return this.textAnalyzerService.countSentencesById(id);
  }

  @Get('count-paragraphs/:id')
  countParagraphs(@Param('id') id: number) {
    this.logger.log(`Counting paragraphs for text with ID: ${id}`);
    return this.textAnalyzerService.countParagraphsById(id);
  }

  @Get('longest-word/:id')
  longestWord(@Param('id') id: number) {
    this.logger.log(`Finding longest word for text with ID: ${id}`);
    return this.textAnalyzerService.longestWordById(id);
  }
}
