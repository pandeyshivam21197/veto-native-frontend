import {showMessage, MessageType} from 'react-native-flash-message';

interface IMessage {
  message: string;
  type?: MessageType;
  description?: string;
}
export const flashMessage = (args: IMessage) => {
  const {type = 'danger', message, description} = args;
  showMessage({
    message,
    description: description,
    position: 'top',
    type,
    floating: true,
    textStyle: {
      fontSize: 20,
    },
  });
};
