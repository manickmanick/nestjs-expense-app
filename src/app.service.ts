import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  getAllReports(type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    var output = data.report.filter(function (reportObj) {
      return reportObj.type == reportType;
    });
    return output;
  }

  getReportById(type: string, id: string) {
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

  createReport(body, type: string) {
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
}
