import { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "@/components/hooks/useAuthCheck.jsx";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "@/context/UserDetailContext.js";
import { toFev } from "@/utils/api.js";
import { updateFavourites } from "@/utils/common.js";

const Heart = ({ id }) => {
  const [heartColor, setHeartColor] = useState("white");
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { favourites, token },
    setUserDetails,
  } = useContext(UserDetailContext);

  // Initialize heartColor based on favourites
  useEffect(() => {
    if (favourites?.includes(id)) {
      setHeartColor("#fa3ef5"); // Red if already in favourites
    } else {
      setHeartColor("white"); // White if not in favourites
    }
  }, [favourites, id]);

  const { mutate } = useMutation({
    mutationFn: () => toFev(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favourites: updateFavourites(id, prev.favourites),
      }));
    },
  });

  const handleLike = () => {
    if (validateLogin()) {
      mutate();
    }
  };

  return (
    <AiFillHeart
      size={24}
      color={heartColor}
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    />
  );
};

export default Heart;
