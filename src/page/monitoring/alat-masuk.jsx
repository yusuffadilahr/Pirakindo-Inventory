import React from "react";
import 'bulma/css/bulma.css'
import MenuSamping from "../../component/side-bar";

const Alat_Masuk = () => {

    return (
        <div className="columns is-gapless">
            <div className="column is-3">

                {/* Ini Side Bar */}
                <MenuSamping />

            </div>
            <div className="column">
                <section className="section">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <h1 className="title">Alat Masuk</h1>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <a href="/monitoring/alat-keluar/report" className="button is-primary">Report Alat Masuk</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="table" style={{
                    marginRight: "60px"

                }}>
                    <table className="table is-fullwidth">
                        <thead>
                            <tr style={{
                                fontSize: "12px"
                            }}>
                                <th>No</th>
                                <th>Nama Alat</th>
                                <th>Tanggal Masuk</th>
                                <th>Nama Pengembali</th>
                                <th>Jumlah</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jasa Sondir</td>
                                <td>12/12/2021</td>
                                <td>PT. ABC</td>
                                <td>1</td>
                                <td>Belum Kembali</td>
                                <td>
                                    <button className="button is-small is-primary">Edit</button>
                                    <span> </span>
                                    <button className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jasa Boring</td>
                                <td>12/12/2021</td>
                                <td>PT. DEF</td>
                                <td>2</td>
                                <td>Belum Kembali</td>
                                <td>
                                    <button className="button is-small is-primary">Edit</button>
                                    <span> </span>
                                    <button className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Topografi</td>
                                <td>12/12/2021</td>
                                <td>PT. GHI</td>
                                <td>3</td>
                                <td>Belum Kembali</td>
                                <td>
                                    <button className="button is-small is-primary">Edit</button>
                                    <span> </span>
                                    <button className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Uji DCP</td>
                                <td>12/12/2021</td>
                                <td>PT. JKL</td>
                                <td>4</td>
                                <td>Belum Kembali</td>
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

export default Alat_Masuk;