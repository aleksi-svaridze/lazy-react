import { useMemo, useState, useTransition, type ChangeEvent } from "react";
import type { IPotos } from "./interfaces/potos.interfece";
import potos from "./data/Potos";
import ShowData from "./components/ShowData";
import Form from "./components/Form";

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
    <main className="flex flex-col xl:flex-row h-screen">
      <section className="w-full xl:w-2/3 bg-red-300  p-10 order-2">
        <h1 className="font-bold text-4xl">Content</h1>
        <input
          className="my-8 border outline-none w-full p-4"
          type="text"
          value={searchInputvalue}
          onChange={(e) => handleChange(e)}
        />
        <div>
          {/* {letFilterPotoData.map((poto, id) => (
            <ShowData
              title={poto.title}
              key={id}
              thumbnailUrl={poto.thumbnailUrl}
            />
          ))} */}
        </div>
      </section>
      <section className="w-full xl:w-1/3 bg-green-300 p-10 order-1">
        <h1 className="font-bold text-4xl">Form</h1>
        <Form />
      </section>
    </main>
  );
}

export default App;
