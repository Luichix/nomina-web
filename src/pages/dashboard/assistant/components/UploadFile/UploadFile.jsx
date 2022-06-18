import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUpload, FaFileCsv } from 'react-icons/fa'
import Button from '../../../../../components/common/Button'
import { uploadIntentFile } from '../../../../../services/api/assistant.api'
import styles from '../../Assistant.module.css'

const UploadFile = () => {
  const [fileName, setFileName] = useState('Upload CSV')

  const [array, setArray] = useState([])
  const [file, setFile] = useState(null)

  const [message, setMessage] = useState(null)
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      if (/(\.csv)$/.test(event.target.files[0].name) === true) {
        setFile(event.target.files)
        setFileName(event.target.files[0].name)
        previewFile(event.target.files[0])
      } else {
        setFile(null)
        setFileName('Upload File')
      }
    } else {
      setFile(null)
      setFileName('Upload File')
    }
  }

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',')
    const csvRows = string.slice(string.indexOf('\n') + 1).split('\n')

    const array = csvRows.map((i) => {
      const values = i.split(',')
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index]
        return object
      }, {})
      return obj
    })

    setArray(array)
  }

  const previewFile = (file) => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const text = reader.result
        csvFileToArray(text)
      }
      reader.readAsText(file)
    }
  }

  const handleSubmitFile = (event) => {
    event.preventDefault()
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        uploadFileCSV(reader.result)
      }
      reader.readAsText(file[0])
      reader.onerror = () => {
        console.error('Error while reading file')
        setMessage('something went wrong!')
      }
    }
  }

  const headerKeys = Object.keys(Object.assign({}, ...array))

  const uploadFileCSV = async (file) => {
    const fileObject = {
      data: file,
    }

    await uploadIntentFile(fileObject).then((res) => {
      if (res.status === 200) {
        setMessage('File uploaded successfully!')
      } else {
        setMessage('Something went wrong!')
      }
    })
    console.log(message)
    // REVIEW - Add a message to the user
  }
  return (
    <div>
      <div className={styles.section}>
        <h3 className={styles.title}> Assistant Training file</h3>
        <div className={styles.group}>
          <h4 className={styles.subtitle}>Assistant Training file</h4>
          <p className={styles.text}>
            Remember to upload the file in csv format, or if you require it you
            can consult &nbsp;
            <Link to="/account" className={styles.link}>
              more information...
            </Link>
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmitFile}>
          <fieldset className={styles.fieldset}>
            <input
              type="file"
              name="file"
              className={styles.hidden}
              id="file"
              onChange={handleFileChange}
              accept=".csv"
            />
            <label htmlFor="file" className={styles.labelInput}>
              {!file ? (
                <FaUpload className="mx-2 text-base" />
              ) : (
                <FaFileCsv className="mx-2 text-base" />
              )}
              {fileName}
            </label>
          </fieldset>
          <Button info="primary" size="large" style={styles.position}>
            Send File
          </Button>
        </form>
      </div>
      {file && (
        <div className="  w-full bg-white shadow-md  p-6 rounded-md mb-6">
          <h2 className=" text-gray-700 font-semibold pb-2 text-lg">
            Data View
          </h2>
          <table className="w-full border-collapse">
            <thead className="border-2">
              <tr>
                {headerKeys.map((key, index) => (
                  <th
                    key={index}
                    className="border-2 text-center p-1 bg-gray-100 font-semibold"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="border-2">
              {array.slice(0, 10).map((item, index) => (
                <tr key={index} className="even:bg-gray-100">
                  {Object.values(item).map((val, index) => (
                    <td
                      key={index}
                      className="border-1 text-sm text-center p-1 "
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default UploadFile
