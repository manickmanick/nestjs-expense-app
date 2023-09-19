export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'dnjdjd',
      source: 'dd',
      amount: 10,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '1',
      source: 'dd',
      amount: 10,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number | string;
    created_at: Date;
    updated_at: Date;
    type: ReportType.EXPENSE | ReportType.INCOME;
  }[];
}

// data.report.push({

//     id: "dnjdjd",
//     source: "dd",
//     amount: 10,
//     created_at: new Date(),
//     updated_at: new Date(),
//     type:ReportType.EXPENSE
// })
