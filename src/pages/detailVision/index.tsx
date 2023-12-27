import React from 'react'
import Logo from '@/components/Logo'
import { URL_MEDIA } from '@/components/constants'
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion";
import { HText } from '@/components/core/heading';

function DetailVision() {
    return (
        <div>
            <motion.div
                className="relative md:mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className=' w-full min-h-[350px] mt-20 rounded'
                    style={{
                        backgroundImage: `url(${URL_MEDIA.CHICKENS_IMAGE})`,
                        backgroundColor: "rgba(0, 0, 0, 0.21)",
                        backgroundBlendMode: "multiply",
                        backgroundSize: "cover"
                    }}>
                </div>
                <div className='border rounded-l-full absolute bottom-0 right-0 p-2 min-w-[100px] text-white  bg-opacity-45 bg-black'>
                    <Logo />
                </div>

            </motion.div>

            <div className='p-5 text-justify'>
                <HText>Notre vision</HText>
                <p className='m-4 flex gap-5'>
                    <ImQuotesLeft size={50} />
                    <p>
                        La République Démocratique du Congo dispose de plus de 80 000 hectares des terres arables, un climat favorable a deux grandes saisons, une végétation favorable à l’élevage, Et pourtant plus de 26 millions des congolais vivent dans l’insécurité alimentaire cad ne dispose pas du minimum requis pour leur besoin alimentaire.
                    </p>

                    <ImQuotesRight size={50} />
                </p>
                <p className='m-4'>
                    Avec une population de plus de 100 millions d’habitants les besoins de cette population en production avicole et dérivées ne sont pas non plus satisfaites. Bukavu Chicks sarl souhaite se positionne dans ce secteur comme une entreprise qui participe à la résolution de la problématique de l’insuffisance de l’offre des produits avicoles en RDC en proposant des produits avicoles bio qui viennent réduire la forte demande de la population congolaise et participer ainsi à la réduction du niveau de l’insécurité alimentaire.

                </p>
                <p className='m-4'>
                    Nous voulons créer une vraie chaine de valeur autour de la production avicole qui permet aux autres éleveurs et agriculteurs de s’approvisionner, de s’équiper et aussi de se former à travers nos exploitations en République Démocratique du Congo.
                    Nos produits partent des parentaux sélectionnés et résistants à la géographie tropicale de la RDC aux œufs commerciaux en passant par les poules de ponte et de chaire . Pour faciliter l’accès aux produits aux éleveurs de la RDC , nous envisageons aussi leurs disponibiliser  les mêmes aliments que nous produisons pour notre activité agricole.
                    Nous faisons  également bénéficier à nos clients des produits d’élevage et agricoles bio   de notre domaine agropastorale qui permet d’expérimenter et développer d’autres élevages à côté de l’avicole.
                </p>
                <p className='m-4'>
                    Notre ambition est de servir efficacement le marché du Grand Kivu d’ici 2027 et couvrir progressivement les autres provinces du Grand Kivu et toute la RDC accessibles d’ici 20235
                    Nous sommes totalement ouvert au partenariat dans tous les domaines de notre activité car nous estimons que ce marché est trop grand et aucune organisation ne peut prétendre le couvrir entièrement seule.
                </p>
            </div>


        </div>
    )
}

export default DetailVision
