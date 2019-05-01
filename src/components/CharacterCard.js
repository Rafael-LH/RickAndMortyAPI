import React,{Component} from 'react'

export default class CharacterCard extends Component{

        state = {
            character: []
        }

        componentDidMount(){
            this.getCharacters()
        }

        getCharacters(){
            this.setState({
                character: this.props.character
            })
        }

        render(){
            // console.log(this.props.character.image)
            // console.log(this.state.character.name)
            return(
                this.state.character.name.map(character => (
                    <div class="card mb-3">
                        {/* <img src={character.image} class="card-img-top" alt="..." /> */}
                        <div class="card-body">
                            <h5 class="card-title">{character.name}</h5>
                        </div>
                    </div>
                ))
            )
        }
    }

    