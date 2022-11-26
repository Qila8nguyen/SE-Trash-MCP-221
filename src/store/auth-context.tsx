import axios, { Axios } from "axios";
import router from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

type UserInfo = {
  username: string;
  role: "back-officer" | "janitor" | "collector";
  id: string;
};
const AuthContext = createContext({
  user: {
    username: "nghi",
    id: "nghindp",
    role: "back-officer",
  },
  loading: false,
  isAuthenticated: false,
  login: async (username: string, password: string) => {},
  logout: async () => {},
});

export const getUser = async (ctx) => {
  // console.log("----- COOKIES ", ctx);
  return await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/token`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const AuthProvider = (props) => {
  const [user, setUser] = useState<UserInfo>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [logoutState, setLogoutState] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const val = JSON.parse(window.localStorage.getItem("User-Data"));
    if (!val) {
      router.push("/");
    }

    if (val) {
      setUser(val);
      setLogoutState(false);
    } else {
      setLogoutState(true);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem("User-Data", JSON.stringify(user));
    } else {
      const val = JSON.parse(window.localStorage.getItem("User-Data"));
      if (val) {
        setUser(val);
        setLogoutState(false);
      }
    }
  }, [user]);

  useEffect(() => {
    console.log("LOGOUT STATE", logoutState);
    if (logoutState) {
      window.localStorage.clear();
      setUser(null);
    }
  }, [logoutState]);

  const login = async (username: string, password: string) => {
    setLoading(true);
    return await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/login`,
      data: { username, password },
      withCredentials: true,
    })
      .then((res) => {
        router.push("/");
        setUser(res.data);
        setLogoutState(false);
        setLoading(false);
        return res.data;
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        console.error("Incorrect username or password entered.");
        return error;
      });
  };
  const logout = async () => {
    setLoading(true);
    return await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {})
      .then((res) => {
        router.push("/");
        console.log("user logged out", res.data);
        setUser(null);
        setLogoutState(true);
        setLoading(false);
        return res.data;
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false);
        return error;
      });
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, loading, logout, login }}
      {...props}
    />
  );
};
export const useAuth = () => useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
