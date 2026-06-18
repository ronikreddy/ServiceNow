import { gs, type GlideRecord } from '@servicenow/glide'

export function projectTrackerBRScript(current: GlideRecord, previous: GlideRecord) {
    const number = current.getValue('number')
    gs.addInfoMessage(`Project Tracker Business Tracker triggered for Incident ${number}`)
    gs.info(`Project Tracker Business Tracker: Incident ${number} was updated.`)
}
