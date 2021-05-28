import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    const defaultUSSD = "*150*2*1*074213803*200%23";

    const [montant, setMontant] = useState(200);
    const [operateur, setOperateur] = useState(1);
    const [ussd, setUssd] = useState(defaultUSSD);

    const handleAmountChange = (e) => {};

    const incMontant = () => {
        setMontant(montant + 100);
    };

    const decMontant = () => {
        if (montant <= 200) return;
        setMontant(montant - 100);
    };

    const updateUSSD = () => {
        if (operateur === 1) {
            setUssd(`*150*2*1*074213803*${montant}%23`);
        } else {
            setUssd(`*150*2*1*074213803*${montant}%23`);
        }
    };
    useEffect(() => {
        updateUSSD();
    }, [montant]);

    return (
        <React.Fragment>
            <Head>
                <title>Felicitaions !</title>
                <meta name="description" content="Offre moi un jus" />
                <link
                    rel="icon"
                    href="/photo.png"
                    sizes="400x400"
                    type="image/png"
                />
                <meta name="theme-color" content="#157347" />

                <meta property="og:title" content="Offre moi un jus" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://felicitations.ooo" />
                <meta
                    property="og:image"
                    content="https://felicitations.ooo/photo.png"
                />
                <meta
                    property="og:description"
                    content="Si tu apprécies ce que je fais, alors offre moi un jus"
                />
            </Head>

            <div className="container">
                <div
                    className="fixed-top bg-success"
                    style={{ height: 5 }}
                ></div>
                <div className="d-flex align-items-center mt-3">
                    <Image
                        className="img-thumbnail rounded-circle d-inline-block"
                        src="/photo.png"
                        alt="Photo de Dimitri ONGOUA"
                        width={100}
                        height={100}
                    />
                    <div className="ms-2">
                        <span className="fw-bold fs-2 d-block">
                            Dimitri ONGOUA
                        </span>
                        <span className="text-secondary">
                            IT Support & Formateur
                        </span>
                    </div>
                </div>
                <p className="mt-3 fs-4">
                    Merci d'avance pour l'encouragement.
                </p>
                <form>
                    <div className="input-group mt-2">
                        <button
                            className="btn btn-outline-secondary fw-bold"
                            type="button"
                            id="button-addon1"
                            disabled={montant <= 200}
                            onClick={decMontant}
                        >
                            Moins
                        </button>
                        <input
                            type="text"
                            className="form-control border-0 text-center fs-2"
                            aria-label="Example text with button addon"
                            disabled
                            value={`${parseInt(montant).toLocaleString(
                                "fr-FR"
                            )} F`}
                            onChange={handleAmountChange}
                        />
                        <button
                            className="btn btn-outline-secondary fw-bold px-3"
                            type="button"
                            id="button-addon2"
                            onClick={incMontant}
                        >
                            Plus
                        </button>
                    </div>
                    <p className="mt-4 mb-1 fs-4">Utiliser :</p>
                    <div
                        className="btn-group w-100"
                        role="group"
                        aria-label="Basic radio toggle button group"
                    >
                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio1"
                        />
                        <label
                            className="btn btn-outline-danger fs-3"
                            htmlFor="btnradio1"
                        >
                            Airtel Money
                        </label>

                        <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio2"
                            disabled
                        />
                        <label
                            className="btn btn-outline-primary fs-2"
                            htmlFor="btnradio2"
                        >
                            Moov Money
                        </label>
                    </div>
                    <a
                        href={`tel:${ussd}`}
                        className="btn btn-success mt-3 w-100 fixed-bottom fs-1 rounded-0"
                    >
                        Envoyer
                    </a>
                </form>
            </div>
        </React.Fragment>
    );
}
