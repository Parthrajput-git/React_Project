// import { useState } from "react";
import "./Dashboard.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// import {
//   User,
//   Heart,
//   Package,
//   Settings,
//   ShoppingCart,
//   Moon,
//   Sun,
//   LogOut,
// } from "lucide-react";
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = ({ user }) => {
  // const [activeTab, setActiveTab] = useState("mydashboard");

  // Prepare Pie Chart data for My Dashboard
  const companies = [
    ...new Set(user.wishlist.map((item) => item.company || "Unknown")),
  ];
  const investmentData = companies.map((company) =>
    user.wishlist
      .filter((item) => (item.company || "Unknown") === company)
      .reduce((sum, item) => sum + item.price, 0)
  );

  const pieData = {
    labels: companies,
    datasets: [
      {
        label: "Investment",
        data: investmentData,
        backgroundColor: [
          "#4f46e5",
          "#6366f1",
          "#facc15",
          "#22c55e",
          "#ef4444",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="dashboad-card">
        <h2>My Investment Dashboard</h2>
        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
          Total Investment: ₹
          {user.wishlist.reduce((sum, item) => sum + item.price, 0)}
        </p>

        {/* Side by Side Section */}
        <div className="investment-section">
          {/* Laptop List */}
          <div className="laptop-list-section">
            <h3>Laptop List</h3>
            <ul className="laptop-list">
              {user.wishlist.map((item) => (
                <li key={item.productId}>
                  {item.productName} - ₹{item.price} ({item.company || "Unknown"})
                </li>
              ))}
            </ul>
          </div>

          {/* Pie Chart */}
          <div className="pie-chart-section">
            <h3>Investment by Company</h3>
            <Pie
              data={pieData}
              options={{
                responsive: true,
                plugins: { legend: { position: "bottom" } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
