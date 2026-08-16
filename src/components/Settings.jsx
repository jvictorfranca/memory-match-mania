const Settings = ({onGridChange}) => {
    return (
        <div className = "mb-4 text-center">
            <label htmlFor="grid-size" className="mr-2 font-semibold">Grid Size</label>
            <select id="grid-size" className="p-2 border rounded"
                onChange={(e) => onGridChange(parseInt(e.target.value))}
            >
                <option value={4}>4x4</option>
                <option value={6}>6x6</option>
                <option value={8}>8x8</option>
            </select>
        </div>
    )
}

export default Settings