import user from '../models/user.mjs';
import excelToJson from 'convert-excel-to-json';

const importEmployee = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded!' });
    }
    const filePath = req.file.path;

    const excelData = excelToJson({
      sourceFile: filePath,
      sheets: [{
        name: "employeeData",
        header: {
          rows: 1
        },
        columnToKey: {
          A: 'name',
          B: 'email',
          C: "address",
          D: 'mobileNumber'
        }
      }]
    });

    const employeeData = excelData.employeeData; 

    await user.insertMany(employeeData);

    res.status(200).json({ message: 'Data uploaded successfully!' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Server error!' });
  }
};

export default { importEmployee };