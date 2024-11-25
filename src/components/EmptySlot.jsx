
export function EmptySlot({ setShowSearch }) {
    return (
        <div className='empty-slot'>
            <h3> EMPTY SLOT</h3>
            <button onClick={() => setShowSearch(true)}>Add movie</button>
        </div>
    )
}