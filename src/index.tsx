#!/usr/bin/env node

import { render } from "ink"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"

import App from "./App"

yargs(hideBin(process.argv))
  .command(
    "$0",
    "Starts the typing test.",
    () => {},
    () => {
      render(<App />)
    },
  )
  .help()
  .alias("h", "help")
  .parse()
