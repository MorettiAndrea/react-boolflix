export default function Filters () {return(<form onSubmit={handleFormSubmit}>
          <input
            type="text"
            onChange={handleOnChange}
            value={searchedWords}
          />
          <button className="btn btn-primary ms-1">Cerca</button>
        </form>)}