import { Container, VStack } from '@chakra-ui/react';
import './App.css';
import NetworkGraph from './NetworkGraph';

function App () {
  return (
    <VStack m={10}>
      <Container>
        <img src="/images/CyberConnect-Explorer-Icon-Logo.jpg" alt='CyberConnect Explorer Logo' />
      </Container>
      <Container border='1px' borderColor='gray.400' >
        <NetworkGraph />
      </Container>
    </VStack>
  );
}

export default App;
