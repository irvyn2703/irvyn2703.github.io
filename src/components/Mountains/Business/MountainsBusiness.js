const Mountains = () => {
  const details = [
    { rotated: false, height: "75vh", color: "#73ba93", delay: "0.2s" },
    { rotated: true, height: "73vh", color: "#39998d", delay: "0.4s" },
    { rotated: false, height: "55vh", color: "#007680", delay: "0.6s" },
    { rotated: true, height: "53vh", color: "#00555f", delay: "0.8s" },
    { rotated: false, height: "35vh", color: "#00495f", delay: "1s" },
    { rotated: true, height: "33vh", color: "#064456", delay: "1.2s" },
  ];
  return {
    details,
  };
};

export default Mountains;
