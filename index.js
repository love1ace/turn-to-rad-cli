#!/usr/bin/env node

const turnToRad = (turns) => {
  return turns * 2 * Math.PI;
};

const [turns] = process.argv.slice(2).map(Number);

if (isNaN(turns)) {
  console.error("Invalid input. Please provide a valid number for turns.");
  console.error("Usage: turn-to-rad-cli <turns>");
  process.exit(1);
}

const radians = turnToRad(turns);

console.log(`Turns: ${turns} turn(s)`);
console.log(`Radians: ${radians} rad`);