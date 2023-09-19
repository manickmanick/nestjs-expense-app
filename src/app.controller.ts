import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { data ,ReportType} from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param("type") type: string) {
    
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    var output = data.report.filter(function (reportObj) {
      return reportObj.type == reportType
    })
    return output
  }

  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'created';
  }

  @Put(":id")
  updateReport() {
    return 'updated';
  }

  @Delete(":id")
  deleteReport() {
    return "deleted"
  }
}
