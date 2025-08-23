import { Button, Form, Input, type FormProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useUser } from "../../../api/hooks";
import { setSignInData } from "../../../lib/features/SignInSlice";

type FieldType = {
  name?: string;
  email: string;
  password: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  const navigate = useNavigate();
  const { register } = useUser();
  const dispatch = useDispatch();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    register.mutate(values, {
      onSuccess: () => {
        console.log("Success:", values);
        dispatch(
          setSignInData({ email: values.email, password: values.password })
        );
        const encode = btoa(values.email);
        navigate(`/otp?e=${encode}`);
      },
    });
  };
  return (
    <div className="container mx-auto mt-20 flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold text-center dark:text-white">
        Register
      </h1>
      <Form
        name="basic"
        layout="vertical"
        style={{ width: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={<span className="dark:text-white">Name</span>}
          name="name"
          rules={[
            { required: true, message: "Iltimos ismingizni kiriting" },
            { type: "string" },
          ]}
        >
          <Input placeholder="Ismingizni kiriting..." style={{ padding: 10 }} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="dark:text-white">Email</span>}
          name="email"
          rules={[
            { required: true, message: "Iltimos emailingizni kiriting" },
            { type: "email", message:"Email to`g`ri emas" },
          ]}
        >
          <Input placeholder="Emailingizni kiriting..." style={{ padding: 10 }} />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="dark:text-white">Password</span>}
          name="password"
          rules={[{ required: true, message: "Iltimos parolingizni kiriting" }, 
            {type:"string", message: "To`g`ri parol kiriting"}
          ]}
        >
          <Input.Password placeholder="Parolingizni kiriting..." style={{padding:10}}/>
        </Form.Item>

        <Form.Item label={null}>
          <Button className="w-full" loading={register.isPending} type="primary" htmlType="submit" style={{padding:20}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(Register);
