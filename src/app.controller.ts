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
import { v4 as uuidv4 } from 'uuid';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    var output = data.report.filter(function (reportObj) {
      return reportObj.type == reportType;
    });
    return output;
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    var output = data.report.filter(function (reportObj) {
      if (reportObj.type == type && reportObj.id == id) {
        return reportObj;
      }
    });
    if (output.length > 0) {
      return output;
    } else {
      return 'No data found';
    }
  }

  @Post()
  createReport(
    @Body() body: { amount: string; source: string },
    @Param('type') type: string,
  ) {
    const newReport = {
      id: uuidv4(),
      source: body.source,
      amount: body.amount,
      type: type == 'income' ? ReportType.INCOME : ReportType.EXPENSE,
      created_at: new Date(),
      updated_at: new Date(),
    };
    data.report.push(newReport);
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}
