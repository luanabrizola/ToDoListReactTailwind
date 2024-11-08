import Icone from './Icone'

function Item() {
    return (
        <div className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400">
            <div className="flex">
                <label htmlFor="checkbox" className="flex items-center gap-3 p-1">
                    <input type="checkbox" className="hidden" />
                    <span
                        className="
                      rounded-full w-4 h-4 flex items-center justify-center 
                      border-2 border-blue-500 hover:border-blue-300"
                   >
                    </span>
                    {/* <Icone /> */}
                </label>
            </div>
        </div>
    )
}

export default Item;