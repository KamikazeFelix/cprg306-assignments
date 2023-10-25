export default function Item(props) {

    return (
        <div className="border border-black w-96 m-4 p-2 bg-gradient-to-r from-blue-200 to-purple-200 container mx-auto mt-8 "
             onClick={() => props.onSelect(props.name, props.quantity, props.category)}
        >
            <h2 className="flex flex-col items-center text-xl font-bold">Item Name: {props.name}</h2>
            <p className="flex flex-col items-center">Item Quantity: {props.quantity}</p>
            <p className="flex flex-col items-center">Category: {props.category}</p>
            <p className="text-red-500 flex flex-col items-center">
                <a href="https://www.costco.ca/" className="underline">Buy {props.quantity} in {props.category}</a>
            </p>
        </div>
     );
    }