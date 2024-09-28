import { Controller, Post, Body } from '@nestjs/common';
import { TextAnalyzerService } from './text-analyzer.service';

@Controller('text-analyzer')
export class TextAnalyzerController {
  constructor(private readonly textAnalyzerService: TextAnalyzerService) {}

  @Post()
  async create(@Body('text') content: string) {
    return this.textAnalyzerService.create(content);
  }
}
