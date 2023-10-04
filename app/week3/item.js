

export default function Item(props) {
    const { name, quantity, category } = props;

    return (
        <div className="border border-black w-96 m-4 p-2 bg-gradient-to-r from-blue-200 to-purple-200 container mx-auto mt-8 ">
            <h2 className="flex flex-col items-center text-xl font-bold">Item Name: {name}</h2>
            <p className="flex flex-col items-center">Item Quantity: {quantity}</p>
            <p className="flex flex-col items-center">Category: {category}</p>
            <p className="text-red-500 flex flex-col items-center">
                <a href="https://www.costco.ca/" className="underline">Buy {quantity} in {category}</a>
            </p>
        </div>
     );
    }