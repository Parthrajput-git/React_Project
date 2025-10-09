import { useSelector } from "react-redux";
import { User, MapPin, Package, Heart, Settings, Headphones } from "lucide-react";
import Pro from "../pages/Profile.module.css";

const ProfileSidebar = ({ activeSection, setActiveSection }) => {
  const userData = useSelector((state) => state.user.data);

  const menuItems = [
    { id: "profile", label: "Profile Info", icon: User },
    { id: "dashboard", label: "My Dashboard", icon: User },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "orders", label: "My Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "help", label: "Help & Support", icon: Headphones },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className={Pro["profile-sidebar"]}>
      <div className={Pro["sidebar-header"]}>
        {userData.profileImage ? (
          <img
            src={userData.profileImage}
            alt="Profile"
            className={`${Pro["profile-image-large"]} ${Pro["profile-avatar"]}`}
          />
        ) : (
          <div
            className={Pro["profile-avatar"]}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#26838f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            {userData.name?.charAt(0).toUpperCase()}
          </div>
        )}
        <div className={Pro["profile-info"]}>
          <h3>{userData.name}</h3>
        </div>
      </div>

      <nav className={Pro["sidebar-nav"]}>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`${Pro["sidebar-item"]} ${
                activeSection === item.id ? Pro["active"] : ""
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <IconComponent size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
