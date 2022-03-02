import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <p>UrlParameter</p>
      <p>{id}</p>
    </div>
  );
};
