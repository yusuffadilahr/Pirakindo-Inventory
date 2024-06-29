import React from "react";
import 'bulma/css/bulma.css';
import MenuSamping from "../../component/side-bar";

const Dokumentasi = () => {
    return (
        <div className="columns is-gapless">
            <div className="column is-3">

                {/* Ini Side Bar */}
                <MenuSamping />

            </div>
            <div className="column">
                <section className="section">
                    <h1 className="title">
                        Dokumentasi
                    </h1>
                </section>
            </div>
        </div>
    )
}

export default Dokumentasi;