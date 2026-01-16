import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./userSlice";

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};
