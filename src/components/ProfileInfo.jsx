import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateProfile } from "../redux/slices/userSlice";
import { Edit3, Save, X } from "lucide-react";
import Swal from "sweetalert2";
import Pro from "../pages/Profile.module.css";

const ProfileInfo = () => {
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      dateOfBirth: userData.dateOfBirth,
      gender: userData.gender,
    },
  });

  // const onSubmit = (data) => {
  //   dispatch(updateProfile(data));
  //   setIsEditing(false);
  // };

  const onSubmit = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once changed, you will not be able to recover this profile!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "blue",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateProfile(data));
        setIsEditing(false);
        Swal.fire("Changed!", "Your profile has been Changed.", "success");
      }
    });
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className={Pro["profile-section"]}>
      <div className={Pro["section-header"]}>
        <h2>Profile Information</h2>
        <div className={Pro["section-header-btns"]}>
          {!isEditing && (
            <button
              className={Pro["btn-edit"]}
              onClick={() => setIsEditing(true)}
            >
              <Edit3 size={16} />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className={Pro["profile-card"]}>
        <div className={Pro["profile-avatar-section"]}>
          {userData.profileImage ? (
            <img
              src={userData.profileImage}
              alt="Profile"
              className={Pro["profile-image-large"]}
            />
          ) : (
            <div
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

          <div className={Pro["profile-meta"]}>
            <p className={Pro["join-date"]}>
              Member since {new Date(userData.joinedDate).toLocaleDateString()}
            </p>
            <p className={Pro["user-id"]}>User ID: {userData.userId}</p>
          </div>
        </div>

        {isEditing ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={Pro["profile-form"]}
          >
            <div className={Pro["form-grid"]}>
              <div className={Pro["form-group"]}>
                <label>Full Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className={errors.name ? Pro["error"] : ""}
                />
                {errors.name && (
                  <span className={Pro["error-message"]}>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className={Pro["form-group"]}>
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={errors.email ? Pro["error"] : ""}
                />
                {errors.email && (
                  <span className={Pro["error-message"]}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className={Pro["form-group"]}>
                <label>Phone</label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  className={errors.phone ? Pro["error"] : ""}
                />
                {errors.phone && (
                  <span className={Pro["error-message"]}>
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className={Pro["form-group"]}>
                <label>Date of Birth</label>
                <input
                  type="date"
                  {...register("dateOfBirth", {
                    required: "Date of birth is required",
                  })}
                  className={errors.dateOfBirth ? Pro["error"] : ""}
                />
                {errors.dateOfBirth && (
                  <span className={Pro["error-message"]}>
                    {errors.dateOfBirth.message}
                  </span>
                )}
              </div>

              <div className={Pro["form-group"]}>
                <label>Gender</label>
                <select {...register("gender")}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* ✅ New Profile Image Upload Field */}
              <div className={Pro["form-group"]}>
                <label>Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("profileImage", {
                    required: "Profile image is required",
                  })}
                  className={errors.profileImage ? Pro["error"] : ""}
                />
                {errors.profileImage && (
                  <span className={Pro["error-message"]}>
                    {errors.profileImage.message}
                  </span>
                )}
              </div>
            </div>

            <div className={Pro["form-actions"]}>
              <button type="submit" className={Pro["btn-primary"]}>
                <Save size={16} />
                Save Changes
              </button>
              <button
                type="button"
                className={Pro["btn-secondary"]}
                onClick={handleCancel}
              >
                <X size={16} />
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className={Pro["profile-details"]}>
            <div className={Pro["detail-grid"]}>
              <div className={Pro["detail-item"]}>
                <label>Full Name</label>
                <span>{userData.name}</span>
              </div>
              <div className={Pro["detail-item"]}>
                <label>Email</label>
                <span>{userData.email}</span>
              </div>
              <div className={Pro["detail-item"]}>
                <label>Phone</label>
                <span>{userData.phone}</span>
              </div>
              <div className={Pro["detail-item"]}>
                <label>Date of Birth</label>
                <span>
                  {new Date(userData.dateOfBirth).toLocaleDateString()}
                </span>
              </div>
              <div className={Pro["detail-item"]}>
                <label>Gender</label>
                <span>{userData.gender}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
