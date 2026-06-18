import { ClientScript } from '@servicenow/sdk/core';

ClientScript({
    $id: Now.ID['cs_catalog_info'],
    name: 'Show Catalog Info Message',
    table: 'sc_cart_item', // or 'sc_req_item' depending on exact requirement, but sc_cart_item is common for the form itself
    active: true,
    applies_extended: false,
    global: true,
    ui_type: 'all',
    description: 'Shows an info message when a catalog item form is opened in the portal.',
    type: 'onLoad',
    script: script`function onLoad() {
        if (window === null) { // Simple check for Portal context if needed, though ui_type 'all' or 'service_portal' covers it
             g_form.addInfoMessage("Welcome to the Catalog Item form!");
        }
    }`,
});
