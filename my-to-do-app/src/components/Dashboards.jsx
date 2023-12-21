import React, { useState } from "react";
import styled from "styled-components";
//import Button from "./Button.jsx";
import Cards from "./Cards.jsx";

const Dashboard = styled.div`
    display: flex;
`;

const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    overflow-x: auto;
    width: 100%;
    padding: 40px;
    align-items:flex-start;
    //background-color: #e9c46a;
    background-color: rgba(233, 196, 106, 0.5);
`;

let dashboards = [{ dashboardName: "Untitled dashboard", cards: [] }]; // ne uressel kezdjen
//let dashboards = []; // igy uressel kezd

const Dashboards = () => {
    // const [dashboardsCount, SetDashboardsCount] = useState(dashboards.length);

    return (
        <Dashboard className="dashboard_container">
            {[...dashboards].map((x, i) => (
                <Container key={"dashboard" + i}>
                    <input className="dashboardInput"
                        defaultValue={x.dashboardName}
                        type="text"
                        onChange={(e) => x.dashboardName = e.target.value}
                    ></input>
                    <Cards dashboard={x}></Cards>
                </Container>
            ))}

            {/* <Button
                name={"+"}
                onClick={() => {
                    dashboards = [...dashboards, { dashboardName: "Untitled dashboard", cards: [] }];
                    SetDashboardsCount(dashboards.length);
                }}
            /> */}
        </Dashboard>
    );
};

export default Dashboards;
