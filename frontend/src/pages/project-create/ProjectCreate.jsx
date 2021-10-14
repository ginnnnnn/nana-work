import React from "react";

import GeneralInfo from "./components/GeneralInfo";
import PlanDetail from "./components/PlanDetail";
import styles from "./project-create.module.css";

//antd
import { Typography } from "antd";

const { Title } = Typography;

const ProjectCreate = () => {
  return (
    <div className={styles.container}>
      <Title level={2}>新增工程計畫</Title>
      <GeneralInfo />
    </div>
  );
};

export default ProjectCreate;
