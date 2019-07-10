import React from 'react';
import PeanutCard from './components/PeanutCard';
import './App.scss'
import PeanutFilterItem from './components/PeanutFilterItem';

import  TestMiro  from './TestMiro.js';
import  Footer  from './Footer.js';
import  Body from './Body.js';
import  header from './Header.js';
import Login from './components/Login/Login.js'
import { logicalExpression } from '@babel/types';

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
      this.ajoutarticle= this.ajoutarticle.bind(this);
      this.retirarticle= this.retirarticle.bind(this);
      this.viderarticle= this.viderarticle.bind(this);
      this.handleChangeuser = this.handleChangeuser.bind(this);
      this.handleChangepsw = this.handleChangepsw.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   
   }

    viderarticle(){
    this.setState({nombrearticle: 0})
  
  }

  ajoutarticle(){

  this.setState({nombrearticle: this.state.nombrearticle+1})

}

    retirarticle(){

    if (this.state.nombrearticle > 0){
      this.setState({nombrearticle: this.state.nombrearticle-1})
    } 
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
        <section className="wrapper -flex">
          <section className="sidebar">
            <p>article dans mon painer {this.state.nombrearticle}</p>
            <button onClick={this.ajoutarticle}>Ajouter 1 au panier</button>
            <button onClick={this.retirarticle}> retirer 1 au panier</button>
            <button onClick={this.viderarticle}> Vider panier</button>
            {this.Articleliste}
          </section>
          <header>
              <nav></nav>
          </header>
          <section className="container -flex">
          <div>
            <p>test</p>
            <TestMiro />
          </div>
          <article className="delivery -flex">
                <figure className="delivery-figure"><img src="https://i.imgur.com/KfBVf9w.jpg" alt="Delivery Image" /></figure>
                <div className="delivery-message">
                    <h4>Don't wait to long to be delivered !</h4>
                    <p>lorem ipsum dolor sit amet ...</p>
                </div>
            </article> 
            <section className="peanut-filter -flex">
              <PeanutFilterItem label="All" />
              <PeanutFilterItem label="Bottle" />
              <PeanutFilterItem label="Cake" />
            </section>    
            <section className="peanut-container -flex">
              {/* exemple peanut card */}
                <PeanutCard src="https://cdn.dribbble.com/users/508142/screenshots/3991256/3.jpg" alt="toto" price="55" />
                <PeanutCard src="https://cdn.dribbble.com/users/508142/screenshots/3991256/3.jpg" alt="toto" price="55" />
                <PeanutCard src="https://cdn.dribbble.com/users/508142/screenshots/3991256/3.jpg" alt="toto" price="55" />
            </section>
            <p>Connexion</p>
            <Login  Username={this.state.Username}
            passeword={this.state.passeword}
            handleChangeuser = {this.handleChangeuser} 
            handleChangepsw = {this.handleChangepsw}
            handleSubmit ={this.handleSubmit} />
          </section>
        </section>
      );
    }
 }


export default App;
