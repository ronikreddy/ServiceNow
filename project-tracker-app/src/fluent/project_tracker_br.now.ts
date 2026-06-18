import { BusinessRule } from '@servicenow/sdk/core'
import { projectTrackerBRScript } from '../server/projectTrackerBR'

BusinessRule({
    $id: Now.ID['project_tracker_br'],
    action: ['insert'],
    table: 'sc_task',
    script: projectTrackerBRScript,
    name: 'Project Tracker Business Tracker',
    order: 100,
    when: 'before',
    active: true,
})
