export function buildCustomerTable(customers, payments, refunds) {
  return customers.map((customer) => {
    const customerPayments = payments.filter((payment) => payment.customerId === customer.id);
    const totalPaidAmount = customerPayments
      .filter((payment) => payment.customerId === customer.id)
      .reduce((acc, payment) => acc + payment.amount, 0);
    const failedPayments = customerPayments.filter(
      (payment) => payment.customerId === "failed",
    ).length;
    const lastPayment = [...customerPayments].sort(
      (currentPayment, nextPayment) => new Date(nextPayment.createdAt) - new Date(currentPayment.createdAt),
    )[0];
    const refundedAmount = refunds
      .filter((refund) => {
        const refundedPayment = payments.find((payment) => payment.id === refund.paymentId);

        return refundedPayment?.customerId === customer.id;
      })
      .reduce((acc, refund) => acc + refund.amount, 0);

    return {
      id: customer.id,
      customerName: customer.name,
      totalPaidAmount,
      failedPayments,
      refundedAmount,
      lastPaymentStatus: lastPayment ? lastPayment.status : "No payments",
    };
  });
}

