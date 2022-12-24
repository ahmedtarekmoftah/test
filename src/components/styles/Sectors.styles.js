import styled from "styled-components";

export const SectorsStyled = styled.nav`
  margin-bottom: 10px;
  #selectStyle {
    outline: 0px;
    /* height: 21px; */

    background: #00000007;
    width: 299px;
    border: 1.5px solid #00000040;
    padding: 3px;
    border-radius: 5px;
  }
  @media screen and (max-width: 1024px) {
    #selectStyle {
      width: 92%;
    }
  }
`;
