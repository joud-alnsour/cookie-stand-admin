function Main(props) {
    return (
      <div className="mx-auto my-8 bg-[#342c2c] w-3/4 text-center rounded-lg">
          <form onSubmit={props.formHandle}>  
        <div>
          <h1 className="p-2 text-xl text-white text-bold">Create Cookie Stand</h1>
        </div>
        <div>
            <label className="flex items-center m-3 text-white justify-content">Location<input type="text" placeholder="=Location" name="location" required className="w-3/4 m-3 text-center text-black"/></label>
        </div>
        
        <div className="flex m-3 text-center justify-evenly ">
          <label className="flex-col text-white">Minimum Customers Per Hour <input type="number" placeholder="" name="minimum_customers_per_hour" defaultValue="0" className="w-3/4 mx-4 text-center text-black" /></label>
          <label className="flex-col text-white">Maximum Customers Per Hour <input type="number" placeholder="" name="maximum_customers_per_hour" defaultValue="0" className="w-3/4 mx-4 text-center text-black"/></label>
          <label className="flex-col text-white">Average Cookies Per Hour <input type="number" placeholder="" name="average_cookies_per_sale" defaultValue="0" className="w-3/4 mx-4 text-center text-black"/></label>
          <button type="submit" className="bg-[#1a0d1e]  text-white p-5 rounded-lg">Create</button>
  
        </div>
          <div>
              <h1 className="p-2 text-xl text-bold"></h1>
           </div>
  
          </form>
  
          
      </div>
    )
  
  }
  
  export default Main