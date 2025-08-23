import { memo } from "react";
import { NavLink } from "react-router-dom";
import footlogo from "../../shared/assets/LOGOTYPE.svg";
import playmarket from "../../shared/assets/image 7.svg";
import appstore from "../../shared/assets/image 8.svg";
import file from "../../shared/assets/file-list-2-line.svg";
import reklama from "../../shared/assets/shining-line.svg";
import savol from "../../shared/assets/question-line.svg";
import kontakt from "../../shared/assets/phone-line.svg";
import movie from "../../shared/assets/movie-line.svg";
import teatr from "../../shared/assets/clapperboard-line.svg";
import konsert from "../../shared/assets/movie-2-line.svg";
import sport from "../../shared/assets/basketball-line.svg";
import insta from "../../shared/assets/Vector (3).svg";
import facebook from "../../shared/assets/facebook-circle-line.svg";
import youtube from "../../shared/assets/youtube-line.svg";

const Footer = () => {
  return (
    <footer className="footer_container mx-auto mb-10 rounded-xl mt-[118px]">
      <div className="flex max-md:flex max-md:flex-col  max-md:items-start  max-md:pb-10">
        <div className="flex flex-col gap-12 ml-[30px] pt-[30px]">
          <div>
            <img src={footlogo} alt="logo" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={playmarket} alt="playmarket" />
            <img src={appstore} alt="appstore" />
          </div>
        </div>

        <div className="mt-[23px] ml-[120px] text-black max-md:ml-[30px] max-lg:ml-[90px]">
          <ul className="flex flex-col gap-[18px]">
            <li className="font-semibold dark:text-white">О нас</li>
            <li>
              <NavLink to="#" className="flex gap-2 items-center dark:text-white">
                <img src={file} alt="" />
                Публичная оферта
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="flex gap-2 items-center dark:text-white">
                <img src={reklama} alt="" />
                Реклама
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="flex gap-2 items-center dark:text-white">
                <img src={savol} alt="" />
                F.A.Q
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="flex gap-2 items-center dark:text-white">
                <img src={kontakt} alt="" />
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mt-[23px] ml-[120px] text-black max-md:ml-[30px] max-lg:ml-[90px]">
          <ul className="flex flex-col gap-[18px]">
            <li className="font-semibold">Категории</li>
            <li>
              <NavLink to="#" className="flex items-center gap-2 dark:text-white">
                <img src={movie} alt="" />
                Кино
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="flex items-center gap-2 dark:text-white">
                <img src={teatr} alt="" />
                Театр
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="flex items-center gap-2 dark:text-white">
                <img src={konsert} alt="" />
                Концерты
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="flex items-center gap-2 dark:text-white">
                <img src={sport} alt="" />
                Спорт
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mt-[23px] ml-[120px] text-black max-md:ml-[30px] max-lg:ml-[90px]">
          <ul className="flex flex-col dark:text-white">
            <li className="font-semibold">Связаться с нами</li>
            <li className="text-[#C61F1F] text-[20px] mt-5">
              <a href="tel:+998958973338">+998 (95) 897-33-38</a>
            </li>
            <li className="mt-[54px] font-semibold">Социальные сети</li>
          </ul>
          <div className="flex gap-5 mt-4 ">
            <NavLink to={"https://www.instagram.com/muhammadiso7878"}>
              <img src={insta} alt="instagram" />
            </NavLink>
            <NavLink to={"#"}>
              <img src={facebook} alt="facebook" />
            </NavLink>
            <NavLink to={"#"}>
              <img src={youtube} alt="youtube" />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
