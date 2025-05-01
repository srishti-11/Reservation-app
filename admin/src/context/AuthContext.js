// // import { createContext, useEffect, useReducer } from "react";

// // const INITIAL_STATE = {
// //   user: JSON.parse(localStorage.getItem("user")) || null,
// //   loading: false,
// //   error: null,
// // };

// // export const AuthContext = createContext(INITIAL_STATE);

// // const AuthReducer = (state, action) => {
// //   switch (action.type) {
// //     case "LOGIN_START":
// //       return {
// //         user: null,
// //         loading: true,
// //         error: null,
// //       };
// //     case "LOGIN_SUCCESS":
// //       return {
// //         user: action.payload,
// //         loading: false,
// //         error: null,
// //       };
// //     case "LOGIN_FAILURE":
// //       return {
// //         user: null,
// //         loading: false,
// //         error: action.payload,
// //       };
// //     case "LOGOUT":
// //       return {
// //         user: null,
// //         loading: false,
// //         error: null,
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export const AuthContextProvider = ({ children }) => {
// //   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

// //   useEffect(() => {
// //     localStorage.setItem("user", JSON.stringify(state.user));
// //   }, [state.user]);

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         user: state.user,
// //         loading: state.loading,
// //         error: state.error,
// //         dispatch,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };
// import { createContext } from "react";

// export const AuthContext = createContext();

// const demoUser = {
//   id: "123456",
//   username: "admin",
//   isAdmin: true,
// };

// export const AuthContextProvider = ({ children }) => {
//   return (
//     <AuthContext.Provider
//       value={{
//         user: demoUser,
//         loading: false,
//         error: null,
//         dispatch: () => {}, // no-op since login/logout not used
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
// context/AuthContext.js
import { createContext, useReducer } from "react";

// Mock admin user to skip login
const INITIAL_STATE = {
  user: {
    _id: "1234567890",
    username: "admin",
    isAdmin: true,
  },
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Skip storing to localStorage
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.user));
  // }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

