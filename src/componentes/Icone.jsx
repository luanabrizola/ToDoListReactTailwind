import Item from "./Item";

function Icone() {
    return (
        <div className="flex flex-col gap-3">
            <p>
                Tarefa 1
            </p>
            <button><IconTrash className="text-cinza-300 hover:text-danger" /></button>
            
        </div>
    )
}

export default Icone;