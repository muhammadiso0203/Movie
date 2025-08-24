import { useQuery } from "@tanstack/react-query";
import { memo, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../lib/features/auth";
import { api } from "../../../api";

const defaultImage =
  "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";

const Profile = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);

    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFiles((prev) => [...prev, selectedFile]);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const { isError } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.get("/users/me"),
    retry: 0,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(removeToken());
    }
  }, [isError]);
  return (
    <div className="container mx-auto">
      <div className="flex gap-3">
        {previews.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`preview-${index}`}
            className="w-30 h-30 object-cover rounded "
          />
        ))}

        <label className="cursor-pointer">
          <img
            src={defaultImage}
            alt="add new"
            className="w-30 h-30 object-cover rounded  opacity-70 hover:opacity-100"
          />
          <input
            ref={inputRef}
            onChange={handleFileChange}
            type="file"
            accept="image/*"
            hidden
          />
        </label>
      </div>
    </div>
  );
};

export default memo(Profile);
