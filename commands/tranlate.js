const { SlashCommandBuilder } = require("discord.js");
const {
  holyRegex,
  filthyFtRegex,
  kgsToLbs,
  lbsToKg,
  celsiusToFarenheit,
  farenheitToCelsius,
  milesToKm,
  kmToMiles,
} = require("../conversion_bible");

const data = new SlashCommandBuilder()
  .setName("translate")
  .setDescription("Translates the unit!")
  .addStringOption((option) =>
    option
      .setName("unit")
      .setDescription("The unit you want to translate")
      .setRequired(true)
  );

const execute = async (interaction) => {
  const unit = interaction.options.getString("unit") ?? "No Unit Provided";
  let result = normalUnitConversion(unit);
  await interaction.reply(result);
};

const split = (unit) => {
  const numberPart = unit.match(/\d+/g)[0];
  const unitPart = unit.match(/[a-zA-Z]+/g)[0];
  return { numberPart, unitPart };
};

const normalUnitConversion = (unit) => {
  let { numberPart, unitPart } = split(unit);
  switch (unitPart.toLowerCase()) {
    case "kg":
    case "kilos":
    case "kgs":
    case "kilograms":
    case "kilogram":
      return `${kgsToLbs(numberPart)} lbs`;
    case "pounds":
    case "pound":
    case "lbs":
    case "lb":
      return `${lbsToKg(numberPart)} Kg`;
    case "celsius":
    case "c":
      return `${celsiusToFarenheit(numberPart)} F`;
    case "farenheit":
    case "f":
      return `${farenheitToCelsius(numberPart)} C`;
    case "miles":
    case "mi":
      return `${milesToKm(numberPart)} Km`;
    case "kilometers":
    case "km":
    case "kms":
      return `${kmToMiles(numberPart)} Miles`;
    default:
      return "Invalid Unit";
  }
};

module.exports = {
  data,
  execute,
};
