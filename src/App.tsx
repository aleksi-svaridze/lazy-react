import ShowData from "./components/ShowData";
import Form from "./components/Form";

function App() {
  return (
    <main className="flex flex-col xl:flex-row">
      <section className="w-full xl:w-2/3 bg-red-300  p-10 order-2">
        <h1 className="font-bold text-4xl">Content</h1>
        <ShowData />
      </section>
      <section className="w-full xl:w-1/3 bg-green-300 p-10 order-1">
        <h1 className="font-bold text-4xl">Form</h1>
        <Form />
      </section>
    </main>
  );
}

export default App;
