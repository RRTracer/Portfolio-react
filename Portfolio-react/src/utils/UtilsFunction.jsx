const GetDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const GetDateWithoutPadStart = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1);
  const day = String(today.getDate());
  return `${year}-${month}-${day}`;
};

const GetPrintableDate = () => {
  const date = GetDate();
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

export { GetDate, GetDateWithoutPadStart, GetPrintableDate };
