import './index.css'

const Admin=()=>{
    return(
      <div className="admin-container container-fluid">  
       <div className="form-content"> 
         <h1 className="heading">Admin Portal</h1> 
        <div className="input-container">
            <label htmlFor="user" className="label-input">UserName:</label>
            <input type="text" className="user-input" id="user" />
        </div>
        <div className="input-container">
               <label htmlFor="userPassword" className="label-password">Password:</label>
              <input className="password-user" type="password" id="userPassword" />
        </div>
        <button className="button" type="submit">Login</button> 
       </div>
     </div>       
    )
}
export default Admin