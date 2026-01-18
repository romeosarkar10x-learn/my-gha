import core from "@actions/core";

async function main(): Promise<void> {
    core.info("Hello world from 'my-gha'!");

    const name = core.getInput("name", { required: true });
    const programmingLanguages = core.getInput("languages", { required: true });

    core.info(`Hi ${name}!`);
    core.info(`I see you are proficient in ${programmingLanguages.split(",").join(", ")}`);

    const env = core.getInput("env_name");
    core.info(`env: ${env}`);
    core.info(`${env === ""}`);
}

main();

/* Trigger build #3 */
