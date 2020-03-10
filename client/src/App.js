import React from 'react';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

const App = ({ children }) => <Wrapper>{children}</Wrapper>;

export default App;
