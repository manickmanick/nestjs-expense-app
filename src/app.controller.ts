import { Controller, Get, Post, Put, Delete, Param,Body } from '@nestjs/common';
import { data, ReportType } from './data';

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
  createReport() {
    return 'created';
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
