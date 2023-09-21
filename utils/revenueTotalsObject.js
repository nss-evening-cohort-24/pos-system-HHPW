const revenueTotalsObject = (obj) => {
  const revBreakdown = {
    totalRevenue: obj.map((item) => Number(item.orderTotal)).reduce((a, b) => a + b, 0),
    totalTips: obj.map((item) => Number(item.tipAmount)).reduce((a, b) => a + b, 0),
    phoneOrders: obj.filter((item) => item.paymentType === 'Phone').length,
    inPersonOrders: obj.filter((item) => item.paymentType === 'In-Person').length,
    cashPayment: obj.filter((item) => item.paymentType === 'cash').length,
    creditPayment: obj.filter((item) => item.paymentType === 'credit').length,
    mobilePayment: obj.filter((item) => item.paymentType === 'mobile').length,
    debitPayment: obj.filter((item) => item.paymentType === 'debit').length,
    checkPayment: obj.filter((item) => item.paymentType === 'check').length,
  };
  return revBreakdown;
};

export default revenueTotalsObject;
