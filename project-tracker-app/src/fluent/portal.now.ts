import { ServicePortal, SPPage, SPWidget } from '@servicenow/sdk/core';

export const matrixWidget = SPWidget({
    $id: Now.ID['incident_matrix_widget'],
    name: 'Incident Performance Matrix',
    id: 'incident_matrix_widget',
    htmlTemplate: Now.include('../server/matrix.html'),
    clientScript: Now.include('../server/matrix.client.js'),
    serverScript: Now.include('../server/matrix.server.js'),
    customCss: Now.include('../server/matrix.scss'),
});

export const matrixPage = SPPage({
    pageId: 'matrix_dashboard',
    title: 'Incident Performance Matrix',
    containers: [
        {
            $id: Now.ID['matrix_container'],
            rows: [
                {
                    $id: Now.ID['matrix_row'],
                    columns: [
                        {
                            $id: Now.ID['matrix_column'],
                            size: 12,
                            instances: [
                                {
                                    $id: Now.ID['matrix_widget_instance'],
                                    widget: matrixWidget,
                                    title: 'Performance Matrix',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});

export const matrixPortal = ServicePortal({
    $id: Now.ID['incident_matrix_portal'],
    title: 'Incident Performance Matrix',
    urlSuffix: 'incident_matrix',
    homePage: matrixPage,
});
