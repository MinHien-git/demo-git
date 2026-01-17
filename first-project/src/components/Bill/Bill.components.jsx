import Input from "../Input/Input.components";

export default function Bill() {
  return (
    <div>
      <Input type="text" icon={"$"} id="bill" label={"Bill"} align="right" />
    </div>
  );
}
