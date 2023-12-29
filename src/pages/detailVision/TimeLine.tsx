import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { ImQuotesLeft } from "react-icons/im";

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <ImQuotesLeft />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <ShowItem
                        title='SATISFAIRE LA DEMANDE DES PRODUITS AVICOLES EN RDC.'
                        description="
                        Avec une population de plus de 100 millions d’habitants les besoins de cette population en production avicole et dérivées ne sont pas non plus satisfaites. Bukavu Chicks sarl souhaite se positionne dans ce secteur comme une entreprise qui participe à la résolution de la problématique de l’insuffisance de l’offre des produits avicoles en RDC en proposant des produits avicoles bio
                        "
                    />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <ImQuotesLeft />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <ShowItem
                        title="REDUIRE LE NIVEAU DE L'INSECURITÉ ALIMENTAIRE"
                        description="
                        La République Démocratique du Congo dispose de plus de 80 000 hectares des terres arables, un climat favorable a deux grandes saisons, une végétation favorable à l’élevage, Et pourtant plus de 26 millions des congolais vivent dans l’insécurité alimentaire
                        "
                    />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    className='font-bold'
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    2027
                </TimelineOppositeContent>
                <TimelineSeparator>

                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <ImQuotesLeft />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <ShowItem
                        title="SERVIR EFFICACEMENT LE MARCHÉ DU GRAND KIVU"
                        description="
                        Pour faciliter l’accès aux produits aux éleveurs de la RDC , nous envisageons aussi leurs disponibiliser les mêmes aliments que nous produisons pour notre activité agricole.Nous faisons également bénéficier à nos clients des produits d’élevage et agricoles bio de notre domaine agropastorale qui permet d’expérimenter et développer d’autres élevages à côté de l’avicole.
                        "
                    />
                    <Typography variant="h6" component="span">
                    </Typography>
                    <Typography>
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    2035
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <ImQuotesLeft />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <ShowItem
                        title="COUVRIR PROGRESSIVEMENT LES AUTRES PROVINCES DU GRAND KIVU ET TOUTE LA RDC."
                        description="Nous voulons créer une vraie chaine de valeur autour de la production avicole qui permet aux autres éleveurs et agriculteurs de s’approvisionner, de s’équiper et aussi de se former à travers nos exploitations en République Démocratique du Congo."
                    />
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}



const ShowItem = ({ title, description }: { title: string, description: string }) => {
    return (
        <div>
            <Typography variant="h6" component="span">
                {title}
            </Typography>
            <Typography color="text.secondary"
                className='text-justify'>
                {description}
            </Typography>
        </div>
    )
}