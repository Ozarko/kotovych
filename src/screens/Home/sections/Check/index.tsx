import { ActionButton } from "../../../../components/ActionButton";
import "./check.scss";

export const Check = () => {
  return (
    <div className="check">
      <div className="check-section">
        <p>
          Ready to discover your English language proficiency? Start your custom
          English level check now and get matched with the perfect learning plan
          to help you achieve your language goals!
        </p>
      </div>
      <div className="check-section">
        <div className="check-section-button">
          <ActionButton label={"Start tests"} />
        </div>
      </div>
    </div>
  );
};
