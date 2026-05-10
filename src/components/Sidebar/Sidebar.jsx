import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">GoCardless</h2>

      <nav className="sidebar-nav">
        <a href="#">Home</a>
        <a href="#" className="active">
          Payments
        </a>
        <a href="#">Customers</a>
        <a href="#">Mandates</a>
        <a href="#">Payouts</a>
        <a href="#">Settings</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
