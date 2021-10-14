import { useState, useEffect } from "react";
import { backendUrl } from "../config/url";
import moment from "moment";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${backendUrl}/api/projects`)
      .then((res) => res.json())
      .then((pjs) => {
        setProjects(
          pjs.map((pj) => ({
            ...pj,
            key: pj.projectId,
            startDate: moment(pj.startDate).format("YYYY-MM-DD"),
            endDate: moment(pj.endDate).format("YYYY-MM-DD"),
            completedRate: pj.completedRate + "%",
          }))
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return { projects, isLoading };
};
