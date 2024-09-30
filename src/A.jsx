export const A = ({ call2 }) => {
  const value = 12;
  const text = "Hello brother";
  call2(value, text);
  return <div>From A</div>;
};
