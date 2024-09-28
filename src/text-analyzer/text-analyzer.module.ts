import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextAnalyzerController } from './text-analyzer.controller';
import { TextAnalyzerService } from './text-analyzer.service';
import { Text } from './text.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Text])],
  providers: [TextAnalyzerService],
  controllers: [TextAnalyzerController],
})
export class TextAnalyzerModule {}
