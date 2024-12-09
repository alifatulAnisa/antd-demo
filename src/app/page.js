"use client";

import { PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useState, useEffect } from "react";
import axios from "axios"; 

export default function Home() {
  const [vehicles, setVehicles] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/vehicles")
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the vehicles!", error);
      });
  }, []);  

  const columns = [
    {
      title: "",
      dataIndex: "key",
    },
    {
      title: "Vehicle ID",
      dataIndex: "vehicleId",
      sorter: (a, b) => a.vehicleId.localeCompare(b.vehicleId),
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
      title: "Lock/Unlock",
      dataIndex: "lock",
      sorter: (a, b) => a.lock.localeCompare(b.lock),
    },
    {
      title: "Current Speed",
      dataIndex: "speed",
      sorter: (a, b) => a.speed.localeCompare(b.speed),
    },
    {
      title: "Battery Level",
      dataIndex: "batteryLevel",
      sorter: (a, b) => a.batteryLevel.localeCompare(b.batteryLevel),
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Location",
      dataIndex: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      sorter: (a, b) => a.lastUpdated.localeCompare(b.lastUpdated),
    },
  ];

  const tableData = vehicles.map((vehicle, index) => ({
    key: index + 1,
    vehicleId: vehicle.vehicleId,
    type: vehicle.type,
    lock: vehicle.lock,
    speed: vehicle.speed,
    batteryLevel: vehicle.batteryLevel,
    status: vehicle.status,
    location: vehicle.location,
    lastUpdated: vehicle.lastUpdated,
  }));

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "20px", backgroundColor: 'pink', padding: '10px' }}>
        <Title level={5}>Vehicle Management</Title>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          shape="round"
          style={{ backgroundColor: "pink", color: "#000", borderColor: "pink" }}
        >
          New Vehicle
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: 5 }}
        style={{ overflowX: "auto" }}
      />
    </div>
  );
}
