//365.242199
//30.4368499
function convert() {
    const start_year = document.getElementById('input_y_s').value * 1
    const start_month = document.getElementById('input_m_s').value * 1
    const start_day = document.getElementById('input_d_s').value * 1
    const end_year = document.getElementById('input_y_e').value * 1
    const end_month = document.getElementById('input_m_e').value * 1
    const end_day = document.getElementById('input_d_e').value * 1

    const sum_dmy = (end_year - start_year) * 365.242199 + (end_month - start_month) * 30.4368499 + (end_day - start_day)
    const ccl_year = sum_dmy / 365.242199
    const ccl_month = sum_dmy / 30.4368499

    document.getElementById('result_sum_year').innerHTML = ccl_year + " ปี"
    document.getElementById('result_sum_month').innerHTML = ccl_month + " เดือน"
    document.getElementById('result_sum_day').innerHTML = sum_dmy + " วัน"


    const ov_y = sum_dmy / 365.242199
    const floor_ov_y = Math.floor(ov_y)
    const ov_m = (sum_dmy - (floor_ov_y * 365.242199)) / 30.4368499
    const floor_ov_m = Math.floor(ov_m)
    const ov_d = sum_dmy % 30.4368499
    const floor_ov_d = Math.floor(ov_d)

    document.getElementById('result_year').innerHTML = floor_ov_y + " ปี กับ"
    document.getElementById('result_month').innerHTML = floor_ov_m + " เดือน และ"
    document.getElementById('result_day').innerHTML = floor_ov_d + " วัน"
}
