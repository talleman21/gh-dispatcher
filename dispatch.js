console.log('I am running from dispatch.js')
const [,,command,workflowType] = process.argv;
console.log(command, workflowType)

console.log('tok', process.env.pat_token)