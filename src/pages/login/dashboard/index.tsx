import Layout from "@/components/layout";
import { userInfo } from "@/components/services";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { loginInfo } from "@/lib/atoms";
const Dashboard = () => {
  const [person, setPerson] = useAtom(loginInfo);

  useEffect(() => {
    const userDetail = async () => {
      try {
        console.log(localStorage.getItem("name"));
        const loginInfo = localStorage.getItem("authtoken");
        const { status, data } = await userInfo(loginInfo);
        localStorage.setItem("user", data.name);
        console.log(localStorage.getItem("user"));
        console.log(data);
        setPerson({...person, user: data.name, menuTitle:data.name});
      } catch {}
    };
    userDetail();
  }, []);

  return (
    <Layout>
      <div>welcome {person.user}</div>
    </Layout>
  );
};

export default Dashboard;
