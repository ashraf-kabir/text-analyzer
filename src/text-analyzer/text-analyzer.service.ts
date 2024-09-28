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

  async findAll(): Promise<Text[]> {
    return this.textRepository.find();
  }

  async findOne(id: number): Promise<Text | null> {
    return this.textRepository.findOne({ where: { id } });
  }

  async update(id: number, content: string): Promise<Text> {
    const text = await this.findOne(id);
    if (text) {
      text.content = content;
      return this.textRepository.save(text);
    }
    throw new Error('Text not found');
  }

  async delete(id: number): Promise<Text> {
    const text = await this.findOne(id);
    if (text) {
      return this.textRepository.remove(text);
    }
    throw new Error('Text not found');
  }
}
