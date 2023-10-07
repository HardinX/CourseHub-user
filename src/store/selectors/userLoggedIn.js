import { selector } from "recoil";
import { userState } from "../atoms/user";

export const userLoggedInState = selector({
  key: "userLoggedInState",
  get: ({ get }) => {
    const state = get(userState);
    
    return state.isLoading;
  },
});
