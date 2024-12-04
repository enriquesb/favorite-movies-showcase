
export function EmptySlot({ setShowSearch }) {
    return (
        <div className='empty-slot'>
            <button onClick={() => setShowSearch(true)}>Add movie</button>
        </div>
    )
}