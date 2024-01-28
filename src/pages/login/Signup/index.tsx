import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Layout from "@/components/layout";

import { register } from "@/components/services";

const SignUp = () => {
  const [addMember, setAddMember] = useState<any>();
    let [repass, setRepass] = useState<string>();

  const handleChange = (events: any) => {
    setAddMember({
          ...addMember,
          [events.target.name]: events.target.value,
        });
        console.log(addMember);
  };

  const regMember = async (event: any) => {
    event.preventDefault();
    console.log();
    try {
      console.log();
      if (addMember != undefined) {
        let json = JSON.stringify(addMember);
        const { status, data } = await register(json);
        setAddMember({});
        console.log(addMember);
        console.log(json);
      }
      console.log("nice");
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
            <form className="shadow-lg w-80" onSubmit={regMember}>
              <div className="my-3 text-xl font-medium text-center">
                Sign Up
              </div>
              <div className="p-5 pt-3">
                <input
                  type="text"
                  name="name"
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
                <input
                  type="password"
                  name="repassword"
                  id="repassword"
                  placeholder="Confirm Password"
                  className="w-full p-3 my-3 border outline-0 placeholder:text-black"
                  onChange={(e) => setRepass(e.target.value)}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 my-3 border outline-0 placeholder:text-black"
                  onChange={(e) => handleChange(e)}
                />
                <div className="mb-3">
                  <input
                    type="checkbox"
                    name="Terms"
                    id="Terms"
                    className="mr-2"
                  />
                  I accept the{" "}
                  <Link href="#" className="text-blue-700">
                    Terms and Conditions
                  </Link>
                </div>
              </div>
              <button type="submit"
                className="w-full p-3 text-xl font-medium text-center text-white bg-blue-600"
              >
                Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
