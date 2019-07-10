


import React from 'react';

class Login extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         Username: "",
         passeword:"",

   
      }
   
   }

 
   














  


   render() {
       const {Username,passeword,handleChangeuser,handleChangepsw,handleSubmit} = this.props
    
      return (

         <div>
            <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={Username} onChange={handleChangeuser} />
          Passeword:
          <input type="text" value={passeword} onChange={handleChangepsw} />
        </label>
        <input type="submit" value="Submit" />
      </form>
         </div>

      );
   }
}
export default Login;

