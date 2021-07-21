import { GlobalStyle } from './globalStyle'
import data from './components/data';
import SingleQuestion from './components/Question';

import {
  Main,
  Container,
  ContainerH3
} from './components/styling'

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Container>
          <ContainerH3>questions and answers about JavaScript</ContainerH3>
          <section>
            {
              data.map(question => {
                return (
                  <SingleQuestion key={question.id} {...question} />
                )
              })
            }
          </section>
        </Container>
      </Main>
    </>
  );
}

export default App;
