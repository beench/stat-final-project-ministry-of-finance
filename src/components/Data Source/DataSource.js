import React from "react";

export default class DataSource extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="description">
          data source
          <br />
          1.{" "}
          <a href="http://www.bb.go.th/topic-detail.php?id=6964&mid=545&catID=894">
            ข้อมูลงบประมาณรายปีของหน่วยงานย่อยในกระทรวงการคลัง
          </a>
          <br />
          2.{" "}
          <a href="http://dataservices.mof.go.th/Dataservices/GovernmentExpenditureEconomyMinistry">
            ข้อมูลงบประมาณรายเดือนของกระทรวงการคลัง
          </a>
          <br />
          3.{" "}
          <a href="http://dataservices.mof.go.th/Dataservices/GovernmentFinanceGFS1">
            ข้อมูลดุลการคลัง
          </a>
          <br />
          4.{" "}
          <a href="http://office.bangkok.go.th/budd/main/index.php?id=558&fbclid=IwAR1Bo_cR4BTjrBzI4Tg5L3wE2z_FEEdd4cwU-PgJlLh_nNKl3WFWLO1-MeU">
            ข้อมูลงบประมาณการคลังรายปีของจังหวัดกรุงเทพมหานคร
          </a>
        </div>
      </React.Fragment>
    );
  }
}
