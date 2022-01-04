import { useQuery } from 'react-query'

import { NarmesteLeder } from '../types/narmesteLeder'
import { flexGatewayRoot } from '../utils/environment'
import Fetch from '../utils/fetch'

export default function() {
    return useQuery<NarmesteLeder[], Error>('narmesteledere', () =>
        Fetch.authenticatedGet(
            `${flexGatewayRoot()}/user/sykmeldt/narmesteledere`,
            async(data) => {
                return data as NarmesteLeder[]
            },
        ),
    )
}

