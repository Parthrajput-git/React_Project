// import React from "react";
// import { useSelector } from "react-redux";
// import {  Calendar, DollarSign, Eye } from "lucide-react";
import Pro from "../pages/Profile.module.css";

const OrderHistory = () => {
  const orders = useSelector((state) => state.user.data.orders);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "success";
      case "shipped":
        return "warning";
      case "pending":
        return "pending";
      default:
        return "default";
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <div className={Pro["profile-section"]}>
      <div className={Pro["section-header"]}>
        <h2>My Orders</h2>
        <p className={Pro["section-subtitle"]}>{orders.length} total orders</p>
      </div>

      <div className={Pro["orders-list"]}>
        {orders.map((order) => (
          <div key={order.orderId} className={Pro["order-card"]}>
            <div className={Pro["order-header"]}>
              <div className={Pro["order-info"]}>
                <h3>Order #{order.orderId}</h3>
                <div className={Pro["order-meta"]}>
                  <div className={Pro["meta-item"]}>
                    <Calendar size={16} />
                    <span>
                      {new Date(order.orderDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className={Pro["meta-item"]}>
                    <DollarSign size={16} />
                    <span>{formatPrice(order.totalAmount)}</span>
                  </div>
                </div>
              </div>
              <div className={Pro["order-status"]}>
                <span
                  className={`${Pro["status-badge"]} ${
                    Pro[getStatusColor(order.status)]
                  }`}
                >
                  {order.status}
                </span>
                <button className={Pro["btn-icon"]}>
                  <Eye size={16} />
                </button>
              </div>
            </div>

            <div className={Pro["order-items"]}>
              {order.items.map((item) => (
                <div key={item.productId} className={Pro["order-item"]}>
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className={Pro["item-image"]}
                  />
                  <div className={Pro["item-details"]}>
                    <h4>{item.productName}</h4>
                    <div className={Pro["item-meta"]}>
                      <span>Qty: {item.quantity}</span>
                      <span>{formatPrice(item.price)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
