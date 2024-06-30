import * as React from 'react';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'telegramId', headerName: 'Telegram id', width: 120 },
  { field: 'lastQuestionId', headerName: 'Oxirgi savol', width: 120 },
  { field: 'firstName', headerName: 'Ism', width: 130 },
  { field: 'lastName', headerName: 'Familya', width: 130 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'chatId', headerName: 'Chat id', width: 130 },
  { field: 'phoneNumber', headerName: 'Telefon', width: 150 },
  { field: 'joinedDate', headerName: 'Sana', width: 130 },
  { field: 'active', headerName: 'Bloklangan', width: 70 },
];

const rows = [
  { id :1, telegramId: 123456789, lastQuestionId: 2, firstName : "Javlon", lastName : "Ergashev", username : "@ejavlon", chatId : 345223234, phoneNumber: "+998900473141",joinedDate: "20.06.2024", active : "Faol"},
  { id :2, telegramId: 345345345, lastQuestionId: 42, firstName : "Jon", lastName : "Snow", username : "@john12", chatId : 34234234, phoneNumber: "+998900473141",joinedDate: "25.06.2024", active : "Faol"},  
  { id :3, telegramId: 234234234, lastQuestionId: 24, firstName : "Cersei", lastName : "Stark", username : "@sdf23", chatId : 22324353, phoneNumber: "+998900473141",joinedDate: "10.06.2024", active : "Faol"},    
  { id :3, telegramId: 234234545, lastQuestionId: 123, firstName : "Jaime", lastName : "Targaryen", username : "@sdf32", chatId : 2342345, phoneNumber: "+998900473141",joinedDate: "02.05.2024", active : "Faol"},    
  { id :4, telegramId: 452342342, lastQuestionId: 67, firstName : "Arya", lastName : "Melisandre", username : "@ddfgs3", chatId : 23423451, phoneNumber: "+998900473141",joinedDate: "26.03.2024", active : "Faol"},    
  { id :5, telegramId: 345345345, lastQuestionId: 234, firstName : "", lastName : "Clifford", username : "@dfgdfg334", chatId : 676867867, phoneNumber: "+998900473141",joinedDate: "13.06.2024", active : "Faol"},    
  { id :6, telegramId: 923423423, lastQuestionId: 34, firstName : "Ferrara", lastName : "Frances", username : "@ffff234", chatId : 6786723, phoneNumber: "+998900473141",joinedDate: "11.06.2024", active : "Faol"},    
  { id :7, telegramId: 522432344, lastQuestionId: 99, firstName : "Rossini", lastName : "Roxie", username : "@dfgdfg44", chatId : 23453444, phoneNumber: "+998900473141",joinedDate: "13.06.2024", active : "Faol"},    
  { id :8, telegramId: 632342342, lastQuestionId: 1, firstName : "Harvey", lastName : "Roxie", username : "@bbb243", chatId : 34534565, phoneNumber: "+998900473141",joinedDate: "06.08.2024", active : "Faol"},      
  { id :9, telegramId: 123456789, lastQuestionId: 2, firstName : "Javlon", lastName : "Ergashev", username : "@ejavlon", chatId : 345223234, phoneNumber: "+998900473141",joinedDate: "20.06.2024", active : "Faol"},
  { id :10, telegramId: 345345345, lastQuestionId: 42, firstName : "Jon", lastName : "Snow", username : "@john12", chatId : 34234234, phoneNumber: "+998900473141",joinedDate: "25.06.2024", active : "Faol"},  
  { id :11, telegramId: 234234234, lastQuestionId: 24, firstName : "Cersei", lastName : "Stark", username : "@sdf23", chatId : 22324353, phoneNumber: "+998900473141",joinedDate: "10.06.2024", active : "Faol"},    
  { id :12, telegramId: 234234545, lastQuestionId: 123, firstName : "Jaime", lastName : "Targaryen", username : "@sdf32", chatId : 2342345, phoneNumber: "+998900473141",joinedDate: "02.05.2024", active : "Faol"},    
  { id :13, telegramId: 452342342, lastQuestionId: 67, firstName : "Arya", lastName : "Melisandre", username : "@ddfgs3", chatId : 23423451, phoneNumber: "+998900473141",joinedDate: "26.03.2024", active : "Faol"},    
  { id :14, telegramId: 345345345, lastQuestionId: 234, firstName : "", lastName : "Clifford", username : "@dfgdfg334", chatId : 676867867, phoneNumber: "+998900473141",joinedDate: "13.06.2024", active : "Faol"},    
  { id :15, telegramId: 923423423, lastQuestionId: 34, firstName : "Ferrara", lastName : "Frances", username : "@ffff234", chatId : 6786723, phoneNumber: "+998900473141",joinedDate: "11.06.2024", active : "Faol"},    
  { id :16, telegramId: 522432344, lastQuestionId: 99, firstName : "Rossini", lastName : "Roxie", username : "@dfgdfg44", chatId : 23453444, phoneNumber: "+998900473141",joinedDate: "13.06.2024", active : "Faol"},    
  { id :17, telegramId: 632342342, lastQuestionId: 1, firstName : "Harvey", lastName : "Roxie", username : "@bbb243", chatId : 34534565, phoneNumber: "+998900473141",joinedDate: "06.08.2024", active : "Faol"},      
  { id :18, telegramId: 123456789, lastQuestionId: 2, firstName : "Javlon", lastName : "Ergashev", username : "@ejavlon", chatId : 345223234, phoneNumber: "+998900473141",joinedDate: "20.06.2024", active : "Faol"},
  { id :19, telegramId: 345345345, lastQuestionId: 42, firstName : "Jon", lastName : "Snow", username : "@john12", chatId : 34234234, phoneNumber: "+998900473141",joinedDate: "25.06.2024", active : "Faol"},  
  { id :20, telegramId: 234234234, lastQuestionId: 24, firstName : "Cersei", lastName : "Stark", username : "@sdf23", chatId : 22324353, phoneNumber: "+998900473141",joinedDate: "10.06.2024", active : "Faol"},    
  { id :21, telegramId: 234234545, lastQuestionId: 123, firstName : "Jaime", lastName : "Targaryen", username : "@sdf32", chatId : 2342345, phoneNumber: "+998900473141",joinedDate: "02.05.2024", active : "Faol"},    
  { id :22, telegramId: 452342342, lastQuestionId: 67, firstName : "Arya", lastName : "Melisandre", username : "@ddfgs3", chatId : 23423451, phoneNumber: "+998900473141",joinedDate: "26.03.2024", active : "Faol"},    
  { id :23, telegramId: 345345345, lastQuestionId: 234, firstName : "", lastName : "Clifford", username : "@dfgdfg334", chatId : 676867867, phoneNumber: "+998900473141",joinedDate: "13.06.2024", active : "Faol"},    
  { id :24, telegramId: 923423423, lastQuestionId: 34, firstName : "Ferrara", lastName : "Frances", username : "@ffff234", chatId : 6786723, phoneNumber: "+998900473141",joinedDate: "11.06.2024", active : "Faol"},    
  { id :25, telegramId: 522432344, lastQuestionId: 99, firstName : "Rossini", lastName : "Roxie", username : "@dfgdfg44", chatId : 23453444, phoneNumber: "+998900473141",joinedDate: "13.06.2024", active : "Faol"},    
  { id :26, telegramId: 632342342, lastQuestionId: 1, firstName : "Harvey", lastName : "Roxie", username : "@bbb243", chatId : 34534565, phoneNumber: "+998900473141",joinedDate: "06.08.2024", active : "Faol"},      
  { id :27, telegramId: 123456789, lastQuestionId: 2, firstName : "Javlon", lastName : "Ergashev", username : "@ejavlon", chatId : 345223234, phoneNumber: "+998900473141",joinedDate: "20.06.2024", active : "Faol"},
  { id :28, telegramId: 345345345, lastQuestionId: 42, firstName : "Jon", lastName : "Snow", username : "@john12", chatId : 34234234, phoneNumber: "+998900473141",joinedDate: "25.06.2024", active : "Faol"},  
  { id :29, telegramId: 234234234, lastQuestionId: 24, firstName : "Cersei", lastName : "Stark", username : "@sdf23", chatId : 22324353, phoneNumber: "+998900473141",joinedDate: "10.06.2024", active : "Faol"},    
  { id :30, telegramId: 234234545, lastQuestionId: 123, firstName : "Jaime", lastName : "Targaryen", username : "@sdf32", chatId : 2342345, phoneNumber: "+998900473141",joinedDate: "02.05.2024", active : "Faol"},    
  { id :31, telegramId: 452342342, lastQuestionId: 67, firstName : "Arya", lastName : "Melisandre", username : "@ddfgs3", chatId : 23423451, phoneNumber: "+998900473141",joinedDate: "26.03.2024", active : "Faol"},    
  { id :32, telegramId: 345345345, lastQuestionId: 234, firstName : "", lastName : "Clifford", username : "@dfgdfg334", chatId : 676867867, phoneNumber: "+998900473141",joinedDate: "13.06.2024", active : "Faol"},    
  { id :33, telegramId: 923423423, lastQuestionId: 34, firstName : "Ferrara", lastName : "Frances", username : "@ffff234", chatId : 6786723, phoneNumber: "+998900473141",joinedDate: "11.06.2024", active : "Faol"},    
  { id :34, telegramId: 522432344, lastQuestionId: 99, firstName : "Rossini", lastName : "Roxie", username : "@dfgdfg44", chatId : 23453444, phoneNumber: "+998900473141",joinedDate: "13.06.2024", active : "Faol"},    
  { id :35, telegramId: 632342342, lastQuestionId: 1, firstName : "Harvey", lastName : "Roxie", username : "@bbb243", chatId : 34534565, phoneNumber: "+998900473141",joinedDate: "06.08.2024", active : "Faol"},      
];

export default function Users() {

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <div style={{height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}                
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </Container>
  );
}

