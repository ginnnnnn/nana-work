import React, { useState } from "react";
import { Form, Input, Select, DatePicker, InputNumber, Divider } from "antd";

const PLAN_OPTIONS = [
  { id: "plan-option-1", name: "假設工程", unit: "式" },
  {
    id: "plan-option-2",
    name: "現有溫室內外雜物,RC地坪及骨架,基座拆除運棄",
    unit: "式",
  },
  { id: "plan-option-3", name: "地面及高空作業安全防護措施", unit: "式" },
  { id: "plan-option-4", name: "重機械搬運", unit: "式" },
  {
    id: "plan-option-5",
    name: "新增RC地坪",
    unit: "m²",
  },
  { id: "plan-option-6", name: "戶外路面回填土整地夯實", unit: "式" },
  { id: "plan-option-7", name: "新設W:54cmRC水溝", unit: "m" },
  {
    id: "plan-option-8",
    name: "新設熱浸鍍鋅格柵蓋板組(含防蟲蚊面板)",
    unit: "組",
  },
  { id: "plan-option-9", name: "柱基座開挖,新設及底板加工鎖固", unit: "座" },
  { id: "plan-option-10", name: "柱基座底板加工鎖固", unit: "座" },
  { id: "plan-option-11", name: "筋M16化學錨栓", unit: "支" },
  { id: "plan-option-12", name: "鋼骨加工及組立", unit: "T" },
  { id: "plan-option-13", name: "鋼骨配件,五金", unit: "式" },
  {
    id: "plan-option-14",
    name: "屋面附彩色鋼板",
    unit: "m²",
  },
  { id: "plan-option-15", name: "屋頂鋼板收邊(含部分缺口)", unit: "m" },
  { id: "plan-option-16", name: "新設不鏽鋼門H:210*W:120cm", unit: "檔" },
  {
    id: "plan-option-17",
    name: "磚砌水槽H:20cm(面1:3水泥砂漿粉刷)",
    unit: "處",
  },
  { id: "plan-option-18", name: '新設16"天花板旋轉風扇', unit: "組" },
  {
    id: "plan-option-19",
    name: "水電工程(含給,排水,電力管線設備施工安裝)",
    unit: "式",
  },
  { id: "plan-option-20", name: "既有空地整地,植生雜物清運", unit: "式" },
  { id: "plan-option-21", name: "土地開挖及回填或合法清運", unit: "式" },
  {
    id: "plan-option-22",
    name: "基層級配夯實 TH:15cm",
    unit: "m²",
  },
  {
    id: "plan-option-23",
    name: "新增植草磚(含植草皮)",
    unit: "m²",
  },
  { id: "plan-option-24", name: "新增水泥界石收編樹穴", unit: "m" },
  { id: "plan-option-25", name: "原有設施破壞復原", unit: "式" },
];
const INIT_PLAN_STATE = PLAN_OPTIONS.reduce((acc, curr) => {
  acc[curr.id] = 0;
  return acc;
}, {});

const GeneralInfo = () => {
  const [projectName, setProjectName] = useState("");
  const [supplier, setSupplier] = useState("");

  const [planDetail, setPlanDetail] = useState(INIT_PLAN_STATE);
  console.log(planDetail);
  return (
    <>
      <Divider />
      <div style={{ width: "100%" }}>
        <Form.Item label="工程名稱">
          <Input />
        </Form.Item>
        <Form.Item label="承攬廠商名稱">
          <Select value={supplier} onChange={(v) => setSupplier(v)}>
            <Select.Option value="company-1">
              和碁營造股份有限公司
            </Select.Option>
          </Select>
        </Form.Item>
        <div style={{ display: "flex", gap: "3rem" }}>
          <Form.Item label="開工日期">
            <DatePicker onChange={(v) => console.log(v)} />
          </Form.Item>
          <Form.Item label="完工日期">
            <DatePicker />
          </Form.Item>
          <Form.Item label="預計天數">
            <InputNumber />
          </Form.Item>
        </div>
        <Divider />
        {PLAN_OPTIONS.map(({ id, name, unit }, index) => (
          <Form.Item key={id} label={index + 1 + " - " + name + ` / (${unit})`}>
            <InputNumber
              min="0"
              defaultValue="0"
              value={planDetail[id]}
              onChange={(v) =>
                setPlanDetail((pre) => {
                  return { ...pre, [id]: v };
                })
              }
            />
          </Form.Item>
        ))}
      </div>
    </>
  );
};

export default GeneralInfo;
