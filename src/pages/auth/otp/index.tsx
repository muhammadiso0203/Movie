import { useMutation } from "@tanstack/react-query";
import { Input, type GetProps } from "antd";
import { memo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../../../api";

type OTPProps = GetProps<typeof Input.OTP>;

const Otp = () => {
  const [params] = useSearchParams();
  const encode = params.get("e");
  const email = atob(encode || "");
  const navigate = useNavigate();

  const sendOtp = useMutation({
    mutationFn: (data: any) => api.post("/auth/verify-otp", data),
  });

  const onChange: OTPProps["onChange"] = (code) => {
    sendOtp.mutate(
      { code, email },
      {
        onSuccess: () => {
          navigate("/otp");
        },
      }
    );
  };
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className=" flex items-center justify-center flex-col  w-100 h-100">
        <h1 className="mt-20 text-3xl font-bold">Otp</h1>
        <div className="mt-10">
          <Input.OTP
            formatter={(str) => str.toUpperCase()}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Otp);
