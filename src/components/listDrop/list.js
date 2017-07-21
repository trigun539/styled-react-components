import React, { Component } from 'react';
import styles               from './setup.css';
import moment               from 'moment';
import propTypes            from 'prop-types';
import DocIcon from './word-file.png';
import PDFIcon from './pdf-file.png';


class List extends Component {

  render () { // This is my fault, but you should have known
  const { fileName, date } = this.props;
  let type = '';
  let formattedDate = '';

  if (date === '') {
    formattedDate = ' ';
  } else {
  formattedDate = moment(new Date (date)).format('MMMM Do YYYY, h:mm:ss a');
 }


  if (/\.pdf$/.test(fileName)) type = 'pdf';
  if (/\.(doc|docx)/.test(fileName)) type = 'doc';


  var fileBadge;
  if (type === 'pdf') {
    fileBadge = <img src={ PDFIcon } />;
  } else {
    fileBadge = <img src={ DocIcon } />;
  }
    return (
    <div className={styles['box-horizontal']} >
      <div className={styles['infoBox']}>
          <div className={styles['fileBox']} >
                <h2 className= {styles['fileName']}> { fileName } </h2>
          </div>
            <div className={styles['iconBox']}>
              <div className = {styles['doc']}> { fileBadge }  </div>
            </div>
               <div className={styles['timeBox']} >
                     <p className= {styles['date']}> { formattedDate } </p>
               </div>
      </div>
    </div>
    );
  }

}

//need to add custom propTypes
List.propTypes = {
  fileName: propTypes.string
  };

export default List;
