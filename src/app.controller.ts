import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { data, ReportType } from './data';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {

  constructor(
    private readonly appService:AppService
  ){}
  @Get()
  getAllReports(@Param('type') type: string) {
    return this.appService.getAllReports(type)
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    return this.appService.getReportById(type,id)
  }

  @Post()
  createReport(
    @Body() body: { amount: string; source: string },
    @Param('type') type: string,
  ) {}

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}
