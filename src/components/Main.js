import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'
import FileModal from './FileModal'
import './Main.css';
class Main extends Component {

  render() {
    return (
      <div className='Main'>
        <div className='box'>
        <div className="container">
        <div className="row">
          <div role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                <h2 className="text-white text-monospace bg-dark"><b>Upload File</b></h2>
                  
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="Description..."
                            required />
                      </div>
                      {/* <br></br> */}
                      
                    <input type="file"  onChange={this.props.captureFile} className="text-white text-monospace"/>
                    <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
              </div>
              <FileModal/>
              <p>&nbsp;</p>
              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15 px' }}>
                  <tr className="bg-light text-dark">
                    <th scope="col" style={{ width: '10px'}}>ID</th>
                    <th scope="col" style={{ width: '200px'}}>NAME</th>
                    <th scope="col" style={{ width: '230px'}}>DESCRIPTION</th>
                    <th scope="col" style={{ width: '120px'}}>TYPE</th>
                    <th scope="col" style={{ width: '90px'}}>SIZE</th>
                    <th scope="col" style={{ width: '90px'}}>DATE</th>
                    <th scope="col" style={{ width: '120px'}}>VIEW</th>
                    <th scope="col" style={{ width: '120px'}}>HASH</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '14px' }} key={key}>
                      <tr className=" text-light">
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    );
  }
}

export default Main;