interface ViewerProps {
  count: number;
}

const Viewer = ({ count }: ViewerProps) => {
  return (
    <div className="box">
      <div>현재 카운트:</div>
      <h3>{count}</h3>
    </div>
  );
};

export default Viewer;
