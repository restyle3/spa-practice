import "./CustomerTable.css";

function CustomerTable({ customerRows }) {
  return (
    <section className="table-card">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Paid Amount</th>
            <th>Failed Payments</th>
            <th>Refunded Amount</th>
            <th>Last Payment</th>
          </tr>
        </thead>

        <tbody>
          {customerRows.map((customerRow) => (
            <tr key={customerRow.customerName}>
              <td>{customerRow.customerName}</td>
              <td>£{customerRow.totalPaidAmount}</td>
              <td>{customerRow.failedPayments}</td>
              <td>£{customerRow.refundedAmount}</td>
              <td>
                <span className={`status-badge ${customerRow.lastPaymentStatus}`}>{customerRow.lastPaymentStatus}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default CustomerTable;
