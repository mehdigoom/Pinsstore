


import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         Username: "",
         passeword:"",
         nombrearticle:0,
         IDarticle:"",
         action:0
      }
      this.ajoutarticle= this.ajoutarticle.bind(this);
      this.retirarticle= this.retirarticle.bind(this);
   }

  
ajoutarticle(){


  this.setState({nombrearticle: this.state.nombrearticle+1})

}
retirarticle(){

 
    this.setState({nombrearticle: this.state.nombrearticle-1})
  
  
  }

   render() {
      return (
         <div>
<p>article dans mon painer {this.state.nombrearticle}</p>
            <h1>Slider</h1>
            <h2>Article</h2>
            <button onClick={this.ajoutarticle}>Ajouter 1 au panier</button>
            <button onClick={this.retirarticle}> Ajouter 1 au retirer</button>
         </div>
      );
   }
}

export default App;
