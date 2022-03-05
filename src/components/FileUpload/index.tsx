import React, { useRef, useState } from 'react'

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000000

const convertNestedObjectToArray = (nestedObj) => Object.keys(nestedObj).map((key) => nestedObj[key])

type Props = {
  label?: string
  maxFileSizeInBytes?: number
  accept?: string
  multiple?: boolean
  updateFilesCb: (file) => void
}

const FileUpload: React.FC<Props> = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null)
  const [files, setFiles] = useState({})

  const handleUploadBtnClick = () => {
    fileInputField.current.click()
  }

  const addNewFiles = (newFiles) => {
    for (const file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file }
        }
        files[file.name] = file
      }
    }
    return { ...files }
  }

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files)
    updateFilesCb(filesAsArray)
  }

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target
    if (newFiles.length) {
      const updatedFiles = addNewFiles(newFiles)
      setFiles(updatedFiles)
      callUpdateFilesCb(updatedFiles)
    }
  }

  const removeFile = (fileName) => {
    delete files[fileName]
    setFiles({ ...files })
    callUpdateFilesCb({ ...files })
  }
  console.log('file', files)

  return (
    <section className="file-upload-container">
      <label className="input-label">{label}</label>
      <button className="upload-file-btn" onClick={handleUploadBtnClick}>
        <img src="/assets/img/feed/image.svg" />
      </button>
      <p className="drag-drop-text">Add Photos & Videos</p>
      <p className="drag-drop-text-sm">Or drag and drop it</p>

      <input className="form-field" type="file" ref={fileInputField} onChange={handleNewFileUpload} {...otherProps} />

      <article className="file-preview-container">
        <section className="preview-list">
          {Object.keys(files).map((fileName, index) => {
            const file = files[fileName]
            const isImageFile = file.type.split('/')[0] === 'image'

            return (
              <section className="preview-container" key={fileName}>
                <div>
                  {isImageFile ? (
                    <img className="img-preview" src={URL.createObjectURL(file)} alt={`file preview ${index}`} />
                  ) : (
                    <video width="400">
                      <source src={URL.createObjectURL(file)} id="video_here" />
                      Your browser does not support HTML5 video.
                    </video>
                  )}
                  <div className={`file-meta-data ${isImageFile ? 'd-none' : 'd-flex'}`}>
                    <span>{file.name}</span>
                    <aside>
                      <i className="delete-icon remove-file-icon" onClick={() => removeFile(fileName)}>
                        Delete
                      </i>
                    </aside>
                  </div>
                </div>
              </section>
            )
          })}
        </section>
      </article>
    </section>
  )
}

export default FileUpload
