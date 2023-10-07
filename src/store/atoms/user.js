import { atom } from "recoil";

export const purchasedCoursesState =  atom({
  key: "coursesState",
  default: [],
});

export const openState = atom({
  key: "openState",
  default: false,
});

export const userState = atom({
  key: "userState",
  default: {
    isLoading: true,
    userEmail: null
  },
});
