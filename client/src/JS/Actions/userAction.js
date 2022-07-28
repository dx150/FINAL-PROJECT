import {
  FAIL,
  GET_CURRENT,
  LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../actionTypes";
import axios from "axios";
import { setAlert } from "./alertActions";

//Register Candidat
export const register = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authUser/register", newUser);

    dispatch({ type: REGISTER, payload: res.data });

    navigate("/ProfilCand");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
    error.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg))
    );
  }
};
//Login candidat
export const login = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/authUser/login", user);
    dispatch({ type: LOGIN, payload: res.data });

    navigate("/");
  } catch (error) {
    dispatch({ type: FAIL });
    error.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg))
    );
  }
};
//get_current
export const getCurrent = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/authUser/current", config);
    console.log(res.data);

    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL });
  }
};
//logout
export const logout = () => ({ type: LOGOUT });

//Edit Profil
export const editProfilUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put("/api/accountUser/updateAccountCand", user, config);

    dispatch(getCurrent());
  } catch (error) {
    dispatch({ type: FAIL });
  }
};

//Edit Password User
export const editPasswordUser = (updatedPass) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.put("/api/accountUser/updatePasswordCand", updatedPass, config);
    dispatch(getCurrent());
  } catch (error) {
    dispatch({ type: FAIL });
    error.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg))
    );
  }
};
//Delete Account User
export const deleteAccountUser = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete("/api/accountUser/deleteAccountCand", config);
    dispatch(logout());
  } catch (error) {
    dispatch({ type: FAIL });
  }
};

//Post For Job
export const PostulerJob = (id, data) => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post(
      `/api/accountUser/postuler/${id}`,
      data,
      config
    );
    console.log(res.data);
  } catch (error) {
    dispatch({ type: FAIL });
  }
};
