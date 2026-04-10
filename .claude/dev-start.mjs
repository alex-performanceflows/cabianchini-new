import { spawn } from "child_process";
const child = spawn(
  "/Users/aduma/.nvm/versions/node/v24.14.1/bin/pnpm",
  ["run", "dev"],
  { cwd: "/Users/aduma/Desktop/Claude Code/ca-bianchini", stdio: "inherit",
    env: { ...process.env, PATH: "/Users/aduma/.nvm/versions/node/v24.14.1/bin:" + process.env.PATH } }
);
child.on("exit", code => process.exit(code ?? 0));
