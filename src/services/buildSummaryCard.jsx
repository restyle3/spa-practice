export function buildSummaryCard(payments, refunds) {
  const totalCollectedRevenue = payments
    .filter((payment) => payment.status === "paid")
    .reduce((acc, payment) => acc + payment.amount, 0);
  const failedPayments = payments.filter((payment) => payment.status === "failed").length;
  const pendingPayments = payments.filter((payment) => payment.status === "pending").length;
  const refundedAmount = refunds.reduce((acc, refunded) => acc + refunded.amount, 0);
  const successfulPayments = payments.filter((payment) => payment.status === "paid").length;
  const totalPayments = payments.length;
  const successRate = payments.length === 0 ? 0 : (successfulPayments / totalPayments) * 100;

  return {
    totalCollectedRevenue,
    failedPayments,
    pendingPayments,
    refundedAmount,
    successRate,
  };
}
