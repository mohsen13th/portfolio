import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/layout";
import { useAtom } from "jotai";
import { loginInfo } from "@/utils/lib/atoms";
import { login } from "@/utils/api/services";

const SignIn = () => {
  const [member, setMember] = useState<any>();
  const router = useRouter();
  const [loginin, setLoginin] = useAtom(loginInfo);
  const handleChange = (events: any) => {
    setMember({
      ...member,
      [events.target.name]: events.target.value,
    });
    // console.log(member);
  };
  const loginMember = async (event: any) => {
    event.preventDefault();
    try {
      if (member != undefined) {
        let frmData = new FormData();
        frmData.set("grant_type", "password");
        frmData.set("username", member.username);
        frmData.set("password", member.password);
        const { status, data } = await login(frmData);
        setMember({});
        localStorage.setItem("authtoken", data.access_token);
      }
      setLoginin({
        ...loginin,
        menuAddress:"/login/dashboard"
      })
      router.push("/login/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="md:m-10 shadow-2xl">
        <div className="grid-cols-2 md:grid">
          <div className="bg-[url('/bg.jpg')]  bg-cover bg-center"></div>
          <div className="flex flex-col items-center justify-center h-screen">
            <form className="shadow-lg w-80" onSubmit={loginMember}>
              <div className="my-3 text-xl font-medium text-center">Login</div>
              <div className="p-5 pt-3">
                <input
                  type="text"
                  name="username"
                  placeholder="User Name"
                  className="w-full p-3 my-3 border outline-0 placeholder:text-black"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-3 my-3 border outline-0 placeholder:text-black"
                  onChange={(e) => handleChange(e)}
                />
                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="person"
                    id="person"
                    className="mr-2"
                  />
                  Remember me
                </div>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-xl font-medium text-center text-white bg-blue-600"
              >
                Login
              </button>
            </form>
            <div>
              <Link
                href="../../login/Signup"
                className="inline-block mt-2 text-blue-500 underline"
              >
                New? signup
              </Link>
            </div>
            <div>
              <Link href="#" className="text-blue-500 underline">
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
