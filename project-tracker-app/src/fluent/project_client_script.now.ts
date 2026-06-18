import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['project_client_script'],
    name: 'project client script',
    table: 'sc_cart_item',
    active: true,
    applies_extended: false,
    global: true,
    ui_type: 'all',
    description: 'Displays hello work message on catalog item load',
    messages: '',
    isolate_script: false,
    type: 'onLoad',
    script: script`function onLoad() {
        g_form.addInfoMessage("hello new world");
    }`,
})
