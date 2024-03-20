import { Container, Row, Col, Image } from "react-bootstrap";

function Footer(){
    return(
        <footer className="mt-3">
            <Container>
                <Row className="justify-content-center">
                    <Col>
                    <Image 
                            width="120"
                            height="60"
                            src='https://th.bing.com/th/id/R.d5f28cb2bccb6ae1a5b3d5ece9c7e856?rik=QoVFY3l1R6i%2bMg&pid=ImgRaw&r=0'
                        />                    </Col>
                    <Col>
                        <p className="text-dark">Réaliser avec l'API pokeBuild - 151 premiers Pokemons</p>
                        <p className="text-dark">ReactJS - Axios - localStorage - BrowserRouter</p>
                    </Col>
                    <Col >
                        <p className="text-dark">Résaliser lors de ma formations DWWM</p>
                        <a href="https://www.linkedin.com/in/quentin-lasue/" target="_blank" className="m-2" rel="noreferrer">
                            <Image src="linkedinLogo.png" alt="Logo Linkedin" width="40" height="40"></Image>
                        </a>
                        <a href="https://github.com/QuentinLasue" target="_blank" className="m-2" rel="noreferrer">
                            <Image src="githubLogo.png" alt="Logo Github" width="40" height="40"></Image>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;