import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DatePickerViews() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DatePicker label={'Ngày bắt đầu'}  />

    </LocalizationProvider>
      );
}

export default DatePickerViews;