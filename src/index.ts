#!/usr/bin/env bun

import chalk from "chalk"
import { Command } from "commander"
import rl from "./utils/readline"

const program = new Command()

program.name("Dsaify").version("0.0.0").description("A simple typing speed test CLI for DSA.")

program
  .command("start")
  .description("Starts the typing test.")
  .action(() => {
    rl.on("line", (line) => {
      console.log(chalk.white(line))
    })
  })

program.parse()
