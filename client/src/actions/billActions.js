import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";


axios.defaults.baseURL = 'http://localhost:5000';
export const submitBill = (billData) => dispatch => {
    axios
      .post("/api/billData/submitbill", billData)
      .then((response)=> {
        console.log(response);
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };