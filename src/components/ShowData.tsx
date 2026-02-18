import { useDeferredValue, useMemo, useState } from "react";
import potos from "../data/Potos";

function ShowData() {
  const [value, setValue] = useState("");

  // 1. Keep the input value "live" and snappy
  const deferredValue = useDeferredValue(value);

  // 2. Use the DEFERRED value for the expensive filtering logic
  const filteredPotos = useMemo(() => {
    console.log("Filtering data...");
    return potos.filter(({ title }) =>
      title.toLowerCase().includes(deferredValue.toLowerCase()),
    );
  }, [deferredValue]); // Dependency is now the deferred version

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 3. Update state normally (not in a transition)
    setValue(e.target.value);
  };

  return (
    <>
      {/* 4. useDeferredValue doesn't have an isPending, but you can check if they differ */}
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
