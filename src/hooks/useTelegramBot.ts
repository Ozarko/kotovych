import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { FormDataArgs } from "../components/Form";

export const useTelegramBot = () => {
  const sendMessage = async ({ name, phone, message }: FormDataArgs) => {
    const tMessage = `<b>Нове повідомлення з сайту</b> %0A%0A <b>Ім'я:</b> ${name} %0A %0A <b>Телефон:</b> ${phone} %0A %0A <b>Повідомлення:</b> ${message}`;
    await axios.post(
      `https://api.telegram.org/bot6033872067:AAFJXvDR6lho11suA2gxLPlYD2qA2bGJQd8/sendMessage?chat_id=-938602733&text=${tMessage}&parse_mode=html`
    );
  };

  const sendMessageMutation = useMutation(sendMessage).mutateAsync;

  return { sendMessageMutation };
};
