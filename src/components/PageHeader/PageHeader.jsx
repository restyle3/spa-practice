import "./PageHeader.css";

function PageHeader() {
  return (
    <header className="page-header">
      <div>
        <h1>Payments</h1>
        <p>View and manage all your payments in one place.</p>
      </div>

      <button className="primary-button">Create payment +</button>
    </header>
  );
}

export default PageHeader;
