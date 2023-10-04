import Newitem from "./new-item";

export default function Page() {
    return (
      <main>
        <h1 className="text-4xl font-bold m-4 text-center text-purple-500">
          New Item
        </h1>
        <Newitem />
      </main>
    );
}