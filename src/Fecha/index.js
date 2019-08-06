import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const Fecha = () => (
  <div>
    <DatePicker hintText="Portrait Dialog" />
    <DatePicker hintText="Landscape Dialog" mode="landscape" />
    <DatePicker hintText="Dialog Disabled" disabled={true} />
    <DatePicker hintText="Open to Year" openToYearSelection={true} />
  </div>
);

export default Fecha;