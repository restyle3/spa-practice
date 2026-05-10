const customers = [
  { id: "c1", name: "Alice", country: "PT" },
  { id: "c2", name: "Bruno", country: "ES" },
  { id: "c3", name: "Carla", country: "FR" },
  { id: "c4", name: "Diana", country: "DE" },
];

const payments = [
  {
    id: "p1",
    customerId: "c1",
    amount: 250,
    status: "paid",
    createdAt: "2026-05-10T10:00:00Z",
  },
  {
    id: "p2",
    customerId: "c1",
    amount: 100,
    status: "failed",
    createdAt: "2026-05-11T10:00:00Z",
  },
  {
    id: "p3",
    customerId: "c2",
    amount: 400,
    status: "paid",
    createdAt: "2026-05-09T10:00:00Z",
  },
  {
    id: "p4",
    customerId: "c3",
    amount: 300,
    status: "pending",
    createdAt: "2026-05-12T10:00:00Z",
  },
  {
    id: "p5",
    customerId: "c3",
    amount: 200,
    status: "paid",
    createdAt: "2026-05-13T10:00:00Z",
  },
  {
    id: "p6",
    customerId: "c4",
    amount: 150,
    status: "failed",
    createdAt: "2026-05-14T10:00:00Z",
  },
];

const refunds = [
  { id: "r1", paymentId: "p1", amount: 50 },
  { id: "r2", paymentId: "p3", amount: 100 },
];

export async function fetchCustomers() {
  return customers;
}

export async function fetchPayments() {
  return payments;
}

export async function fetchRefunds() {
  return refunds;
}
