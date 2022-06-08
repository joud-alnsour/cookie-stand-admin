function Main(props) {
    return (
      <div className="bg-[#87b992] w-3/4 text-center rounded-lg">
          <form onSubmit={props.formHandle}>  
        <div>
          <h1 className="text-black">Create Cookie Stand</h1>
        </div>
        <div>
            <label className="text-white justify-content">Location<input type="text" placeholder="=Location" name="location" required className="w-3/4 m-3 text-center text-black"/></label>
        </div>     
        <div className="flex m-3 text-center justify-evenly ">
          <label className="flex-col text-black">Minimum Customers Per Hour <input type="number" placeholder="" name="minimum_customers_per_hour" defaultValue="0" className="w-3/4 mx-4 text-center text-black" /></label>
          <label className="flex-col text-black">Maximum Customers Per Hour <input type="number" placeholder="" name="maximum_customers_per_hour" defaultValue="0" className="w-3/4 mx-4 text-center text-black"/></label>
          <label className="flex-col text-black">Average Cookies Per Hour <input type="number" placeholder="" name="average_cookies_per_sale" defaultValue="0" className="w-3/4 mx-4 text-center text-black"/></label>
          <button type="submit" className="bg-[#ecdfef]  text-black p-5 rounded-lg">Create</button>
        </div>
          </form>  
      </div>
    )
  }
  export default Main