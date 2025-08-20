import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/LOGOTYPE – BILETICK.svg";
import { Clapperboard, Heart, Menu, Search } from "lucide-react";
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
          
    <header className="header_container mx-auto gap-80 flex items-center p-2 justify-center max-[1230px]:gap-70 max-[1160px]:gap-60 max-[900px]:gap-[30px] max-[900px]:p-4 max-[640px]:gap-[20px] max-lg:gap-150 max-md:gap-120 max-sm:gap-60 ">
      <NavLink to={"/"}>
        <img src={logo} alt=""  className="min-w-[100px] max-[900px]:min-w-[80px] "/>
      </NavLink>
      <div className="flex gap-15 max-lg:hidden">
        <NavLink to={"/movie"} className="flex items-center flex-col">
          <Clapperboard className="w-8 h-8 max-[900px]:min-w-[40px]" />
          Movie
        </NavLink>
        <NavLink to={"/search"} className="flex items-center flex-col">
          <Search className="w-8 h-8"/>
          Movie
        </NavLink>
        <NavLink to={"/favorite"} className="flex items-center flex-col">
          <Heart className="w-8 h-8"/>
          Favorite
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
          className="w-[180px] h-[56px] bg-[#C61F1F] border p-2 text-white rounded-xl cursor-pointer max-lg:w-[100px] max-lg:h-[40px] max-lg:hidden"
        >
          Войти
        </button>

        <Menu className="min-lg:hidden"/>
      </div>
    </header>
  );
};

export default memo(Header);
