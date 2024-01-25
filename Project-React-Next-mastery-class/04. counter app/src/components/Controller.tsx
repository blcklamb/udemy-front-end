interface ControllerProps {
  onControl: (value: number) => void;
}

const Controller = ({ onControl }: ControllerProps) => {
  const onChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    onControl(+eventTarget.innerText);
  };

  const COUNT_VARIATION = ["-100", "-10", "-1", "+1", "+10", "+100"];
  return (
    <div className="box">
      {COUNT_VARIATION.map((ele) => {
        return (
          <button key={ele} type="button" onClick={onChange}>
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Controller;
