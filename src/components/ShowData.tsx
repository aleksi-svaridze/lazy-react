import { useDeferredValue, useMemo, useState } from "react";
import potos from "../data/Potos";

function ShowData() {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);

  const filteredPotos = useMemo(() => {
    console.log("Filtering data...");
    return potos.filter(({ title }) =>
      title.toLowerCase().includes(deferredValue.toLowerCase()),
    );
  }, [deferredValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      {value !== deferredValue && <h1>Updating list...</h1>}

      <input
        className="my-8 border outline-none w-full p-4"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <div>
        {filteredPotos.map(({ title, thumbnailUrl, id }) => (
          <div className="border-b mb-4 flex" key={id}>
            <img src={thumbnailUrl} className="w-28 h-28" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowData;
