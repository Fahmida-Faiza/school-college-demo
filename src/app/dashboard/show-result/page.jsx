
"use client";
import React, { useMemo } from "react";

const getLetterGrade = (score) => {
  if (score >= 80) return "A+";
  if (score >= 70) return "A";
  if (score >= 60) return "A-";
  if (score >= 50) return "B";
  if (score >= 40) return "C";
  if (score >= 33) return "D";
  return "F";
};

const student = {
  name: "Rahim Uddin",
  className: "10",
  roll: 5,
  section: "A",
  ranking: 3,
};

const marks = [
  { subject: "Math", mark: 85 },
  { subject: "English", mark: 78 },
  { subject: "Physics", mark: 92 },
  { subject: "Chemistry", mark: 68 },
  { subject: "Biology", mark: 74 },
];

const Page = () => {
  const { total, avg } = useMemo(() => {
    const totalScore = marks.reduce((acc, m) => acc + m.mark, 0);
    return {
      total: totalScore,
      avg: marks.length ? totalScore / marks.length : 0,
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-report,
          #printable-report * {
            visibility: visible;
          }
          #printable-report {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            -webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            margin: 0 auto;
            font-size: 12pt;
            page-break-inside: avoid;
          }
        }
      `}</style>

      <div
        id="printable-report"
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6"
      >
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-center text-indigo-700">
            📘 Student Report Card
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Student Info */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <h2 className="text-xl font-semibold text-indigo-600 border-b pb-2">
                🎓 Student Information
              </h2>
              <ul className="space-y-1 text-gray-700 text-base">
                <li>
                  <span className="font-medium">Name:</span> {student.name}
                </li>
                <li>
                  <span className="font-medium">Class:</span> {student.className}
                </li>
                <li>
                  <span className="font-medium">Roll:</span> {student.roll}
                </li>
                <li>
                  <span className="font-medium">Section:</span> {student.section}
                </li>
                <li>
                  <span className="font-medium">Ranking:</span> {student.ranking}
                </li>
              </ul>
            </div>

            {/* Marks Table */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
              <h2 className="text-xl font-semibold text-indigo-600 border-b pb-2 mb-4">
                📝 Marks & Grades
              </h2>
              <table className="w-full text-left table-auto border-separate border-spacing-y-2">
                <thead>
                  <tr>
                    <th className="p-2">Subject</th>
                    <th className="p-2 text-center">Mark</th>
                    <th className="p-2 text-center">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {marks.map(({ subject, mark }) => (
                    <tr
                      key={subject}
                      className="bg-gray-50 hover:bg-indigo-50 transition rounded-md"
                    >
                      <td className="p-2 font-medium">{subject}</td>
                      <td className="p-2 text-center">{mark}</td>
                      <td className="p-2 text-center">{getLetterGrade(mark)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-indigo-200 font-semibold text-indigo-900 rounded-md">
                    <td className="p-2">Total / Average</td>
                    <td className="p-2 text-center">{total}</td>
                    <td className="p-2 text-center">{getLetterGrade(avg)}</td>
                  </tr>
                </tfoot>
              </table>

              {/* Signature Fields */}
              <div className="mt-10 flex justify-between">
                <div className="flex flex-col items-center w-1/3">
                  <div className="border-b-2 border-gray-600 w-full" style={{ minHeight: "3rem" }}></div>
                  <span className="mt-2 text-sm text-gray-700">Teacher&apos;s Signature</span>
                </div>

                <div className="flex flex-col items-center w-1/3">
                  <div className="border-b-2 border-gray-600 w-full" style={{ minHeight: "3rem" }}></div>
                  <span className="mt-2 text-sm text-gray-700">Parent&apos;s Signature</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
