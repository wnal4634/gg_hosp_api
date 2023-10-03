import React, { useEffect, useState } from "react";
import Hosp from "./Hosp";
import axios from "axios";

function App() {
    // 사용한거 공공데이터 오픈api, axios, CopyToClipboard
    const [loading, setLoading] = useState(true);
    const [hosp, setHosp] = useState([]);
    const [clickSigun, setClickSigun] = useState("");
    const API_KEY = process.env.REACT_APP_HOSP_API_KEY;
    const url = `https://openapi.gg.go.kr/CHSEMGNCYCENTER?KEY=${API_KEY}&Type=json&SIGUN_NM=${clickSigun}`;

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setHosp(res.data.CHSEMGNCYCENTER[1].row);
                setLoading(false);
            })
            .catch((e) => {
                console.log("실패");
                console.log(url);
            });
    }, [clickSigun]);

    const clickHandler = (params, e) => {
        e.preventDefault();
        setClickSigun(params);
    };

    return (
        <section className="container">
            {loading ? (
                <div className="loader">
                    <span className="loader_text">Loading...</span>
                </div>
            ) : (
                <div className="hosp">
                    <div className="sigun_button">
                        <button
                            onClick={(e) => {
                                clickHandler("", e);
                            }}
                        >
                            전체보기
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("고양시", e);
                            }}
                        >
                            고양시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("광명시", e);
                            }}
                        >
                            광명시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("광주시", e);
                            }}
                        >
                            광주시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("구리시", e);
                            }}
                        >
                            구리시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("군포시", e);
                            }}
                        >
                            군포시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("김포시", e);
                            }}
                        >
                            김포시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("남양주시", e);
                            }}
                        >
                            남양주시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("부천시", e);
                            }}
                        >
                            부천시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("성남시", e);
                            }}
                        >
                            성남시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("수원시", e);
                            }}
                        >
                            수원시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("시흥시", e);
                            }}
                        >
                            시흥시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("안산시", e);
                            }}
                        >
                            안산시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("안성시", e);
                            }}
                        >
                            안성시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("안양시", e);
                            }}
                        >
                            안양시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("양평군", e);
                            }}
                        >
                            양평군
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("여주시", e);
                            }}
                        >
                            여주시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("연천군", e);
                            }}
                        >
                            연천군
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("오산시", e);
                            }}
                        >
                            오산시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("용인시", e);
                            }}
                        >
                            용인시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("의왕시", e);
                            }}
                        >
                            의왕시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("의정부시", e);
                            }}
                        >
                            의정부시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("이천시", e);
                            }}
                        >
                            이천시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("파주시", e);
                            }}
                        >
                            파주시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("평택시", e);
                            }}
                        >
                            평택시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("포천시", e);
                            }}
                        >
                            포천시
                        </button>
                        <button
                            onClick={(e) => {
                                clickHandler("화성시", e);
                            }}
                        >
                            화성시
                        </button>
                    </div>
                    <div className="hosp_info">
                        {hosp.map((hos) => (
                            <Hosp
                                key={hos.MEDCARE_INST_NM}
                                SIGUN_NM={hos.SIGUN_NM}
                                MEDCARE_INST_NM={hos.MEDCARE_INST_NM}
                                DISTRCT_DIV_NM={hos.DISTRCT_DIV_NM}
                                REPRSNT_TELNO={hos.REPRSNT_TELNO}
                                REFINE_LOTNO_ADDR={hos.REFINE_LOTNO_ADDR}
                                REFINE_ROADNM_ADDR={hos.REFINE_ROADNM_ADDR}
                                EMGNCY_CENTER_TELNO={hos.EMGNCY_CENTER_TELNO}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default App;
