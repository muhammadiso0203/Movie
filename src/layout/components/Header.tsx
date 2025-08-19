import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/LOGOTYPE – BILETICK.svg";
import { Clapperboard } from "lucide-react";
import { Button, Input, Modal } from "antd";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="header_container mx-auto flex justify-between items-center p-2">
      <NavLink to={"/"}>
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <NavLink to={"/movie"} className="flex items-center flex-col">
          <Clapperboard className="w-10 h-10" />
          Movie
        </NavLink>
      </div>
      <div>
        <Modal
          centered
          title={<div className="text-center text-2xl">Registratsiya</div>}
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <label htmlFor="" className="font-bold w-[70px]">
            Ismingizni kiriting:
          </label>
          <Input style={{ height: 40 }} placeholder="Name" />
          <br />
          <br />
          <label htmlFor="" className="font-bold">
            Nomeringizni kiriting:
          </label>
          <Input style={{ height: 40 }} placeholder="Phone number" />
          <br /><br />
          <div>

          </div>
          <Button type="primary" className="w-full" style={{height: 40}}>Submit</Button>
        </Modal>
        <button
          onClick={() => showModal()}
          className="w-[180px] h-[56px] bg-[#C61F1F] border p-2 text-white rounded-xl cursor-pointer"
        >
          Войти
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
