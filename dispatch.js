import * as core from '@actions/core'

const inputs = {
    targetWorkflow: core.getInput('target-workflow'),
    targetWorkflowGithubAccount: core.getInput('target-workflow-github-account'),
    targetWorkflowRepo: core.getInput('target-workflow-repo'),
}

console.log('I am running from dispatch.js')
console.log('inputs', inputs)

console.log('tok', process.env.pat_token)