import { Systemtittel } from 'nav-frontend-typografi'
import React, { useEffect, useState } from 'react'

import useArbeidsrettetOppfolging from '../../query-hooks/useArbeidsrettetOppfolging'
import useDialogmoter from '../../query-hooks/useDialogmoter'
import useOppfolgingsplaner from '../../query-hooks/useOppfolgingsplaner'
import useSoknader from '../../query-hooks/useSoknader'
import useSykmeldinger from '../../query-hooks/useSykmeldinger'
import useVedtak from '../../query-hooks/useVedtak'
import Vis from '../Vis'
import Aktivitetsplan from './Aktivitetsplan'
import { DialogmoteLenke } from './Dialogmote'
import Oppfolgingsplan from './Oppfolgingsplan'
import { skalViseOppfoelgingsplanLenke } from './skalViseOppfoelgingsplanLenke'
import SoknadLenkepanel from './Soknader'
import SykmeldingLenkepanel from './Sykmelding'
import Tidslinjen from './Tidslinjen'
import UtbetalingAvSykepengerLenkepanel from './Utbetaling'

const Lenker = () => {
    const [lenker, setLenker] = useState<boolean>()

    const { data: arbeidsrettetOppfolging } = useArbeidsrettetOppfolging()
    const { data: vedtak } = useVedtak()
    const { data: sykmeldinger } = useSykmeldinger()
    const { data: soknader } = useSoknader()
    const { data: oppfolgingsplaner } = useOppfolgingsplaner()
    const { data: dialogmote } = useDialogmoter()

    useEffect(() => {
        const anyLenker = () =>
            [
                arbeidsrettetOppfolging,
                vedtak,
                sykmeldinger,
                soknader,
                oppfolgingsplaner,
                dialogmote,
            ].find((data) => data) !== undefined
        setLenker(anyLenker())
    }, [
        arbeidsrettetOppfolging,
        dialogmote,
        oppfolgingsplaner,
        soknader,
        sykmeldinger,
        vedtak,
    ])

    return (
        <Vis
            hvis={lenker}
            render={() => (
                <section className="lenker">
                    <Systemtittel tag="h2" className={'hide-element'}>
                        Lenker
                    </Systemtittel>
                    <Vis
                        hvis={sykmeldinger && sykmeldinger.length > 0}
                        render={() => <SykmeldingLenkepanel />}
                    />

                    <Vis
                        hvis={soknader && soknader.length > 0}
                        render={() => <SoknadLenkepanel />}
                    />

                    <Vis
                        hvis={vedtak && vedtak.length > 0}
                        render={() => <UtbetalingAvSykepengerLenkepanel />}
                    />

                    <Vis
                        hvis={arbeidsrettetOppfolging?.underOppfolging}
                        render={() => <Aktivitetsplan />}
                    />

                    <Vis
                        hvis={skalViseOppfoelgingsplanLenke(
                            sykmeldinger,
                            oppfolgingsplaner
                        )}
                        render={() => <Oppfolgingsplan />}
                    />
                    <DialogmoteLenke />
                    <Tidslinjen />
                </section>
            )}
        />
    )
}

export default Lenker
