import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  updateAddress,
  addAddress,
  deleteAddress,
} from "../redux/slices/userSlice";
import {  Plus, Edit3, Trash2, Home, Building } from "lucide-react";
import Pro from "../pages/Profile.module.css";

const AddressManager = () => {
  const addresses = useSelector((state) => state.user.data.addresses);
  const dispatch = useDispatch();
  const [editingAddress, setEditingAddress] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (editingAddress) {
      dispatch(
        updateAddress({
          addressId: editingAddress.addressId,
          updatedAddress: data,
        })
      );
      setEditingAddress(null);
    } else {
      dispatch(addAddress(data));
      setShowAddForm(false);
    }
    reset();
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    reset(address);
  };

  const handleDelete = (addressId) => {
    dispatch(deleteAddress(addressId));
  };

  const getAddressIcon = (type) => {
    return type === "Home" ? <Home size={16} /> : <Building size={16} />;
  };

  return (
    <div className={Pro["profile-section"]}>
      <div className={Pro["section-header"]}>
        <h2>Manage Addresses</h2>
        <button
          className={Pro["btn-primary"]}
          onClick={() => setShowAddForm(true)}
        >
          <Plus size={16} />
          Add New Address
        </button>
      </div>

      <div className={Pro["addresses-grid"]}>
        {addresses.length
          ? addresses.map((address) => (
              <div
                key={address.addressId}
                className={`${Pro["address-card"]} ${
                  address.isDefault ? Pro["default"] : ""
                }`}
              >
                <div className={Pro["address-header"]}>
                  <div className={Pro["address-type"]}>
                    {getAddressIcon(address.type)}
                    <span>{address.type}</span>
                    {address.isDefault && (
                      <span className={Pro["default-badge"]}>Default</span>
                    )}
                  </div>
                  <div className={Pro["address-actions"]}>
                    <button
                      className={Pro["btn-icon"]}
                      onClick={() => handleEdit(address)}
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      className={`${Pro["btn-icon"]} ${Pro["delete"]}`}
                      onClick={() => handleDelete(address.addressId)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className={Pro["address-details"]}>
                  <p>{address.street}</p>
                  <p>
                    {address.city}, {address.state} {address.pincode}
                  </p>
                  <p>{address.country}</p>
                </div>
              </div>
            ))
          : "No Address"}
      </div>

      {(showAddForm || editingAddress) && (
        <div className={Pro["modal-overlay"]}>
          <div className={Pro["modal"]}>
            <div className={Pro["modal-header"]}>
              <h3>{editingAddress ? "Edit Address" : "Add New Address"}</h3>
              <button
                className={Pro["btn-close"]}
                onClick={() => {
                  setShowAddForm(false);
                  setEditingAddress(null);
                  reset();
                }}
              >
                ×
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={Pro["address-form"]}
            >
              <div className={Pro["form-grid"]}>
                <div className={Pro["form-group"]}>
                  <label>Address Type</label>
                  <select
                    {...register("type", { required: "Type is required" })}
                  >
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.type && (
                    <span className={Pro["error-message"]}>
                      {errors.type.message}
                    </span>
                  )}
                </div>

                <div className={`${Pro["form-group"]} ${Pro["full-width"]}`}>
                  <label>Street Address</label>
                  <input
                    {...register("street", {
                      required: "Street address is required",
                    })}
                    className={errors.street ? Pro["error"] : ""}
                  />
                  {errors.street && (
                    <span className={Pro["error-message"]}>
                      {errors.street.message}
                    </span>
                  )}
                </div>

                <div className={Pro["form-group"]}>
                  <label>City</label>
                  <input
                    {...register("city", { required: "City is required" })}
                    className={errors.city ? Pro["error"] : ""}
                  />
                  {errors.city && (
                    <span className={Pro["error-message"]}>
                      {errors.city.message}
                    </span>
                  )}
                </div>

                <div className={Pro["form-group"]}>
                  <label>State</label>
                  <input
                    {...register("state", { required: "State is required" })}
                    className={errors.state ? Pro["error"] : ""}
                  />
                  {errors.state && (
                    <span className={Pro["error-message"]}>
                      {errors.state.message}
                    </span>
                  )}
                </div>

                <div className={Pro["form-group"]}>
                  <label>Pincode</label>
                  <input
                    {...register("pincode", {
                      required: "Pincode is required",
                    })}
                    className={errors.pincode ? Pro["error"] : ""}
                  />
                  {errors.pincode && (
                    <span className={Pro["error-message"]}>
                      {errors.pincode.message}
                    </span>
                  )}
                </div>

                <div className={Pro["form-group"]}>
                  <label>Country</label>
                  <input
                    {...register("country", {
                      required: "Country is required",
                    })}
                    className={errors.country ? Pro["error"] : ""}
                  />
                  {errors.country && (
                    <span className={Pro["error-message"]}>
                      {errors.country.message}
                    </span>
                  )}
                </div>

                <div className={`${Pro["form-group"]} ${Pro["full-width"]}`}>
                  <label className={Pro["checkbox-label"]}>
                    <input type="checkbox" {...register("isDefault")} />
                    Set as default address
                  </label>
                </div>
              </div>

              <div className={Pro["form-actions"]}>
                <button type="submit" className={Pro["btn-primary"]}>
                  {editingAddress ? "Update Address" : "Add Address"}
                </button>
                <button
                  type="button"
                  className={Pro["btn-secondary"]}
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingAddress(null);
                    reset();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressManager;
