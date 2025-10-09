import "./HelpSupport.css";
import Select from "react-select";

import photo1 from "../assets/photo1.png";
import acerlogo from "../assets/acerlogo.png";
import applelogo from "../assets/applelogo.png";
import asuslogo from "../assets/asuslogo.png";
import delllogo from "../assets/delllogo.png";
import Microsoftlogo from "../assets/Microsoftlogo.png";
import lenovologo from "../assets/lenovologo.png";
import hcllogo from "../assets/hcllogo.png";
import msilogo from "../assets/msilogo.png";
import samsunglogo from "../assets/samsunglogo.webp";

export default function HelpSupport() {
  const companies = [
    { value: "acer", label: "Acer", logo: acerlogo },
    { value: "apple", label: "Apple Macbook", logo: applelogo },
    { value: "asus", label: "Asus", logo: asuslogo },
    { value: "dell", label: "Dell", logo: delllogo },
    { value: "microsoft", label: "Microsoft", logo: Microsoftlogo },
    { value: "lenovo", label: "Lenovo", logo: lenovologo },
    { value: "hcl", label: "HCL Tech", logo: hcllogo },
    { value: "msi", label: "MSI", logo: msilogo },
    { value: "samsung", label: "Samsung", logo: samsunglogo },

  ];

  const formatOptionLabel = (option) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={option.logo}
        alt={option.label}
        style={{ width: 24, height: 24, marginRight: 8 }}
      />
      <span>{option.label}</span>
    </div>
  );

  return (
    <div className="help-supportpage">
      <div className="helplogo">
        <img src={photo1} alt="Logo" className="helplogo" />
      </div>
      <h1 className="helptitle">Help & Support</h1>
      <h4>Need Help with Your Laptop? We’re Here for You!</h4>

      <form className="help-form">
        <div className="helpname-row">
          <div className="helpform-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" required />
          </div>

          <div className="helpform-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" required />
          </div>
        </div>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>What's the issue?</label>
        <select required>
          <option>Warranty Issue</option>
          <option>Repair & Service</option>
          <option>Software Support</option>
          <option>Order Related Issue</option>
        </select>

        <label>Company Name</label>
        <Select
          options={companies}
          formatOptionLabel={formatOptionLabel}
          className="helpcompany-select"
          placeholder="Select Company"
        />

        <label>Your Query</label>
        <textarea rows="4" placeholder="Describe your issue..." required />

        <label>Attach Screenshot (optional)</label>
        <input type="file" accept="image/*" />

        <button type="submit" className="helpsubmit-btn">
          Submit Query
        </button>
      </form>
    </div>
  );
}
