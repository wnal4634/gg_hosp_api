import React, { useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

const { kakao } = window;

function Hosp({
    SIGUN_NM,
    MEDCARE_INST_NM,
    DISTRCT_DIV_NM,
    REPRSNT_TELNO,
    REFINE_LOTNO_ADDR,
    REFINE_ROADNM_ADDR,
    EMGNCY_CENTER_TELNO,
}) {
    // useEffect(() => {
    //     const container = document.getElementById("map");
    //     const options = {
    //         center: new kakao.maps.LatLng(REFINE_WGS84_LAT, REFINE_WGS84_LOGT),
    //         level: 3,
    //     };

    //     const map = new kakao.maps.Map(container, options);
    //     const markerPosition = new kakao.maps.LatLng(
    //         REFINE_WGS84_LAT,
    //         REFINE_WGS84_LOGT,
    //     );
    //     const marker = new kakao.maps.Marker({
    //         position: markerPosition,
    //     });
    //     marker.setMap(map);
    // }, []);

    return (
        <div className="hosp_wrap">
            <div>
                {SIGUN_NM} {DISTRCT_DIV_NM}
                <div className="hosp_name">{MEDCARE_INST_NM}</div>
                <div>
                    <div className="hosp_add">
                        지번 <div>{REFINE_LOTNO_ADDR}</div>
                    </div>
                    <div className="hosp_add">
                        도로명 <div>{REFINE_ROADNM_ADDR}</div>
                    </div>
                </div>
                <div className="hosp_tel">
                    Tel. {REPRSNT_TELNO}
                    <br />
                    Emerg center Tel. {EMGNCY_CENTER_TELNO}
                </div>
            </div>
            <div className="hosp_url">
                <div>
                    <CopyToClipboard
                        className="copy"
                        text={REPRSNT_TELNO}
                        onCopy={() => alert("번호가 복사되었습니다.")}
                    >
                        <text>번호 복사</text>
                    </CopyToClipboard>
                </div>
                <a
                    target="_blank"
                    href={`https://map.naver.com/p/search/${REFINE_ROADNM_ADDR}`}
                >
                    지도보기 <FontAwesomeIcon icon={faChevronRight} />
                </a>
            </div>
        </div>
    );
}

export default Hosp;
