import { Container, Row, Col,Button } from "react-bootstrap";
import { useState } from "react";
import CardFavoris from "../component/CardFavoris";

function ListeFavoris(){
    const [favoris, setFavoris] =useState(JSON.parse(localStorage.getItem('favoris')) || []) ;

    const viderFavoris = ()=>{
        let confirmationSuppresion = prompt("Êtes-vous sûre de vouloir effacer tous vos favoris ? Impossible de les Récupérer ensuite. Tapez 'oui' pour supprimer.");
        //si il y a une valeur dans confirmation suppresion et qu'elle est egal a oui alors on vide les favoris
        if( confirmationSuppresion && confirmationSuppresion.toLowerCase() ==="oui"){
            setFavoris([]);
            localStorage.setItem('favoris', JSON.stringify([]));
        }
    }
    return(
    <Container>
        <Row>       
            <Button variant="danger" onClick={()=>viderFavoris()} className={favoris.length ===0 ?"d-none" :""}>Effacer la liste de tous les favoris</Button>
    {favoris.length===0 ?
    <h1 className="text-center">Vous n'avez aucun Pokémon en favoris.</h1> 
    :
        favoris.map((pokemon)=>(
            <>
            <Col>
            <CardFavoris key={pokemon.id} pokemon={pokemon} favoris={favoris} setFavoris={setFavoris} />
            </Col>
            
            </>
        ))  
    }
        </Row>
    </Container>
    )
}
export default ListeFavoris;