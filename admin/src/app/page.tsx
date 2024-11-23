export default function Home() {
  const loanApplications = [
    { id: 1, name: "John Doe", amount: "$10,000", status: "Approved" },
    { id: 2, name: "Jane Smith", amount: "$5,000", status: "Pending" },
    { id: 3, name: "Michael Brown", amount: "$15,000", status: "Declined" },
    { id: 4, name: "Emily Clark", amount: "$8,000", status: "Approved" },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-bold mb-6">Bank Loan Applications</h1>
          <div className="space-y-4 w-full">
            {loanApplications.map((loan) => (
              <div
                key={loan.id}
                className="border p-4 rounded-lg shadow-md w-full"
              >
                <h2 className="text-xl font-semibold">{loan.name}</h2>
                <p className="text-sm text-gray-500">
                  Loan Amount: {loan.amount}
                </p>
                <p
                  className={`text-sm ${
                    loan.status === "Approved"
                      ? "text-green-600"
                      : loan.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Credit Scoring: {loan.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
