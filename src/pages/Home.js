import React,{Component} from 'react'
import logo from '../images/logo.png'
import CharacterCard from '../components/CharacterCard'


    export default class Home extends Component{
                    state = {
                        nextPage: 1,
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
                            
                        //  let response = await fetch("https://rickandmortyapi.com/api/character/"")
                        //  let responseData = await response.json()
                        this.setState({
                          loading: true
                        })

                        fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`)
                        .then(response => response.json() )
                        .then(responseData => {
                            this.setState({
                                data:{
                                  info: responseData.info,
                                  // en esta parte estamos concatenando informacion para no perder la anterior a la hora de cargar mas 
                                  // personajes
                                  results: [].concat(
                                    // estoy concatenando los resultados que ya tengo con
                                      this.state.data.results,
                                    //los nuevos datos que me llegaron con la nueva peticion  
                                      responseData.results
                                  )  
                                } ,
                                loading: false,
                                nextPage: this.state.nextPage + 1 
                            })
                        })
                        .catch(err => {
                            this.setState({
                                  loading: false,
                                  error: true,
                                  messageError: `Ha ocurrido un error ${err}`
                            })
                        });

                };

                render(){
                    // destructuracion del objeto
                    let {results} = this.state.data
                    // console.log(this.state.data.info)
                    return (
                        <div className="container">
                          <div className="App">
                            <img className="Logo" src={logo} alt="Rick y Morty" />
                  
                            <ul className="row">
                              {
                                results.map(character => (
                                <li className="col-12 col-sm-6 col-md-4" key={character.id}>
                                    <CharacterCard character={character} />
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

                             {
                               !this.state.loading &&
                               <div className="container-btn">
                                  {/* en esta parte llamamos a la funcion que creamos en la parte de arriba la cual nos trae los personajes */}
                                  <button className="btn btn-outline-info" onClick={() => this.fetchCharacters() }>Load More</button>
                               </div> 
                             }

                          </div>
                        </div>
                      );
            }
    }