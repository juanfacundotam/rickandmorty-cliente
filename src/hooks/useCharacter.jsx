import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../redux/actions";

const useCharacter = () => {
  const dispatch = useDispatch();
  const { detailId } = useParams();
  const character = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(detailId));
    return () => {
      dispatch(cleanDetail());
    };
  }, [detailId]);

  return character;
};

export default useCharacter;
