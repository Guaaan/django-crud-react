import { useNavigate } from "react-router-dom";

export function ItemCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/items/${item.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {item.title}
      </h1>
      <p className="text-slate-400">{item.description}</p>
    </div>
  );
}
