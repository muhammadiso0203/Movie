import { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetail } from "../../services/useMovieDetail";
import { IMAGE_URL } from "../../../../shared/const";

const ImageDetail = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovieDetail();

  const [more, setMore] = useState(false);

  const { data: creditsData } = getMovieItems(id || "", "credits");

  const navigate = useNavigate()


  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Cast</h2>

      <div
        className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        xl:grid-cols-6 justify-items-center"
      >
        {creditsData?.cast
          ?.slice(0, more ? creditsData?.cast.length : 9)
          .map((user: any) => {
            const image = user.profile_path
              ? IMAGE_URL + user.profile_path
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";
            return (
              <div
                key={user.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden w-[160px] text-center p-3 hover:shadow-lg transition"
              >
                <img
                onClick={() => navigate(`/person/${user.id}`)}
                  loading="lazy"
                  src={image}
                  alt={user.name}
                  className="w-full h-[200px] object-cover rounded-xl mb-3"
                />
                <h3 className="text-sm font-semibold">{user.name}</h3>
                <p className="text-xs text-gray-500">{user.character}</p>
              </div>
            );
          })}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setMore((prev) => !prev)}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          {more ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default memo(ImageDetail);
