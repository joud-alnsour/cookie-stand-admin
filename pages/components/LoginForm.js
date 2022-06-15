function LoginForm() {
    return(
      <div>
          <form className="flex flex-col items-center content-center justify-center w-4/5 py-10 my-10 border-4 border-gray-700 rounded-xl">
              <label>
                  Username</label>
              <input type="text" name="username" placeholder="username" 
              className="w-4/5 h-8 p-5 rounded-md"/>
  
              <label>
                  Password</label>
              <input type="password" name="password" placeholder="password" 
              className="w-4/5 h-8 p-5 rounded-md"/>
              
              <input type="submit" value="Sign In" 
              className="w-4/5 h-16 mt-10 text-2xl font-bold border-gray-700 rounded-xl"/>
          </form>
      </div>
    )
  }
  
  export default LoginForm