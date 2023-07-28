// client.ts
import { SanityClient } from "@sanity/client";


export default SanityClient({
    projectId: 's9s5rtbs',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-08-31'
})