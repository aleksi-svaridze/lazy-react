import { useMemo, useState, useTransition, type ChangeEvent } from "react";
import type { IPotos } from "./interfaces/potos.interfece";
import potos from "./data/Potos";

function App() {
  const [isPending, startTransition] = useTransition();
  const [potoData, setPotoData] = useState<IPotos[]>(potos);
  const [transitionedValue, setTransitionedValue] = useState("");
  const [searchInputvalue, setSearchInputvalue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputvalue(e.target.value);
    startTransition(() => {
      setTransitionedValue(e.target.value);
    });
  };

  const letFilterPotoData = useMemo(() => {
    console.log("RENDER");
    return potos.filter((poto) => poto.title.includes(searchInputvalue));
  }, [searchInputvalue]);

  return (
    <main className="flex px-10 gap-x-10">
      <section className="w-2/3">
        <h1 className="font-bold text-4xl">Content</h1>
        <input
          className="my-8 border outline-none w-full p-4"
          type="text"
          value={searchInputvalue}
          onChange={(e) => handleChange(e)}
        />
        <div>
          {letFilterPotoData.map((item) => (
            <div className="border-b mb-4 flex" key={item.id}>
              <img src={item.thumbnailUrl} className="w-28 h-28" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-1/3">
        <h1 className="font-bold text-4xl mb-10">Form</h1>
      </section>
    </main>
  );
}

export default App;
