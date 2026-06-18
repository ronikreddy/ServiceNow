import { gs, type GlideRecord } from '@servicenow/glide'

export function projectTrackerBRScript(current: GlideRecord, previous: GlideRecord) {
    const number = current.getValue('number')
    gs.addInfoMessage(`Project Tracker Business Tracker: Catalog Task ${number} has been created.`)
    gs.info(`Project Tracker Business Tracker: Catalog Task ${number} created.`)
}
