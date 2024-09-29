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
import {
  ApiTags,
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@Controller('text-analyzer')
@ApiTags('Text Analyzer')
@ApiBearerAuth('Authorization')
@UseGuards(AuthorizationGuard)
export class TextAnalyzerController {
  constructor(
    private readonly textAnalyzerService: TextAnalyzerService,
    private readonly logger: CustomLogger,
  ) {}

  @Throttle({ default: { limit: 4, ttl: 30000 } })
  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        text: { type: 'string', description: 'The text content to analyze' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Text successfully created' })
  async create(@Body('text') content: string) {
    this.logger.log(`Creating text with content: ${content}`);
    return this.textAnalyzerService.create(content);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Fetch all texts' })
  async findAll() {
    this.logger.log('Fetching all texts');
    return this.textAnalyzerService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the text' })
  @ApiResponse({ status: 200, description: 'Fetch a single text by ID' })
  async findOne(@Param('id') id: number) {
    this.logger.log(`Fetching text with ID: ${id}`);
    return this.textAnalyzerService.findOne(id);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of the text to update',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        text: { type: 'string', description: 'The updated text content' },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Text successfully updated' })
  async update(@Param('id') id: number, @Body('text') content: string) {
    this.logger.log(`Updating text with ID: ${id}, new content: ${content}`);
    return this.textAnalyzerService.update(id, content);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of the text to delete',
  })
  @ApiResponse({ status: 200, description: 'Text successfully deleted' })
  async delete(@Param('id') id: number) {
    this.logger.log(`Deleting text with ID: ${id}`);
    return this.textAnalyzerService.delete(id);
  }

  @Get('count-words/:id')
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the text' })
  @ApiResponse({ status: 200, description: 'Word count of the text' })
  countWords(@Param('id') id: number) {
    this.logger.log(`Counting words for text with ID: ${id}`);
    return this.textAnalyzerService.countWordsById(id);
  }

  @Get('count-characters/:id')
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the text' })
  @ApiResponse({ status: 200, description: 'Character count of the text' })
  countCharacters(@Param('id') id: number) {
    this.logger.log(`Counting characters for text with ID: ${id}`);
    return this.textAnalyzerService.countCharactersById(id);
  }

  @Get('count-sentences/:id')
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the text' })
  @ApiResponse({ status: 200, description: 'Sentence count of the text' })
  countSentences(@Param('id') id: number) {
    this.logger.log(`Counting sentences for text with ID: ${id}`);
    return this.textAnalyzerService.countSentencesById(id);
  }

  @Get('count-paragraphs/:id')
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the text' })
  @ApiResponse({ status: 200, description: 'Paragraph count of the text' })
  countParagraphs(@Param('id') id: number) {
    this.logger.log(`Counting paragraphs for text with ID: ${id}`);
    return this.textAnalyzerService.countParagraphsById(id);
  }

  @Get('longest-word/:id')
  @ApiParam({ name: 'id', type: 'number', description: 'ID of the text' })
  @ApiResponse({ status: 200, description: 'Longest word in the text' })
  longestWord(@Param('id') id: number) {
    this.logger.log(`Finding longest word for text with ID: ${id}`);
    return this.textAnalyzerService.longestWordById(id);
  }
}
