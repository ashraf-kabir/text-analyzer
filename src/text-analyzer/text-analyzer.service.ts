import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Text } from './text.entity';

@Injectable()
export class TextAnalyzerService {
  constructor(
    @InjectRepository(Text)
    private textRepository: Repository<Text>,
  ) {}

  async create(content: string): Promise<Text> {
    const text = this.textRepository.create({ content });
    return this.textRepository.save(text);
  }
}
