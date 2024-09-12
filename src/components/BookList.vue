<template>
    <div>
        <h1>Books with ISBN > 1000</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
                <button @click="editBook(book)">Update</button>
                <button @click="deleteBook(book.id)">Delete</button>
            </li>
        </ul>
    </div>

    <div v-if="selectedBook">
        <h2>Update book</h2>
        <form @submit.prevent="updateBook">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="selectedBook.name"/>
            </div>
            <button type="submit">Save</button>
        </form>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import db from '../firebase/init.js'
import { collection, query, where, getDocs, deleteDoc, updateDoc, doc} from 'firebase/firestore';

export default {
    setup() {
        const books = ref([]);
        const selectedBook = ref(null);

        const fetchBooks = async () => {
            try {
                const q = query(collection(db, 'books'), where('isbn', '>', 1000));
                const querySnapshot = await getDocs(q);
                const booksArray = [];
                querySnapshot.forEach((doc) => {
                    booksArray.push({id:doc.id,  ...doc.data()});
                });
                books.value = booksArray;
            } catch(error) {
                console.error('Error fetching books: ', error);
            }
        };
        
        const deleteBook = async(bookId) => {
            try {
                const bookRef = doc(db, 'books', bookId);
                await deleteDoc(bookRef);
                books.value = books.value.filter((book) => book.id !== bookId);
                console.log("book deleted");
            } catch (error) {
                console.error("error deleting books: ", error);
            }
        };

        const editBook = (book) => {
            selectedBook.value = {...book};
        }

        const updateBook = async () => {
            try {
                const bookRef = doc(db, 'books', selectedBook.value.id);
                await updateDoc(bookRef, {
                    name: selectedBook.value.name
                });
                const index = books.value.findIndex((book) => book.id === selectedBook.value.id);
                books.value[index] = {...selectedBook.value};
                selectedBook.value = null;
                console.log('book updated');
            } catch(error) {
                console.error('error updating book', error);
            }
        };


        onMounted(()=> {
            fetchBooks();
        });

        return {
            books,
            selectedBook,
            deleteBook,
            updateBook,
            editBook
        };
    }
 };
</script>