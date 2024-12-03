import Header from '../Header'
import './index.css'

const User=()=>{
    return(
           <div className="user-container">  
            <form className="form-container">
                <div className="registration-container">
                    <h1 className="user-heading">Membership Registration</h1>
                    <div className="pass-container">
                      <div className="card-container">
                        <p className="para">Affix your Recent Pass-photo</p>
                      </div>
                     </div>  
                </div>
                <div className="input-container">
                        <label htmlFor="user" className="label-input">Name in Full(in Block Letters):</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="input-container">
                        <label htmlFor="userPassword" className="label-password">Father's Name:</label>
                        <input className="password-user" type="password" id="userPassword" />
                </div> 
                <div className="input-container">
                        <label htmlFor="user" className="label-input">Class & Department:</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="input-container">
                        <label htmlFor="user" className="label-input">Date of Birth:</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="input-container">
                        <label htmlFor="user" className="label-input">Caste:</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="input-container">
                        <label htmlFor="user" className="label-input">Blood Group:</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="input-container">
                        <label htmlFor="user" className="label-input">E-mail:</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="input-container">
                        <label htmlFor="user" className="label-input">Phone-number:</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="input-container">
                  <h1 className="address">Address:</h1>
                </div>
                <div className="input-container">
                        <label htmlFor="user" className="label-input">Local:</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="input-container">
                        <label htmlFor="user" className="label-input">Permanent:</label>
                        <input type="text" className="user-input" id="user" />
                </div>
                <div className="declaration-container">
                    <h1 className="head">Declaration</h1>
                    <p className="paragraph">I here declare that I abide by the rules and regulation of the library and those that may be notified me from time to time</p>
                    <p className="paragraph">Signature of the student :</p>
                </div>
                <button type="submit" className="button">Register</button>
            </form>
           </div>
    )
}
export default User