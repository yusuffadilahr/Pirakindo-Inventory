import React, {useState, useEffect} from "react";
import 'bulma/css/bulma.css';
import MenuSamping from "../../component/side-bar";

const Dashboard = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="columns is-gapless">
            <div className="column is-3">
                {/* Ini Side Bar */}
                <MenuSamping />
            </div>
            <div className="container" style={{
                padding: "20px",
                marginRight: "60px"
            }}>
                <div className="column">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <div className="title">Dashboard</div>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button type="button" className="button is-small">
                                    {currentTime.toLocaleDateString()} - {currentTime.toLocaleDateString()}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="columns is-multiline">
                        <div className="column">
                            <div className="box">
                                <div className="heading">Total Stock Alat Konstruksi</div>
                                <div className="title">100 Alat</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <div className="heading">Alat Konstruksi Masuk</div>
                                <div className="title">75 Alat</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <div className="heading">Alat Konstruksi Keluar</div>
                                <div className="title">25 Alat</div>
                            </div>
                        </div>
                    </div>

                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                    Expenses: Daily - $700
                                </p>
                                <div className="panel-block">
                                    <figure className="image is-16x9">
                                        <img src="https://placehold.it/1280x720" alt="Daily Expenses" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                    Refunds: Daily - $200
                                </p>
                                <div className="panel-block">
                                    <figure className="image is-16x9">
                                        <img src="https://placehold.it/1280x720" alt="Daily Refunds" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                    Something
                                </p>
                                <div className="panel-block">
                                    <figure className="image is-16x9">
                                        <img src="https://placehold.it/1280x720" alt="Something" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="panel">
                                <p className="panel-heading">
                                    Something Else
                                </p>
                                <div className="panel-block">
                                    <figure className="image is-16x9">
                                        <img src="https://placehold.it/1280x720" alt="Something Else" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;