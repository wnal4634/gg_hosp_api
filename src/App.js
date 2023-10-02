import React, { useEffect, useState } from "react";
import Hosp from "./Hosp";
import axios from "axios";
import Select from "react-select";

function App() {
    const [loading, setLoading] = useState(true);
    const [hosp, setHosp] = useState([]);
    const [clickSigun, setClickSigun] = useState("");
    const API_KEY = process.env.REACT_APP_HOSP_API_KEY;
    const url = `https://openapi.gg.go.kr/CHSEMGNCYCENTER?KEY=${API_KEY}&Type=json&SIGUN_NM=${clickSigun}`;

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                console.log(res.data.CHSEMGNCYCENTER[1].row);
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
        console.log(params);
        setClickSigun(params);
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: "", label: "--전체보기--" },
        { value: "고양시", label: "고양시" },
        { value: "광명시", label: "광명시" },
        { value: "광주시", label: "광주시" },
        { value: "구리시", label: "구리시" },
        { value: "군포시", label: "군포시" },
        { value: "김포시", label: "김포시" },
        { value: "남양주시", label: "남양주시" },
        { value: "부천시", label: "부천시" },
        { value: "성남시", label: "성남시" },
        { value: "수원시", label: "수원시" },
        { value: "시흥시", label: "시흥시" },
        { value: "안산시", label: "안산시" },
        { value: "안성시", label: "안성시" },
        { value: "안양시", label: "안양시" },
        { value: "양평군", label: "양평군" },
        { value: "여주시", label: "여주시" },
        { value: "연천군", label: "연천군" },
        { value: "오산시", label: "오산시" },
        { value: "용인시", label: "용인시" },
        { value: "의왕시", label: "의왕시" },
        { value: "의정부시", label: "의정부시" },
        { value: "이천시", label: "이천시" },
        { value: "파주시", label: "파주시" },
        { value: "평택시", label: "평택시" },
        { value: "포천시", label: "포천시" },
        { value: "화성시", label: "화성시" },
    ];

    // const SelectBox = (props) => {
    //     const handleChange = (e) => {
    //         // event handler
    //         e.preventDefault();
    //         console.log(e.target.value);
    //         setClickSigun(e.target.value);
    //     };

    //     return (
    //         <select onChange={handleChange}>
    //             {props.options.map((option) => (
    //                 <option
    //                     key={option.value}
    //                     value={option.value}
    //                     defaultValue={props.defaultValue === option.value}
    //                 >
    //                     {option.label}
    //                 </option>
    //             ))}
    //         </select>
    //     );
    // };

    return (
        <section className="container">
            {loading ? (
                <div className="loader">
                    <span className="loader_text">Loading...</span>
                </div>
            ) : (
                <div>
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
                    <div className="dustInfo">
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
