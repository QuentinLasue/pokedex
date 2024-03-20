import { Button, Col, Row } from "react-bootstrap";

function BoutonPage({ page, setPage, nbrPage }) {
  const nextPage = () => {
    if (page < nbrPage) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behaviour: "smooth" });
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <Row>
      <Col className="text-center">
        <Button variant="danger" onClick={previousPage}>
          Page Précédente
        </Button>
      </Col>
      <Col className="text-center">
        <Button variant="danger" onClick={nextPage}>
          Page suivante
        </Button>
      </Col>
    </Row>
  );
}
export default BoutonPage;
