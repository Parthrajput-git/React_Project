import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { deleteProfile, updateSettings } from "../redux/slices/userSlice";
import Swal from "sweetalert2";
import Pro from "../pages/Profile.module.css";

import { Globe, Moon, Skull, Trash, KeyRound } from "lucide-react";
import { Link } from "react-router-dom";

const Settings = () => {
  const settings = useSelector((state) => state.user.data.settings);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: settings,
  });

  const onSubmit = (data) => {
    dispatch(updateSettings(data));
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this profile!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProfile());
        Swal.fire("Deleted!", "Your profile has been deleted.", "success");
        // Yaha tum apna actual delete function call kar sakte ho
      }
    });
  };

  // const watchedValues = watch();

  return (
    <div className={Pro["profile-section"]}>
      <div className={Pro["section-header"]}>
        <h2>Settings & Preferences</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={Pro["settings-form"]}>
        <div className={Pro["settings-group"]}>
          <div className={Pro["group-header"]}>
            <Globe size={20} />
            <h3>Regional Settings</h3>
          </div>

          <div className={Pro["form-group"]}>
            <label>Language</label>
            <select {...register("language")}>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>

          <div className={Pro["form-group"]}>
            <label>Currency</label>
            <select {...register("currency")}>
              <option value="INR">Indian Rupee (INR)</option>
              <option value="USD">US Dollar (USD)</option>
              <option value="EUR">Euro (EUR)</option>
            </select>
          </div>
        </div>

        <div className={Pro["settings-group"]}>
          <div className={Pro["group-header"]}>
            <Moon size={20} />
            <h3>Appearance</h3>
          </div>

          <label className={Pro["toggle-label"]}>
            <input type="checkbox" {...register("darkMode")} />
            <span className={Pro["toggle-switch"]}></span>
            <span>Dark Mode</span>
          </label>
        </div>

        <div className={Pro["settings-group"]}>
          <div className={Pro["group-header"]}>
            <Skull size={20} />
            <h3>Danger Buttons</h3>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <button className={Pro["btn-delete"]} onClick={handleDelete}>
              <Trash size={16} /> Delete Profile
            </button>

            <Link
              to="/profile/reset-password"
              style={{ textDecoration: "none" }}
            >
              <button className={Pro["btn-delete"]}>
                <KeyRound size={16} />
                Reset Password
              </button>
            </Link>
          </div>
        </div>

        <div className={Pro["form-actions"]}>
          <button type="submit" className={Pro["btn-primary"]}>
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
