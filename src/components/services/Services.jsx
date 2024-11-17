import "./services.scss";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};


const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            initial="initial"
            animate={"animate"}
            variants={variants} 
            ref={ref}>
            <motion.div
                className="textContainer"
                variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div
                className="titleContainer"
                variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listeContainer">
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Développement Web</h2>
                    <p>
                    Conception et développement d'une application web pour un restaurant. L'application permet aux utilisateurs de consulter les menus, réserver des tables et passer des commandes en ligne. Le design responsive offre une navigation fluide sur tous les appareils.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Design Graphique
                    </h2>
                    <p>
                    Refonte complète de l'identité visuelle d'une startup technologique. Création de bannières publicitaires, illustrations vectorielles pour les réseaux sociaux et modèles d'e-mails professionnels, le tout en alignement avec une esthétique moderne et minimaliste.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>E-commerce</h2>
                    <p>
                    Lancement d'une boutique en ligne pour une marque de vêtements écologiques. Intégration d'un système de paiement sécurisé, d'un outil de gestion des stocks en temps réel et d'une fonctionnalité de personnalisation des produits.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Photographie</h2>
                    <p>
                    Réalisation d'une série de portraits pour un magazine de mode local. Mise en avant de l'élégance et de l'authenticité à travers un shooting en lumière naturelle, avec une retouche professionnelle.


                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services