export const C = ({ datas }) => {
  return (
    <div>
      {datas.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};
