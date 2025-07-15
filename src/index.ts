#!/usr/bin/env bun

function greet(name: string = "World") {
  console.log(`Hello, ${name}! Welcome to your Bun CLI.`);
}

function main() {
  const args = process.argv.slice(2);
  const nameArg = args[0];

  if (nameArg) {
    greet(nameArg);
  } else {
    greet();
  }
}

main();
