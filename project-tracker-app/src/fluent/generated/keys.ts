import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '752af983fb2943fa954fffbdf3c16cf9'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'f9eae36de3474170af82cd5c969dee30'
                    }
                    cs_catalog_info: {
                        table: 'sys_script_client'
                        id: '6258743a68a245ca81754fcdae00ab19'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'f51f05f1b0164012a6c5860a2cad649c'
                    }
                    incident_matrix_portal: {
                        table: 'sp_portal'
                        id: 'cfdb1f23de514d2bbfa6b204961e51c9'
                    }
                    incident_matrix_widget: {
                        table: 'sp_widget'
                        id: 'b87ab4df66f7408e95e157c87a123893'
                    }
                    matrix_column: {
                        table: 'sp_column'
                        id: 'bdd887556d72438bbd92f6f721aea82c'
                    }
                    matrix_container: {
                        table: 'sp_container'
                        id: '611edcbd8f0b4bf4936773593a66fbf9'
                    }
                    matrix_page_read: {
                        table: 'sys_security_acl'
                        id: 'f82becd0d50d45c8b598451e1cbc0b26'
                    }
                    matrix_row: {
                        table: 'sp_row'
                        id: '6455c1754d444b3eb89de9b7a5be0845'
                    }
                    matrix_widget_instance: {
                        table: 'sp_instance'
                        id: 'b0e2d8e953724a57b36a000e71b07f22'
                    }
                    matrix_widget_read: {
                        table: 'sys_security_acl'
                        id: '52ba645ca4b2495cba1bddfcad689631'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'ef53224d63ce48939a8c1dbf93b43a74'
                    }
                    project_client_script: {
                        table: 'sys_script_client'
                        id: 'd56f5d812646468fa424d2b8535dcdf4'
                    }
                    project_tracker_br: {
                        table: 'sys_script'
                        id: 'c4c2449f836845188a9c978c0e939a5e'
                    }
                    src_server_matrix_client_js: {
                        table: 'sys_module'
                        id: '25f73eba7cf440f0b683d630f49eeef0'
                    }
                    src_server_matrix_server_js: {
                        table: 'sys_module'
                        id: '138929648fa84e1bbdb1a2f2de952dba'
                    }
                    src_server_projectTrackerBR_ts: {
                        table: 'sys_module'
                        id: 'c5587fd080594a69a15d8c7650eb85a4'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '9464abb548bb4d94a4c466fda2cf6d49'
                    }
                }
                composite: [
                    {
                        table: 'sp_page'
                        id: '173834e1d4cd4e9e803b6e56750209f8'
                        key: {
                            id: 'matrix_dashboard'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '2d71a7d27fa04288b4c4f7200d60409a'
                        key: {
                            sys_security_acl: 'f82becd0d50d45c8b598451e1cbc0b26'
                            sys_user_role: {
                                id: 'd960b67331224cd9aad41aff0bba150a'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5891d601dbbc42e4812237c6f55c8bdf'
                        key: {
                            sys_security_acl: '52ba645ca4b2495cba1bddfcad689631'
                            sys_user_role: {
                                id: '18ddfc8a2b5f4abf93aac142599b4e33'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'a7a3f46f673c468083d6d42eb01af13e'
                        key: {
                            name: 'x_snc_proj_track.viewer'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'afe101dd4cf347f59f52d82b2f3246de'
                        key: {
                            sys_security_acl: '52ba645ca4b2495cba1bddfcad689631'
                            sys_user_role: {
                                id: 'a7a3f46f673c468083d6d42eb01af13e'
                                key: {
                                    name: 'x_snc_proj_track.viewer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b552f98da6f7462881e03ae4a0c1a353'
                        key: {
                            sys_security_acl: 'f82becd0d50d45c8b598451e1cbc0b26'
                            sys_user_role: {
                                id: 'a7a3f46f673c468083d6d42eb01af13e'
                                key: {
                                    name: 'x_snc_proj_track.viewer'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
