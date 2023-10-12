export default function SearchBar ({filterText, inStockOnly}) {
    return (
        <form>
            <input 
                type="text" 
                value={filterText}
                placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}