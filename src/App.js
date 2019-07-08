


import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         Username: "",
         passeword:"",
         nombrearticle:"",
         IDarticle:"",
      }
   }


   render() {
      return (
         <div>

            <h1>Slider</h1>
            <h2>Article</h2>
            <button>Ajouter 1 au panier</button>
            <button>Ajouter 1 au retirer</button>
         </div>
      );
   }
}

export default App;
