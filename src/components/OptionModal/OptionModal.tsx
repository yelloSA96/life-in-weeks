import React from 'react';
import {
  Popover,
  PopoverCloseButton,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  Box,
  Button,
  Checkbox,
  VStack
} from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { appState } from '../../utils/AppState';

export default function OptionModal() {
  const initialFocusRef = React.useRef<HTMLButtonElement>(null);
  const [state, setState] = useRecoilState<any>(appState);

  const updateOption = (optionName: string, value: boolean | number) => {
    setState((prevState: any) => ({
      ...prevState,
      options: {
        ...prevState.options,
        [optionName]: value,
      },
    }));
  };

  return (
    <Popover initialFocusRef={initialFocusRef} placement="bottom">
      <PopoverTrigger>
        <Button size="sm" colorScheme="gray" mr={3}>
          Options
        </Button>
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody fontSize="sm">
          <VStack align="start" spacing={2} mt={4}>
            <Checkbox
              isChecked={!!state.options.highlightYears}
              onChange={(e) => updateOption('highlightYears', e.target.checked)}
            >
              Highlight every year
            </Checkbox>
            <Checkbox
              isChecked={!!state.options.showEveryYears}
              onChange={(e) => updateOption('showEveryYears', e.target.checked ? 5 : 0)}
            >
              Show year numbers
            </Checkbox>
            <Checkbox
              isChecked={!!state.options.oneRowOneYear}
              onChange={(e) => updateOption('oneRowOneYear', e.target.checked)}
            >
              One row is one year
            </Checkbox>
          </VStack>
        </PopoverBody>
        <PopoverFooter border="0" display="flex" alignItems="center" justifyContent="space-between" pb={4} />
      </PopoverContent>
    </Popover>
  );
}
