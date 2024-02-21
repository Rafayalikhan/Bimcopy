// articleSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Add your API endpoints for article CRUD operations
// const API_URL = 'http://localhost:7000/api/articles';


export const fetchArticles = createAsyncThunk('get-article', async () => {
    const response = await fetch('http://localhost:7000/api/post/get-article', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },

  
    });
  
    const data = await response.json();


    console.log(data);
    return data;
  });



export const addArticle = createAsyncThunk('create-article', async (articleData) => {
  const formData = new FormData();
  formData.append('text', articleData.text);
  formData.append('file', articleData.file);
  
  const response = await fetch('http://localhost:7000/api/post/create-article', {
    method: 'POST',
    headers: {
     Authorization: `Bearer ${localStorage.getItem('token')}`,
     "Content-Type":"multipart/form-data"
    },
    body: formData,
   
  });

  const data = await response.json();
  return data;
});

export const updateArticle = createAsyncThunk('articles/updateArticle', async ({ id, articleData }) => {
  const response = await fetch(`http://localhost:7000/api/post/update-article/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(articleData),
  });

  const data = await response.json();
  return data;
});

export const deleteArticle = createAsyncThunk('delete-article', async (id) => {
  const response = await fetch(`http://localhost:7000/api/post/delete-article//${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const data = await response.json();
  return data;
});

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    token:"",
    articles:[],
    loading: false,
    isSuccess:false,
    error: null,
  },
  reducers: {
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder

   
    // Fetch All Articles //
    .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        console.log('Fulfilled Action:', action);
        state.loading = false;
        state.articles = action.payload.article;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
               // Add Articles //
      .addCase(addArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.loading = false;
        state.articles.push(action.payload);
      })
      .addCase(addArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;


               // Updates Articles //

      })
      .addCase(updateArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.loading = false;
        const updatedArticle = action.payload;
        const index = state.articles.findIndex((article) => article.id === updatedArticle.id);
        if (index !== -1) {
          state.articles[index] = updatedArticle;
        }
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      
      
                  // Delete Articles //     
      
      .addCase(deleteArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.loading = false;
        const deletedArticleId = action.payload.id;
        state.articles = state.articles.filter((article) => article.id !== deletedArticleId);
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default articleSlice.reducer;
