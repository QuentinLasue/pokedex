import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import CardPokemon from "../component/cardPokemon";
import BoutonPage from "../component/boutonPage";
import Footer from "../component/footer";

function ListePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(true);
  const pokemonParPage = 15;
  const indexDernierPokemon = page * pokemonParPage;
  const indexPremierPokemon = indexDernierPokemon - pokemonParPage;
  const pokemonAfficher = Array.isArray(pokemons)
    ? pokemons.slice(indexPremierPokemon, indexDernierPokemon)
    : pokemons;
  const nbrPage = pokemons.length / pokemonParPage;

  const [searchVal, setSearchVal] = useState("");
  const [searchTerm, setSearchTerm] = useState(searchVal); // constante tampon pour gestion du fonctionnement de l'API la valeur doit être entière pour fonctionner 
  const[erreur,setErreur] = useState(""); // gestion de l'erreur pour afficher un msg si valeur introuvable dans es données de l'API


  

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(pokemons.length>1){ // si on à plus d'un pokemons (pas de recherche avant)
      for(const pokemon of pokemons){ // parcours tous les pokemons
        if(pokemon.name.toLowerCase() ===searchTerm.toLowerCase() // ne tiens pas compte des majuscule à la comparaison
          ){
          setErreur(""); 
          setSearchVal(searchTerm); // lance la réponse pour affichage du pokemon
          break;
        }else{
          setErreur("Veuillez entrez un nom de pokemon valide."); 
        }
      }
    }else{      
      setSearchVal("");// si déjà une recherche on reviens à tous les pokemons
      setErreur(""); 
    }
  };

  useEffect(() => {
    if (!searchVal) {
      const getPokemons = async () => {
        const pokemons = await axios.get(
          `https://pokebuildapi.fr/api/v1/pokemon/generation/1`
        );
        setPokemons(pokemons.data);
        setLoading(false);
      };
      getPokemons();
    } else {
      
      const getPokemons = async () => {
        try {
          const pokemons = await axios.get(
            `https://pokebuildapi.fr/api/v1/pokemon/${searchVal}`
          );
          setPokemons(pokemons.data);
          setLoading(false);
        } catch (error) {
        console.log("error fetching pokemons:", error);
        }
      };
      getPokemons();
    }
  }, [searchVal]);

  const resetSearch = () => {
    setSearchVal("");
  };

  return (
    <>
      {(Loading) ? (
        <Container>
          <Row className="text-center">
            <h1>
              Les pokémons arrivent ...
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </h1>
          </Row>
        </Container>
      ) : (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row className=" d-flex justify-content-center">
              <Col>
                <Form.Control
                  onChange={handleChange}
                  value={searchTerm}
                  type="text"
                  placeholder="Search Pokemon..."
                  className="required"
                />
                <span style={{color:'red'}}>{erreur}</span>
              </Col>
              <Col xs="auto">
                <Button variant="danger" type="submit">
                  Rechercher
                </Button>
              </Col>
            </Row>
          </Form>

          <Row className="justify-content-center">
            {Array.isArray(pokemonAfficher) ? (
              pokemonAfficher.map((pokemon) => (
                <CardPokemon key={pokemon.id} pokemon={pokemon} />
              ))
            ) : (
              <Row className="justify-content-center">
                <CardPokemon
                  pokemon={pokemonAfficher}
                  key={pokemonAfficher.id}
                />
                <Button className="m-3" onClick={resetSearch}>
                  Retour à la liste de Pokemons
                </Button>
              </Row>
            )}
          </Row>
          {!isNaN(nbrPage) ? (
            <BoutonPage page={page} setPage={setPage} nbrPage={nbrPage} />
          ) : null}
          <Footer/>
        </Container>
      ) 
      
    }
    </>
  );
}
export default ListePokemons;
