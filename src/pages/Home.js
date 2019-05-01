import React,{Component} from 'react'
import logo from '../images/logo.png'
import CharacterCard from '../components/CharacterCard'


    export default class Home extends Component{
                    state = {
                        loading: true,
                        error: false,
                        messageError: '',
                        data: {
                            results: []
                        },
                    }
                componentDidMount(){
                    this.fetchCharacters();
                }
                // fetchCharacters = () async => {
                fetchCharacters() {
                            
                        //  let response = await fetch('https://rickandmortyapi.com/api/character/')
                        //  let responseData = await response.json()

                        fetch('https://rickandmortyapi.com/api/character/')
                        .then(response => response.json() )
                        .then(responseData => {
                            this.setState({
                                data: responseData,
                                loading: false,
                            })
                        })
                        .catch(err => {
                        
                            console.log(`Ha ocurrido un error ${err}`)

                            this.setState({
                                  loading: false,
                                  error: true,
                                  messageError: `Ha ocurrido un error ${err}`
                            })
                          
                        });

                };

                render(){
                    let {results} = this.state.data

                    return (
                        <div className="container">
                          <div className="App">
                            <img className="Logo" src={logo} alt="Rick y Morty" />
                  
                            <ul className="row">
                              {
                                results.map(character => (
                                <li className="col-12 col-sm-6 col-md-4" key={character.id}>
                                    <div className="container-card mb-3">
                                        <img src={character.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{character.name}</h5>
                                        </div>
                                    </div>
                                </li>
                                  )
                                )
                              }
                            </ul>
                  
                              {
                                this.state.loading && 
                                    <h1>Cargando....</h1>
                              }  

                             {
                               this.state.error && 
                                <h1>{this.state.messageError}</h1>
                             }   

                          </div>
                        </div>
                      );
            }
    }