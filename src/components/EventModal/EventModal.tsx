import React from 'react';
import { format } from 'date-fns';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Input,
  VStack
} from '@chakra-ui/react';

interface Props {
  startTime: number;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export default function EventModal({ startTime, isOpen, onClose, onSubmit }: Props) {
  const startDateStr = format(startTime, 'yyyy-MM-dd');

  const [selectedDateValue, setSelectedDateValue] = React.useState(startDateStr);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [type, setType] = React.useState('');

  const onClickSubmit = () => {
    const event = {
      title: title || 'New Event',
      date: selectedDateValue,
      type: parseInt(type || '1')
    };
    onSubmit && onSubmit(event);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Event</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={2}>
            <Input
              placeholder="Date"
              type="date"
              defaultValue={startDateStr}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setSelectedDateValue(ev.target.value)}
            />
            <Input
              placeholder="Title"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setTitle(ev.target.value)}
            />
            <Textarea
              placeholder="Description"
              rows={4}
              onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)}
            />
            <Input
              placeholder="Type (-3, -2, -1, 0, 1, 2, or 3)"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setType(ev.target.value)}
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" onClick={onClickSubmit}>
            Add Event
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
