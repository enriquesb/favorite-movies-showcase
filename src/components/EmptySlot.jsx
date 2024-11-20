
export function EmptySlot({ setShowSearch }) {

    function handleClickButton() {
        setShowSearch(true)
    }

    return (
        <div className='empty-slot'>
            <h3> EMPTY SLOT</h3>
            <button onClick={handleClickButton}>Add movie</button>
        </div>
    )
}