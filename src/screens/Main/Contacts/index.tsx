import { Form, FormDataArgs } from "../../../components/Form";
import { useTranslation } from "../../../context/useTranslation";
import { useTelegramBot } from "../../../hooks/useTelegramBot";
import "./contacts.scss";

export const Contacts = () => {

  const {sendMessageMutation} = useTelegramBot()
  const {
    schema: {
      contacts: { description, separator },
    },
  } = useTranslation();

  const handleSubmit = (data: FormDataArgs) => {
    sendMessageMutation(data);
  };

  return (
    <section className="contacts" id="contacts">
      <div className="contacts-description">
        <p>{description}</p>
      </div>
      <div className="contacts-social">
        <a href="https://www.facebook.com/">Telegram</a>
        <a href="mailto:ozarkonv@gmail.com">Email</a>
        <a href="https://www.facebook.com/">LinkedIn</a>
      </div>
      <div className="contacts-separator">
        <p>{separator}</p>
      </div>
      <Form onSubmit={handleSubmit} />
    </section>
  );
};
