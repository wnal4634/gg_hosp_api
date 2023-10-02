import React, { useEffect } from "react";

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
        <div>
            {SIGUN_NM}
            <br />
            {MEDCARE_INST_NM}
            <br />
            {DISTRCT_DIV_NM}
            <br />
            지번주소:
            {REFINE_LOTNO_ADDR}
            <br />
            도로명주소: {REFINE_ROADNM_ADDR}
            <br />
            대표전화번호: {REPRSNT_TELNO}
            <br />
            응급센터전화번호: {EMGNCY_CENTER_TELNO}
            <br />
            <a
                target="_blank"
                href={`https://map.naver.com/p/search/${REFINE_ROADNM_ADDR}`}
            >
                지도보기
            </a>
            <br />
            <br />
        </div>
    );
}

export default Hosp;
