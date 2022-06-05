export const parseArgs = () => {
  const args = process.argv;
  const flags = {
    prefix: "--",
    propName: "propName",
    prop2Name: "prop2Name",

    getPropWithPrefix(name) {
      const key = name.split(this.prefix)[1];
      return this.prefix + this[key];
    },

    getOnlyProp(value) {
      const key = value.split(this.prefix)[1];
      return this[key];
    },
  };

  const output = args
    .reduce((acc, curr, index, arr) => {
      if (curr === flags.getPropWithPrefix(curr)) {
        const buffer = `${flags.getOnlyProp(curr)} is ${arr[index + 1]}`;
        acc.push(buffer);
      }
      return acc;
    }, [])
    .join(", ");

  console.log(output);
};

parseArgs();
