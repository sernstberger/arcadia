const faker = require('faker')

const loan = {
  active: true,
  editing: true,
  new: true,
  principal: 10000,
  interestRate: '0.0453',
  niceInterestRate: 4.53,
  // term: '120',
  term: 120,
  startDate: '2020-05-30T17:13:35.103Z',
  graduationDate: '2022-05-01T04:00:00.000Z',
  gracePeriod: 6,
  paymentPlanOptions: [
    { value: 'standard', label: 'Standard' },
    { value: 'paye', label: 'PAYE/IBR' },
    { value: 'repaye', label: 'REPAYE' }
  ],
  paymentPlan: 'standard',
  paymentStartChoice: false,
  interestAccumulation: false,
  originationFee: '0.01059',
  niceOriginationFee: 1.059,
  loanType: 'Direct Unsubsidized Loan for Undergraduates (formerly Stafford)',
  academicYear: '’19-’20',
  // loanTypeOptions: [
  //   'Direct Subsidized Loan (formerly Stafford)',
  //   'Direct Unsubsidized Loan for Undergraduates (formerly Stafford)',
  //   'Direct Unsubsidized Loan for Graduate Students (formerly Stafford)',
  //   'Direct PLUS Loan for Parents',
  //   'Direct PLUS Loan for Students'
  // ],
  fundingAmount: 9894.1,
  loanAmount: 10000
}

module.exports = loan
