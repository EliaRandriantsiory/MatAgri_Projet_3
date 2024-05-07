function PrintPrixUser(TextPrix, monnai) {
  if (monnai === "MLG") {
    const monnaisPrix = "Ar";
  }
  // console.log(TextPrix.TextPrix);

  const transformSum = (sum) => {
    // console.log(typeof sum);
    if (typeof variable !== "string") {
      // const strSum = sum.toString();
      const strSum = String(sum);
      const groups = [];

      for (let i = strSum.length; i > 0; i -= 3) {
        groups.unshift(strSum.slice(Math.max(0, i - 3), i));
      }
      return groups.join(" ");
    }
  };

  const transformedSum = transformSum(TextPrix.TextPrix);
  // console.log(transformedSum);

  return <>{"Ar " + transformedSum + ",00"}</>;
}

export default PrintPrixUser;
