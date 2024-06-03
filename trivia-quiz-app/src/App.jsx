import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CATEGORIES from "./constants/categories";
import Category from "./components/Category";
import questionsArt from './data/art.json';
import questionsEntertainment from './data/entertainment.json';
import questionsHistory from './data/history.json';
import QuestionBox from "./components/QuestionBox";



function App() {
 const [category, setCategory] = useState(null)
 const [questions, setQuestions] = useState([])
 
 const setCurrentCategory = (category) => {
      setCategory(category)

      switch(category.name){
        case CATEGORIES.art.name:
          setQuestions(questionsArt);
          break;
        case CATEGORIES.entertainment.name:
          setQuestions(questionsEntertainment);
          break;
        case CATEGORIES.history.name:
          setQuestions(questionsHistory);
          break;
      }
 };

  return (
    <Container>
      {console.log('category',category)}
      <Row className="my-5">
        <Col className="text-center">
          <h1 onClick={() => setCategory(null)}>Quiz App</h1>
        </Col>
      </Row>

      {category ? (
       <>
        <Row className="d-flex justify-content-center mb-4">
          <Col md={4} className="text-center">
             <Category category={category} size='sm'/>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={4} className="text-center">
             <QuestionBox questions={questions} />
          </Col>
        </Row>
      </>
      ) : (
      <>
      {Object.values(CATEGORIES).map((cat, index) => (
        <Row className="d-flex justify-content-center mb-5" key={index}>
          <Col md={4}>
            <Category category={cat} setCurrentCategory={setCurrentCategory}/>
          </Col>
        </Row>
      ))}
      </>
    )
    }

    </Container>
  );
}

export default App;
