"use strict";

const { spawnSync } = require("node:child_process");
const path = require("node:path");

const experiments = [
	"01-dce-and-constants.js",
	"02-constant-loop-dle.js",
	"03-context-aliasing.js",
	"04-reg2reg-ilp.js",
	"05-readonly-buffer-walk.js",
	"06-buffer-mutation.js",
	"07-loop-overhead-isolation.js",
	"08-megamorphic-out-param.js",
	"09-mulwide-signed-vs-unsigned.js",
	"10-stride-offset-optimization.js",
];

console.log("===============================================================");
console.log("🚀 Running All JIT & Microbenchmarking Explorations");
console.log(
	"===============================================================\n",
);

for (const exp of experiments) {
	const expPath = path.join(__dirname, exp);
	console.log(`\n▶ Running ${exp}...\n`);
	const result = spawnSync(process.execPath, [expPath], {
		stdio: "inherit",
		env: process.env,
	});
	if (result.status !== 0) {
		console.error(`❌ ${exp} failed with exit code ${result.status}`);
		process.exit(result.status || 1);
	}
}

console.log(
	"\n===============================================================",
);
console.log("✅ All experiments completed successfully!");
console.log("===============================================================");
