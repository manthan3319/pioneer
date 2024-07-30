import React from "react";
import Title from "../Function/Function";
import { bgtechnology } from "../../images/Images";

const Home_Machinery = () => {
  const tabledata = [
    {
      id: 1,
      name: "Diesel Driven Air Compressor 300 CFM",
      makeby: "ELGI",
      modelno: "DT 300-100",
      qty: "3",
    },
    {
      id: 2,
      name: "Diesel Driven Air Compressor 250 CFM",
      makeby: "Atlas Copco",
      modelno: "VT-5",
      qty: "2",
    },
    {
      id: 3,
      name: "Blasting Hopper (500 Kg Capicity)",
      makeby: "-",
      modelno: "-",
      qty: "10",
    },
    {
      id: 4,
      name: "Airless Spray Pump",
      makeby: "Hasco",
      modelno: "63-1",
      qty: "3",
    },
    {
      id: 5,
      name: "Water Jet Pump",
      makeby: "-",
      modelno: "160 Bar",
      qty: "3",
    },
    {
      id: 6,
      name: "Electrical Grinder",
      makeby: "Bosch",
      modelno: "-",
      qty: "15",
    },
    {
      id: 7,
      name: "Pnumatic Chipper",
      makeby: "Ngersoll Rand",
      modelno: "172L",
      qty: "10",
    },
    {
      id: 8,
      name: "Hygrometer",
      makeby: "-",
      modelno: "-",
      qty: "4",
    },
    {
        id: 9,
        name: "Surface Profile Gauge",
        makeby: "Elcometer",
        modelno: "-",
        qty: "4",
      },
      {
        id: 10,
        name: "Wet Film Thickness Gauge",
        makeby: "Elcometer",
        modelno: "-",
        qty: "15",
      },
      {
        id: 11,
        name: "Coating Thickness Gauge",
        makeby: "Elcometer",
        modelno: "456",
        qty: "4",
      },
      {
        id: 12,
        name: "Adhesion Tape",
        makeby: "Elcometer",
        modelno: "As Per ISO 3359",
        qty: "2",
      },
      {
        id: 13,
        name: "Surface Roughness Comparator",
        makeby: "Elcometer",
        modelno: "-",
        qty: "2",
      },

  ];

  return (
    <div
      className="relative md:mt-[80px] bg-cover bg-center bg-no-repeat py-[20px]"
      style={{ backgroundImage: `url(${bgtechnology})`, minHeight: "100%" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative lg:max-w-[1440px] m-auto px-4">
        <div className="text-center mb-[20px]">
          <h1 className="border-b-[2px] inline-block border-customRed">
            <Title subtitle="Our Machineries" subtitleColor="white" />
          </h1>
        </div>

        <div className="overflow-x-auto md:mt-[50px]">
          <table className="w-full text-left text-white bg-gray-800 bg-opacity-75 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-600">Sr.no</th>
                <th className="py-2 px-4 border-b border-gray-600">
                  Machine Name
                </th>
                <th className="py-2 px-4 border-b border-gray-600">Make by</th>
                <th className="py-2 px-4 border-b border-gray-600">Model No</th>
                <th className="py-2 px-4 border-b border-gray-600">Qty</th>
              </tr>
            </thead>
            <tbody>
              {tabledata.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b border-gray-800">
                    {item.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-800">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-800">
                    {item.makeby}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-800">
                    {item.modelno}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-800">
                    {item.qty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home_Machinery;
