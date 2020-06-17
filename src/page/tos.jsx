import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import '../style/tos.scss'

export const TosConfirm = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push('/index');
  }

  return(
    <div className='tos'>
      <Container className='tos-container'>
        <h1>Terms of Use</h1>
        <p className="tos-content">
          Test Article means, in accordance with 21 C.F.R. § 50.3(j), any drug (including a biological product), medical device, food additive, color additive, electronic product, or any other article subject to regulation under the Federal Food, Drug, and Cosmetic Act that is intended for administration to humans or animals, including a drug or biologic as identified in the Research Plan and Appendix B, that is used within the scope of the Research Plan. The Test Article may also be referred to as Investigational Agent, Study Material, or Study Product.
          </p>
        <Button primary onClick={handleClick}>
          Agree
        </Button>
      </Container>
    </div>
  );
}
