import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextAnalyzerController } from './text-analyzer.controller';
import { TextAnalyzerService } from './text-analyzer.service';
import { UtilService } from '../util/util.service';
import { Text } from './text.entity';
import { CustomLogger } from 'src/logger/logger.service';

@Module({
  imports: [TypeOrmModule.forFeature([Text])],
  providers: [TextAnalyzerService, UtilService, CustomLogger],
  controllers: [TextAnalyzerController],
})
export class TextAnalyzerModule {}
