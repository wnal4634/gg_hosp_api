import React from "react";

function Hosp({
    SIGUN_NM,
    MEDCARE_INST_NM,
    DISTRCT_DIV_NM,
    REPRSNT_TELNO,
    REFINE_LOTNO_ADDR,
    REFINE_ROADNM_ADDR,
    EMGNCY_CENTER_TELNO,
}) {
    return (
        <div>
            {SIGUN_NM}
            <br />
            {MEDCARE_INST_NM}
            <br />
            {DISTRCT_DIV_NM}
            <br />
            {REPRSNT_TELNO}
            <br />
            {REFINE_LOTNO_ADDR}
            <br />
            {REFINE_ROADNM_ADDR}
            <br />
            {EMGNCY_CENTER_TELNO}
            <br />
            <br />
        </div>
    );
}

export default Hosp;
