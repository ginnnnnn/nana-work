import React from "react";
import { NavLink } from "react-router-dom";
import { Table, Button } from "antd";
import { Typography } from "antd";
import styles from "./projects-preview.module.css";
import { useProjects } from "../../hooks/useProjects";
import moment from "moment";
const { Title } = Typography;

const columns = [
  {
    title: "專案名稱",
    dataIndex: "projectName",
    width: 300,
  },
  {
    title: "承攬廠商",
    dataIndex: "supplierName",
    width: 300,
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "開始日期",
    dataIndex: "startDate",
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      moment(a.startDate).valueOf() - moment(b.startDate).valueOf(),
  },
  {
    title: "結束日期",
    dataIndex: "endDate",
    defaultSortOrder: "descend",
    sorter: (a, b) => moment(a.endDate).valueOf() - moment(b.endDate).valueOf(),
  },
  {
    title: "完成度",
    dataIndex: "completedRate",
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      +a.completedRate.replace("%", "") - +b.completedRate.replace("%", ""),
  },
];
const ProjectsPreview = () => {
  const { projects, isLoading } = useProjects();
  return (
    <div className={styles.container}>
      <Title level={2}>工程日誌</Title>
      <NavLink to="/project/create"></NavLink>
      <Table columns={columns} dataSource={projects} />
    </div>
  );
};

export default ProjectsPreview;
