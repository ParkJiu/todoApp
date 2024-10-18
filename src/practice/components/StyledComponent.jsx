import Styled, { css } from 'styled-components';

const Container = Styled.div `
  display: flex;
`

const Button = Styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid #3c5b69;
color: #b9eaff;
margin: 0 1em;
padding: 0.25em 1em;
${(props) => props.primary && css`
  background: #009cd5;
  color: white;
`}
`

export default function StyledComponent() {
  return (
    <div>
      <Container>
        <Button>Normal Button</Button>
        <Button primary="true">Primary Button</Button>
      </Container>
    </div>
  );
}