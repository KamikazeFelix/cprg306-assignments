import ItemList from "./item-list";

export default function Page() {
    return (
      <main>
        <h1 className="text-4xl font-bold m-4 text-center text-purple-500">
          Felix's ItemList
        </h1>
        <ItemList />
        
      </main>
    );
}