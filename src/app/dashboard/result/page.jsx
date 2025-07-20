// ============================================================================
// pages/marks-entry.jsx
// ----------------------------------------------------------------------------
// Mark‑entry sheet using DaisyUI’s “advanced table” demo wrapper.
// ----------------------------------------------------------------------------
"use client";
import React, { useState } from "react";

const MarksEntry = () => {
  const subjects = [
    "Bangla",
    "English",
    "Math",
    "Bangladesh & Global Studies",
    "Science",
    "Religious",
    "ICT",
  ];

  const initialStudents = [
    { name: "Rahim", roll: 1, section: "A", className: "10" },
    { name: "Rasel", roll: 2, section: "A", className: "10" },
    { name: "Sharif", roll: 3, section: "B", className: "10" },
    { name: "Sadaq", roll: 4, section: "B", className: "10" },
    { name: "Maruf", roll: 5, section: "B", className: "10" },
  ];

  const [rows, setRows] = useState(
    initialStudents.map((stu) => ({
      ...stu,
      id: crypto.randomUUID(),
      subjects: Object.fromEntries(subjects.map((s) => [s, ""])),
    }))
  );

  const handleChange = (e, rowId, subject) => {
    const value = e.target.value;
    setRows((prev) =>
      prev.map((row) =>
        row.id === rowId
          ? {
            ...row,
            subjects: {
              ...row.subjects,
              [subject]: value === "" ? "" : Number(value),
            },
          }
          : row
      )
    );
  };

  const calcTotal = (row) => {
    const marks = Object.values(row.subjects).filter((m) => m !== "");
    return marks.reduce((a, b) => a + b, 0);
  };

  const calcAverage = (row) => {
    const marks = Object.values(row.subjects).filter((m) => m !== "");
    return marks.length ? calcTotal(row) / marks.length : 0;
  };

  const getLetterGrade = (score) => {
    if (score >= 80) return "A+";
    if (score >= 70) return "A";
    if (score >= 60) return "A-";
    if (score >= 50) return "B";
    if (score >= 40) return "C";
    if (score >= 33) return "D";
    return "F";
  };

  return (
    <div className="container mx-auto px-4 py-6 overflow-auto w-full">
      <h1 className="mb-4 text-2xl font-semibold">Mark Entry Sheet</h1>

      <div className="w-96 rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Roll</th>
              <th>Section</th>
              <th>Class</th>
              {subjects.map((sub) => (
                <th key={sub} className="text-center whitespace-nowrap">{sub}</th>
              ))}
              <th className="text-center">Total</th>
              <th className="text-center">Grade</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id} className="hover">
                <th>{idx + 1}</th>
                <td>{row.name}</td>
                <td>{row.roll}</td>
                <td>{row.section}</td>
                <td>{row.className}</td>
                {subjects.map((sub) => (
                  <td key={sub} className="text-center">
                    <input
                      type="number"
                      className="input input-bordered input-sm w-20"
                      placeholder="mark"
                      value={row.subjects[sub]}
                      onChange={(e) => handleChange(e, row.id, sub)}
                      min={0}
                      max={100}
                    />
                  </td>
                ))}
                <td className="text-center font-medium">{calcTotal(row)}</td>
                <td className="text-center font-medium">
                  {getLetterGrade(calcAverage(row))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Scrollable wrapper */}

    </div>

  );
};

export default MarksEntry;
