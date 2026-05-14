import { useEffect, useState } from "react";
import "./App.css";
import { fetchCustomers, fetchPayments, fetchRefunds } from "./utils/api";
import CustomerTable from "./components/CustomerTable/CustomerTable";
import SummaryCard from "./components/SummaryCard/SummaryCard";
import { buildSummaryCard } from "./services/buildSummaryCard";
import { buildCustomerTable } from "./services/buildCustomerTable";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  const [summary, setSummary] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("none")
  const [searchTerm, setSearchTerm] = useState("")

useEffect(() => {
  async function loadData() {
    try {
      const [customers, payments, refunds] = await Promise.all([
        fetchCustomers(),
        fetchPayments(),
        fetchRefunds(),
      ]);

      const summaryData = buildSummaryCard(payments, refunds);
      const customerData = buildCustomerTable(customers, payments, refunds);

      setSummary(summaryData);
      setCustomer(customerData);
    } catch (err) {
      console.error(err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  }

  loadData();
}, []);

  if (loading) return <p>Loading...</p>
  if (error) return <P>{error}</P>

  const filteredCustomers = customer.filter((customerRow) => {
    const matchesSearch = customerRow.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || customerRow.lastPaymentStatus === statusFilter;

    return matchesSearch && matchesStatus;
  })

  const sortedCustomers = [...filteredCustomers].sort((currentCustomer, nextCustomer) => {
    if (sortBy === "highestPaid") {
      return nextCustomer.totalPaidAmount - currentCustomer.totalPaidAmount;
    }
    if (sortBy === "lowestPaid") {
      return currentCustomer.totalPaidAmount - nextCustomer.totalPaidAmount;
    }

    return 0;
  })

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <SummaryCard summary={summary} />   
        <section className="filters-toolbar">
          <input
            className="search-input"
            type="text"
            placeholder="Search by customer name..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            className="filter-select"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">All statuses</option>
            <option value="paid">Paid</option>
            <option value="failed">Failed</option>
            <option value="pending">Pending</option>
          </select>

          <select className="filter-select" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="none">No sorting</option>
            <option value="highestPaid">Highest paid</option>
            <option value="lowestPaid">Lowest paid</option>
          </select>
        </section>

        {sortedCustomers.length === 0 ? <p>No customers found.</p> : <CustomerTable customerRows={sortedCustomers} />}

      </main>
    </div>
  );
}

export default App;
