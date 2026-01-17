import Button from "../Button/Button.components";
import Input from "../Input/Input.components";
import styles from "./SelectTip.module.css";
export default function SelectTip() {
  return (
    <div className="margin-4-top ">
      <p>Select tip %</p>
      <div className={`grid ${styles.tipContainer}`}>
        {["5%", "10%", "15%", "25%", "50%"].map((tip, index) => (
          <Button type="button" label={tip} key={index} />
        ))}
        <Input placeholder={"custom"} />
      </div>
    </div>
  );
}
