import React from "react";
import 'bulma/css/bulma.css'
import MenuSamping from "../../component/side-bar";

const Kategori = () => {

    return (
        <div className="columns is-gapless">
            <div className="column is-3">

                {/* Ini Side Bar */}
                <MenuSamping />

            </div>
            <div className="column">
                <section className="section">
                    <h1 className="title">Kategori Alat</h1>
                </section>
                <div className="table" style={{
                    padding: "20px",
                    marginRight: "60px"
                
                }}>
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Kategori</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jasa Sondir</td>
                                <td>
                                    <button className="button is-small is-primary">Edit</button>
                                    <span> </span>
                                    <button className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jasa Boring</td>
                                <td>
                                    <button className="button is-small is-primary">Edit</button>
                                    <span> </span>
                                    <button className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Topografi</td>
                                <td>
                                    <button className="button is-small is-primary">Edit</button>
                                    <span> </span>
                                    <button className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Uji DCP</td>
                                <td>
                                    <button className="button is-small is-primary">Edit</button>
                                    <span> </span>
                                    <button className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Kategori;