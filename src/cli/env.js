export const parseEnv = () => {
  const envArr = Object.entries(process.env);

  const rssOnly = envArr.filter((value) => {
    return value[0].startsWith("RSS_");
  });

  const output = rssOnly
    .map((value) => {
      return `${value[0]}=${value[1]}`;
    })
    .join("; ");

  console.log(output);
};

parseEnv();
