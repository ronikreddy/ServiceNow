import { Role, Acl } from '@servicenow/sdk/core';

export const viewerRole = Role({
    name: 'x_snc_proj_track.viewer',
    description: 'Restricted visibility for Incident Performance Matrix',
});

// Portal Page ACL
Acl({
    $id: Now.ID['matrix_page_read'],
    type: 'sp_page',
    name: 'matrix_dashboard',
    operation: 'read',
    roles: [viewerRole, 'admin'],
});

// Widget ACL
Acl({
    $id: Now.ID['matrix_widget_read'],
    type: 'sp_widget',
    name: 'incident_matrix_widget',
    operation: 'read',
    roles: [viewerRole, 'admin'],
});
