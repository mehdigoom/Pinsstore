


import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         Username: "",
         passeword:"",
         nombrearticle:0,
         IDarticle:0,
         action:0
      }
      this.ajoutarticle= this.ajoutarticle.bind(this);
      this.retirarticle= this.retirarticle.bind(this);
   }

  
ajoutarticle(){


  this.setState({nombrearticle: this.state.nombrearticle+1})

}
retirarticle(){

if (this.state.nombrearticle > 0){
  this.setState({nombrearticle: this.state.nombrearticle-1})
}

  
  
  }

   render() {
      return (
         <div>
<p>article dans mon painer {this.state.nombrearticle}</p>
            <h1>Slider</h1>
            <h2>Article</h2>
            <button onClick={this.ajoutarticle}>Ajouter 1 au panier</button>
            <button onClick={this.retirarticle}> retirer 1 au panier</button>
            <p>Connexion</p>
            <form>
  <label>
    Nom :
    <input type="text" name="name" />
    passeword :
    <input type="passeword" name="Password" />
  </label>
  <input type="submit" value="Envoyer" />
</form>
         </div>
      );
   }
}

export default App;