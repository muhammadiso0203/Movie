import { Button, Form, Input, type FormProps } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { clearSignInData } from "../../../lib/features/SignInSlice";
import { setToken } from "../../../lib/features/auth";
import { api } from "../../../api";

type FieldType = {
  email: string;
  password?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = useMutation({
    mutationFn: (data: any) => api.post("/users/signin", data),
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signIn.mutate(values, {
      onSuccess: (res) => {
        dispatch(clearSignInData());
        dispatch(setToken(res?.data?.access_token));
        navigate("/users/me");
        console.log("ok");
      },
    });
  };

  return (
    <div className="container mx-auto mt-20 flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold text-center dark:text-white">Login</h1>
      <Form
        name="login"
        layout="vertical"
        initialValues={{ email: "", password: "" }}
        onFinish={onFinish}
        autoComplete="off"
        style={{ width: 500 }}
      >
        <Form.Item<FieldType>
          label={<span className="dark:text-white">Email</span>}
          name="email"
          rules={[
            { required: true, message: "Iltimos emailingizni kiriting" },
            { type: "email", message: "Email to`gri emas" },
          ]}
        >
          <Input placeholder="Email kirgizing..." style={{ padding: 10 }} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="dark:text-white">Password</span>}
          name="password"
          rules={[{ required: true, message: "iltimos parol kiriting" }]}
        >
          <Input.Password
            placeholder="Parol kirgizing"
            style={{ padding: 10 }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ padding: 20 }}
            type="primary"
            htmlType="submit"
            block
            className="rounded-lg"
          >
            <h1 className="text-[18px] font-medium">Login</h1>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(Login);
