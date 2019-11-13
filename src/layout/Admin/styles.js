import styled from 'styled-components';

export const Container = styled.div`
  
  
  width: 100%;
  height: 100%;
  display:grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 15vh 85vh;
    grid-template-areas:'s h'
                        's m';
`;

export const Header = styled.div`

    grid-area: h;
    background: red;

`;

export const Sidebar = styled.div`

    grid-area: s;
    background: blue;

`;

export const Main = styled.div`

    grid-area: m;
    background: green;

`;


