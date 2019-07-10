


import React from 'react';

class Login extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         Username: "",
         passeword:"",

   
      }
      this.handleChangeuser = this.handleChangeuser.bind(this);
      this.handleChangepsw = this.handleChangepsw.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

 
   

   handleChangeuser(event) {
    this.setState({Username: event.target.value});
  }
  handleChangepsw(event) {
    this.setState({passeword: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.Username);
    event.preventDefault();
  }












  


   render() {
      return (

         <div>
            <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.Username} onChange={this.handleChangeuser} />
          Passeword:
          <input type="text" value={this.state.passeword} onChange={this.handleChangepsw} />
        </label>
        <input type="submit" value="Submit" />
      </form>
         </div>

      );
   }
}
export default Login;

