import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '8b1334c45e754de2b94e9b5dac0c7d0b'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '778d5de80f74406cbbccea90ed1d0de6'
                    }
                }
            }
        }
    }
}
