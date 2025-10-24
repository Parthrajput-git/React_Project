import { createSlice } from "@reduxjs/toolkit";

const initialUserData = {
  userId: 1,
  name: "Vineet Suman",
  email: "raghavendra@example.com",
  phone: "00000 0000",
  profileImage:
    "",
  dateOfBirth: "2000-01-01",
  gender: "Male",
  joinedDate: "2023-08-21",
  addresses: [
    // {
    //   addressId: 101,
    //   type: "Home",
    //   street: "123, MG Road",
    //   city: "Hyderabad",
    //   state: "Telangana",
    //   pincode: "500081",
    //   country: "India",
    //   isDefault: true,
    // },
    // {
    //   addressId: 102,
    //   type: "Office",
    //   street: "5th Floor, Tech Park",
    //   city: "Bangalore",
    //   state: "Karnataka",
    //   pincode: "560001",
    //   country: "India",
    //   isDefault: false,
    // },
  ],
  // cart: [
  //   {
  //     productId: 101,
  //     productName: "Dell Inspiron 15",
  //     productImage: "https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg",
  //     quantity: 2,
  //     price: 55000,
  //     productDescription:
  //       "15-inch laptop with Intel i5, 8GB RAM, and 512GB SSD.",
  //     productRating: 4.3,
  //     categoryId: 1,
  //     categoryName: "Dell",
  //   },
  //   {
  //     productId: 201,
  //     productName: "MacBook Air M2",
  //     productImage:
  //       "https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg",
  //     quantity: 1,
  //     price: 110000,
  //     productDescription:
  //       "13.6-inch lightweight laptop with Apple M2 chip and 256GB SSD.",
  //     productRating: 4.9,
  //     categoryId: 2,
  //     categoryName: "Apple",
  //   },
  // ],
  wishlist: [
    {
      productId: 106,
      productName: "Dell Alienware M15 R6",
      productImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg",
      quantity: 1,
      price: 175000,
      productDescription:
        "High-end gaming laptop with RTX 3080 GPU, i9 CPU, and 32GB RAM.",
      productRating: 4.9,
      categoryId: 1,
      categoryName: "Dell",
    },
    {
      productId: 203,
      productName: "MacBook Air M3",
      productImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg",
      quantity: 1,
      price: 125000,
      productDescription:
        "Latest Apple silicon-powered MacBook Air with M3 chip.",
      productRating: 4.7,
      categoryId: 2,
      categoryName: "Apple",
    },
  ],
  orders: [
    {
      orderId: "ORD12345",
      orderDate: "2025-09-01",
      status: "Delivered",
      totalAmount: 115000,
      items: [
        {
          productId: 202,
          productName: "MacBook Pro 16",
          productImage:
            "https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg",
          quantity: 1,
          price: 115000,
        },
      ],
    },
    {
      orderId: "ORD12346",
      orderDate: "2025-09-10",
      status: "Shipped",
      totalAmount: 55000,
      items: [
        {
          productId: 101,
          productName: "Dell Inspiron 15",
          productImage:
            "https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg",
          quantity: 1,
          price: 55000,
        },
      ],
    },
  ],
  // paymentMethods: [
  //   {
  //     paymentId: "PMT101",
  //     type: "Credit Card",
  //     cardHolder: "Raghavendra Kumar",
  //     last4Digits: "4321",
  //     expiry: "08/27",
  //     isDefault: true,
  //   },
  //   {
  //     paymentId: "PMT102",
  //     type: "UPI",
  //     upiId: "raghavendra@upi",
  //     isDefault: false,
  //   },
  // ],
  settings: {
    language: "English",
    currency: "INR",
    darkMode: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: initialUserData,
    loading: false,
    error: null,
  },
  reducers: {
    updateProfile: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    deleteProfile: (state) => {
      state.data = {}
    },
    updateAddress: (state, action) => {
      const { addressId, updatedAddress } = action.payload;
      const addressIndex = state.data.addresses.findIndex(
        (addr) => addr.addressId === addressId
      );
      if (addressIndex !== -1) {
        state.data.addresses[addressIndex] = {
          ...state.data.addresses[addressIndex],
          ...updatedAddress,
        };
      }
    },
    addAddress: (state, action) => {
      const newAddress = {
        ...action.payload,
        addressId: Date.now(),
      };
      state.data.addresses.push(newAddress);
    },
    deleteAddress: (state, action) => {
      state.data.addresses = state.data.addresses.filter(
        (addr) => addr.addressId !== action.payload
      );
    },
    updateSettings: (state, action) => {
      state.data.settings = { ...state.data.settings, ...action.payload };
    },
    // removeFromCart: (state, action) => {
    //   state.data.cart = state.data.cart.filter(
    //     (item) => item.productId !== action.payload
    //   );
    // },
    removeFromWishlist: (state, action) => {
      state.data.wishlist = state.data.wishlist.filter(
        (item) => item.productId !== action.payload
      );
    },
    // updatePaymentMethod: (state, action) => {
    //   const { paymentId, updatedPayment } = action.payload;
    //   const paymentIndex = state.data.paymentMethods.findIndex(
    //     (payment) => payment.paymentId === paymentId
    //   );
    //   if (paymentIndex !== -1) {
    //     state.data.paymentMethods[paymentIndex] = {
    //       ...state.data.paymentMethods[paymentIndex],
    //       ...updatedPayment,
    //     };
    //   }
    // },
  },
});

export const {
  updateProfile,
  deleteProfile,
  updateAddress,
  addAddress,
  deleteAddress,
  updateSettings,
  // removeFromCart,
  removeFromWishlist,
  // updatePaymentMethod,
} = userSlice.actions;

export default userSlice.reducer;
