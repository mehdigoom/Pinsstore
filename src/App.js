


import React from 'react';
import  TestMiro  from './TestMiro.js';
import  Footer  from './Footer.js';
import  Body from './Body.js';
import  header from './Header.js';
class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         Username: "",
         passeword:"",
         nombrearticle:0,
         IDarticle:0,
   
      } 

   }

 
 













   render() {
      return (
        <div>
<p>test</p>
<TestMiro />
        </div>


      );
   }
}

export default App;
