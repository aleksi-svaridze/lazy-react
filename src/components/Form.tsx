import { useId, useState, type JSX } from "react";

function Form(): JSX.Element {
  const id = useId();
  const [printEmail, setPrintEmail] = useState<string>("");
  const [emailValue, setEmailValue] = useState("");

  const handleOutput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPrintEmail(emailValue);
  };
  return (
    <form className="my-8" onSubmit={handleOutput}>
      <label htmlFor={id}>Email</label>
      <div className="flex items-center mt-4 gap-x-2">
        <input
          type="email"
          id={id}
          name="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          className="border rounded"
          required
        />
        <button type="submit" className="border px-2 rounded">
          Submit
        </button>
      </div>
      <ul>
        <li>
          <span className="font-bold">ID:</span> {id}
        </li>
        <li>
          <span className="font-bold">Email: </span>
          {printEmail}
        </li>
      </ul>
    </form>
  );
}

export default Form;
