import axios from "axios";
import { useMutation } from "react-query";
import { FormDataArgs } from "../components/Form";

const targetChatId = "-938602733";

export const useTelegramBot = () => {
  const sendMessage = async ({ name, phone, message }: FormDataArgs) => {
    const tMessage = `<b>Нове повідомлення з сайту</b> %0A%0A <b>Ім'я:</b> ${name} %0A %0A <b>Телефон:</b> ${phone} %0A %0A <b>Повідомлення:</b> ${message}`;
    await axios.post(
      `https://api.telegram.org/bot6033872067:AAFJXvDR6lho11suA2gxLPlYD2qA2bGJQd8/sendMessage?chat_id=-938602733&text=${tMessage}&parse_mode=html`
    );
  };

  const sentTestResult = async ({ name, phone, score, level, result }: any) => {
    const message = `${name} пройшов тест з результатом ${score} балів. %0A  %0A <b>Рівень:</b> ${level} %0A %0A`;
    await sendMessage({ name, phone, message });

    const transformedResult = result
      .map((item: any, index: number) => {
        console.log(item);
        return `Question ${index + 1}: ${item.question.join(
          " ____ "
        )} \nCorrect: ${item.correctAnswer} \nUser: ${item.userAnswer} \n`;
      })
      .join("\n");
    const file = new File([transformedResult], `${name}_test_result.txt`, {
      type: "application/json",
    });

    // Create a form data object
    const formData = new FormData();
    formData.append("chat_id", targetChatId);
    formData.append("document", file);
    const apiUrl = `https://api.telegram.org/bot6033872067:AAFJXvDR6lho11suA2gxLPlYD2qA2bGJQd8/sendDocument`;
    await axios.post(apiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const sendMessageMutation = useMutation(sendMessage).mutateAsync;
  const sentTestResultMutation = useMutation(sentTestResult).mutateAsync;

  return { sendMessageMutation, sentTestResultMutation };
};
