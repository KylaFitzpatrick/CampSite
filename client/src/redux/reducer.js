//@ts-check
/**@module */
import * as actions from './actions';
import { cloneDeep } from 'lodash';

/**@name initialState */
const initialState = {
    username: sessionStorage.getItem("name"),
    email: sessionStorage.getItem("email"),
    token: sessionStorage.getItem("token"),
    loggedIn: sessionStorage.getItem("loggedIn"),
    favoritesCount: sessionStorage.getItem("favoritesCount"),
    isOpenNavbar: false,
    isOpenExtraModal: false,
    isOpenLoginModal: false,
    isOpenRegisterModal: false,
    campGrounds: []
}

/**@function */
export const todoReducer = (state = initialState, action) => {
    const newState = cloneDeep(state);
    switch (action.type) {

        case actions.LOGIN_USER:
            newState.username = action.user.username;
            newState.email = action.user.email;
            newState.token = action.user.token;
            newState.loggedIn = "true";
            sessionStorage.setItem("token", newState.token);
            sessionStorage.setItem("email", newState.email);
            sessionStorage.setItem("name", newState.username);
            sessionStorage.setItem("loggedIn", newState.loggedIn);
            sessionStorage.setItem("favoritesCount", newState.favoritesCount);
            newState.errorMessage = null;
            console.log("LOGIN_USER: ", newState.username);
            return newState;

        case actions.REGISTER_USER:
            newState.username = "Registered...OK";
            newState.email = "";
            newState.loggedIn = "true";
            console.log("REGISTER_USER: ", newState.username);
            return newState;

        case actions.LOGIN_ERROR:
            newState.username = "wrong email or pswd";
            newState.email = "";
            newState.token = "";
            newState.loggedIn = "false";
            newState.errorMessage = action.message;
            console.log("LOGIN_ERROR: ", newState.errorMessage);
            return newState;

        case actions.LOGOUT_USER:
            newState.username = "Guest...Login";
            newState.email = "";
            newState.token = "";
            newState.loggedIn = "false";
            newState.favoritesCount = "0";
            sessionStorage.setItem("name", newState.username);
            sessionStorage.setItem("email", newState.email);
            sessionStorage.setItem("token", newState.token);
            sessionStorage.setItem("loggedIn", "false");
            sessionStorage.setItem("favoritesCount", newState.favoritesCount);
            console.log("LOGOUT_USER: ", newState.username);
            return newState;

        case actions.TOGGLE_NAVBAR:
            newState.isOpenNavbar = !state.isOpenNavbar;
            // console.log("new TOGGLE_NAVBAR state.isOpenNavbar: ", newState.isOpenNavbar)
            return newState;

        case actions.TOGGLE_EXTRAMODAL:
            newState.isOpenExtraModal = !state.isOpenExtraModal;
            // console.log("new TOGGLE_EXTRAMODAL state.isOpenExtraModal: ", newState.isOpenExtraModal);
            return newState;

        case actions.TOGGLE_LOGINMODAL:
            newState.isOpenLoginModal = !state.isOpenLoginModal;
            // console.log("new TOGGLE_LOGINMODAL state.isOpenLoginModal: ", newState.isOpenLoginModal);
            return newState;

        case actions.TOGGLE_REGISTERMODAL:
            newState.isOpenRegisterModal = !state.isOpenRegisterModal;
            // console.log("new TOGGLE_REGISTERMODAL state.isOpenRegisterModal: ", newState.isOpenRegisterModal);
            return newState;

        case actions.SAVES_CAMPGROUNDS:
            newState.campGrounds = action.campGrounds;
            return newState;

        case actions.UPDATE_FAVORITESCOUNT:
            newState.favoritesCount = action.favoritesCount;
            sessionStorage.setItem("favoritesCount", newState.favoritesCount);
            return newState;

        case actions.SET_ZIPCODE:
            newState.currentLocationZipCode = action.zipCode;
            return newState;

        default:
            return state;
    }
} 