import "./SummaryCard.css";

function SummaryCard({ summary }) {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <h3>Total Collected Revenue</h3>
        <strong>£{summary.totalCollectedRevenue}</strong>
      </div>

      <div className="stat-card">
        <h3>Failed Payments</h3>
        <strong>{summary.failedPayments}</strong>
      </div>

      <div className="stat-card">
        <h3>Pending Payments</h3>
        <strong>{summary.pendingPayments}</strong>
      </div>

      <div className="stat-card">
        <h3>Refunded Amount</h3>
        <strong>£{summary.refundedAmount}</strong>
      </div>
      <div className="stat-card">
        <h3>Success Rate</h3>
        <strong>{summary.successRate}%</strong>
      </div>
    </section>
  );
}

export default SummaryCard;
