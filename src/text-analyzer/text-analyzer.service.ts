import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Text } from './text.entity';
import { UtilService } from '../util/util.service';

@Injectable()
export class TextAnalyzerService {
  constructor(
    @InjectRepository(Text)
    private textRepository: Repository<Text>,
    private utilService: UtilService,
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

  async countWordsById(id: number): Promise<{
    givenText: string;
    words: number;
  }> {
    const text = await this.findOne(id);
    if (text) {
      return {
        givenText: text.content,
        words: this.utilService.countWords(text.content),
      };
    }
    throw new Error('Text not found');
  }

  async countCharactersById(
    id: number,
  ): Promise<{ givenText: string; characters: number }> {
    const text = await this.findOne(id);
    if (text) {
      return {
        givenText: text.content,
        characters: this.utilService.countCharacters(text.content),
      };
    }
    throw new Error('Text not found');
  }

  async countSentencesById(
    id: number,
  ): Promise<{ givenText: string; sentences: number }> {
    const text = await this.findOne(id);
    if (text) {
      return {
        givenText: text.content,
        sentences: this.utilService.countSentences(text.content),
      };
    }
    throw new Error('Text not found');
  }

  async countParagraphsById(
    id: number,
  ): Promise<{ givenText: string; paragraphs: number }> {
    const text = await this.findOne(id);
    if (text) {
      return {
        givenText: text.content,
        paragraphs: this.utilService.countParagraphs(text.content),
      };
    }
    throw new Error('Text not found');
  }

  async longestWordById(
    id: number,
  ): Promise<{ givenText: string; longestWord: string }> {
    const text = await this.findOne(id);
    if (text) {
      return {
        givenText: text.content,
        longestWord: this.utilService.longestWord(text.content),
      };
    }
    throw new Error('Text not found');
  }
}
