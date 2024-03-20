import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardPokemon(props) {

  const typesLength = (props.pokemon.apiTypes.length -1); // type principal est soit à l'index 0 soit 1 donc on prend la longueur -1 (longueur max :2)
  const type = props.pokemon.apiTypes;  //tableau des types, 1 ou 2 en fct des pokemons
  const principalType = type[(typesLength)].name; // type principal a l'index length-1, .name qui a pour value le nom exemple : Plante
  let secondType ;
  const compterTypes = ()=> {
    if(typesLength===1){
      secondType = type[(typesLength-1)].name;
      return secondType;
    }else{
      secondType = principalType;
      return secondType;
    }
  }
  compterTypes()
  
  const bordurColor = {
    Normal :'#A4ACAF',
    Combat : '#D56723',
    Vol : '#8CCADB',
    Poison:'#B97FC9',
    Sol:'#7B6D2F',
    Roche:'#A38C21',
    Insecte:'#729F3F',
    Spectre:'#7B62A3',
    Acier:'#9EB7B8',
    Feu:'#FD7D24',
    Eau:'#4592C4',
    Plante:'#9BCC50',
    Électrik:'#EED535',
    Psy:'#F366B9',
    Glace:'#51C4E7',
    Dragon:'#6F0808',
    Ténébres:'#707070',
    Fée:'#FDB9E9',
  }

  const linearGradient = `linear-gradient(45deg,${bordurColor[principalType]},${bordurColor[secondType]}) 1`
  return (
    <Card 
    className='m-5 border-4'
    // style={{ width: '18rem' , borderColor:bordurColor[principalType]}}
    style={{ width: '18rem' , borderImage:linearGradient }}
    // style={{ width: '18rem' , background:linearGradient}}
    >
      <Card.Img variant="top" src={props.pokemon.image} />
      <Card.Body>
        
        <Card.Title>
          <h4>{props.pokemon.name}
          <Badge bg="secondary" className='ms-2'>#{props.pokemon.pokedexId}</Badge>
          </h4>
        </Card.Title>
        <Card.Text className='align-item'>
          <Container>
            <Row>
              <Link to={`/details/${props.pokemon.id}`}>
                <Row>
                <Button variant="primary" >View {props.pokemon.name}</Button>
                </Row>
              </Link>
            </Row>
          </Container>
            
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardPokemon;