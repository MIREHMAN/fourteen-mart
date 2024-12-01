const CustomizeProducts = () => {
  const options = [
    { name: "Color", choices: ["Red", "Blue", "Green"] },
    { name: "Size", choices: ["Small", "Medium", "Large"] },
  ];

  return (
    <div className="flex flex-col gap-6">
      {options.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium text-lg">{option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices.map((choice) => (
              <li
                className={`ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm ${
                  choice === "Red" ? "bg-lama text-white" : ""
                }`}
                key={choice}
              >
                {choice}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CustomizeProducts;