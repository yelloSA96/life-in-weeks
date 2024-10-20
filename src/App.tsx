import React from 'react';
import { useToast, Button, Flex, Box, useDisclosure } from '@chakra-ui/react';

import WeekTimeline from './components/WeekTimeline/WeekTimeline';
import DataModal from './components/DataModal/DataModal';
import OptionModal from './components/OptionModal/OptionModal';

import './App.css';

interface AppProps {
  dataString: string;
}

function App({ dataString }: AppProps) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = React.useState(JSON.parse(dataString));

  React.useEffect(() => {
    let visits: number = parseInt(localStorage.getItem('visits') || '0');
    visits++;
    localStorage.setItem('visits', `${visits}`);
    if (visits === 1) {
      toast({
        title: 'Welcome',
        description: `- Each box is a week - Click "Events" to manage them - Works better on Desktop`,
        status: 'info',
        duration: 12000,
        isClosable: true
      });
    }
  }, [toast]);

  return (
    <div className="App">
      <header className="App-header">
        <Flex m={2} ml={20} justifyContent="space-between" w="100%">
          <h1>
            Life Calendar: Your Life in Weeks{' '}
            <a href="http://b.link/ghub" target="_blank" rel="noreferrer" style={{ fontSize: '0.6em', color: '#555' }}>
              on Github
            </a>
          </h1>

          <Box mr={20}>
            <OptionModal />
            <Button size="sm" colorScheme="teal" onClick={onOpen}>
              Events
            </Button>
          </Box>
        </Flex>

        <Box>
          <WeekTimeline data={data} />
        </Box>

        {isOpen && (
          <DataModal
            dataString={JSON.stringify(data, null, 4)}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={(dataJson: any) => {
              onClose();
              setData(dataJson);
              toast({
                title: 'Updated',
                description: `You have total ${dataJson.events.length} events (boxes) now.`,
                status: 'success',
                duration: 9000,
                isClosable: true
              });
            }}
          />
        )}
      </header>
    </div>
  );
}

export default App;
