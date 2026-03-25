import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const studentsMarks = [
  { id: 1, name: "Student 1", bangla: 75, english: 68, math: 82, biology: 70, chemistry: 65 },
  { id: 2, name: "Student 2", bangla: 80, english: 72, math: 78, biology: 74, chemistry: 69 },
  { id: 3, name: "Student 3", bangla: 65, english: 60, math: 70, biology: 68, chemistry: 62 },
  { id: 4, name: "Student 4", bangla: 88, english: 85, math: 90, biology: 86, chemistry: 84 },
  { id: 5, name: "Student 5", bangla: 70, english: 66, math: 75, biology: 72, chemistry: 68 },
  { id: 6, name: "Student 6", bangla: 92, english: 89, math: 95, biology: 91, chemistry: 90 },
  { id: 7, name: "Student 7", bangla: 60, english: 58, math: 65, biology: 63, chemistry: 59 },
  { id: 8, name: "Student 8", bangla: 78, english: 74, math: 80, biology: 76, chemistry: 73 },
  { id: 9, name: "Student 9", bangla: 85, english: 82, math: 48, biology: 84, chemistry: 81 },
  { id: 10, name: "Student 10", bangla: 68, english: 64, math: 52, biology: 69, chemistry: 66 },
  { id: 11, name: "Student 11", bangla: 90, english: 87, math: 43, biology: 89, chemistry: 88 },
  { id: 12, name: "Student 12", bangla: 72, english: 69, math: 76, biology: 73, chemistry: 70 },
  { id: 13, name: "Student 13", bangla: 66, english: 62, math: 71, biology: 67, chemistry: 64 },
  { id: 14, name: "Student 14", bangla: 83, english: 79, math: 85, biology: 81, chemistry: 78 },
  { id: 15, name: "Student 15", bangla: 77, english: 73, math: 79, biology: 75, chemistry: 72 }
];



const ResultsChart = () => {
    return (
        <div>
            <LineChart width={1000} height={600} data={studentsMarks}>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'bangla'} stroke='green'></Line>
                <Line dataKey={'english'} stroke='blue'></Line>

                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>

            </LineChart>
        </div>
    );
};

export default ResultsChart;