import { gs, type GlideRecord } from '@servicenow/glide'

export function projectTrackerBRScript(current: GlideRecord, previous: GlideRecord) {
    const number = current.getValue('number')
    
    // Set the short description
    const currentShortDesc = current.getValue('short_description') || ''
    current.setValue('short_description', `Project Tracker Task: ${currentShortDesc}`)
    
    gs.addInfoMessage(`Project Tracker Business Tracker: Catalog Task ${number} has been created.`)
    gs.info(`Project Tracker Business Tracker: Catalog Task ${number} created.`)
}
