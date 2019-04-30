import React,{Component} from 'react'
import logo from '../images/logo.png'

    export default class Home extends Component{
                    state = {
                        data: {
                            results: []
                        },
                    }
                componentDidMount(){
                    this.fetchCharacters();
                }
                // fetchCharacters = () async => {
                fetchCharacters() {
                            
                        // let response = await fetch('https://rickandmortyapi.com/api/character/')
                        // let responseData = await response.json()

                        fetch('https://rickandmortyapi.com/api/character/')
                        .then(response => response.json() )
                        .then(responseData => {
                            this.setState({
                                data: responseData 
                            })
                        })

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
                                <li className="col-6 col-md-3" key={character.id}>
                                    <p>{character.name}</p>
                                  {/* <CharacterCard character={character} /> */}
                                </li>
                                  )
                                )
                              }
                            </ul>
                  
                            {/* {this.state.loading && <p className="text-center">Loading...</p>}
                  
                            {!this.state.loading && this.state.data.info.next && (
                              <button onClick={() => this.fetchCharacters()}>Load More</button>
                            )} */}
                          </div>
                        </div>
                      );
            }
    }