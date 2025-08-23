import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePerson } from "../../services/usePerson";
import { IMAGE_URL } from "../../../../shared/const";

const PersonDetail = () => {
  const { id } = useParams();
  const { getPersonById } = usePerson();
  const { data } = getPersonById(id || "");
  const navigate = useNavigate()

  return (
    <div className="container mx-auto mt-10">
      <div className="grid md:grid-cols-2">
        <div>
          <img
            src={IMAGE_URL + data?.profile_path}
            style={{ width: 400 }}
            alt=""
          />
        </div>
        <div className="dark:text-white">
          <h1 className="text-3xl">{data?.name}</h1>
          <strong>{data?.birthday}</strong>
          <p>{data?.biography}</p>
          <div className="bg-blue-500 w-30 p-2 flex items-center justify-center rounded-[10px] text-white cursor-pointer mt-10 ">
            <button onClick={() => navigate(-1)} className="cursor-pointer">Go back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PersonDetail);
